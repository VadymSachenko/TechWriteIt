#!/usr/bin/env node
// scripts/publish.js

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const inquirer = require('inquirer');

const { rewriteWithGemini } = require('./geminiApi');
const { postToTelegramChannel } = require('./telegramApi');

// Grab the path to the markdown file from the command line
const articlePath = process.argv[2];

if (!articlePath) {
  console.error('Error: No article path provided.');
  console.log('Usage: node scripts/publish.js blog/my-post.md');
  process.exit(1);
}

async function main() {
  // 1. Verify file exists
  const fullPath = path.resolve(articlePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`Error: File not found -> ${fullPath}`);
    process.exit(1);
  }

  // 2. Parse the Markdown file
  const mdContent = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(mdContent);

  const title = frontmatter.title || 'Untitled';
  // Adjust this base to match your actual site
  const baseUrl = 'https://your-docusaurus-site.com';
  // Turn the file path into a URL
  const relativePath = articlePath.replace(/\.md$/, '');
  const articleUrl = `${baseUrl}/${relativePath}`;

  console.log(`\nFound article: ${title}`);
  console.log(`Path: ${articlePath}`);
  console.log(`URL: ${articleUrl}\n`);

  // 3. Send to Gemini (Python script) for rewriting
  let geminiSummary;
  try {
    geminiSummary = await rewriteWithGemini(title, content);
  } catch (err) {
    console.error('Gemini API call failed:', err.message);
    process.exit(1);
  }

  // 4. Show the summary, ask for approval
  console.log(`\n** Gemini Summary **\n${geminiSummary}\n`);
  const { approve } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'approve',
      message: 'Do you approve this summary as is?',
      default: false,
    },
  ]);

  let finalSummary = geminiSummary;
  // If user disapproves, let them edit in a text editor
  if (!approve) {
    const { editedSummary } = await inquirer.prompt([
      {
        type: 'editor',
        name: 'editedSummary',
        message: 'Edit the summary in your editor, then save/close to continue:',
      },
    ]);
    finalSummary = editedSummary;
  }

  // 5. Confirm final publish
  console.log('\nFinal summary:\n', finalSummary);
  const { confirmPublish } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmPublish',
      message: 'Publish this to Telegram?',
      default: false,
    },
  ]);

  if (!confirmPublish) {
    console.log('Aborted. Nothing published.');
    process.exit(0);
  }

  // 6. Post to Telegram
  try {
    const message = `${finalSummary}\n\nRead more: ${articleUrl}`;
    await postToTelegramChannel(message);
    console.log('Success! Check your Telegram channel.');
  } catch (err) {
    console.error('Failed posting to Telegram:', err.message);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
