const fs = require('fs');
const path = require('path');
const glob = require('glob');
const markdownLinkCheck = require('markdown-link-check');
const { promisify } = require('util');

const markdownLinkCheckAsync = promisify((markdown, config, callback) => {
  markdownLinkCheck(markdown, config, callback);
});

function isExternalLink(link) {
  return link.startsWith('http://') || link.startsWith('https://');
}

function isTemplateFile(filePath) {
  return filePath.includes('templates/');
}

async function checkLinks(filePath) {
  try {
    // Skip template files
    if (isTemplateFile(filePath)) {
      return { file: filePath, brokenLinks: [], skipped: true };
    }

    const markdown = fs.readFileSync(filePath, 'utf8');
    const config = {
      ignorePatterns: [
        { pattern: '^http://localhost' },
        { pattern: '^https://localhost' },
        { pattern: '^@site' },
        { pattern: '^@docusaurus' },
        { pattern: '^/' }, // Ignore internal links
        { pattern: 'linkedin.com' }, // Ignore LinkedIn links
      ],
      retryOn429: true,
      retryCount: 3,
      fallbackRetryDelay: '30s'
    };

    const results = await markdownLinkCheckAsync(markdown, config);
    const brokenLinks = results
      .filter(result => result.status !== 'alive')
      .filter(result => isExternalLink(result.link)); // Only include external links
    
    return { file: filePath, brokenLinks };
  } catch (error) {
    return { file: filePath, error: error.message };
  }
}

async function main() {
  try {
    const files = glob.sync('**/*.md', {
      ignore: ['node_modules/**', 'build/**'],
      nodir: true
    });

    console.log(`Found ${files.length} markdown files to check.\n`);
    console.log('Checking external links only. Internal links are checked by Docusaurus build.\n');
    console.log('Note: LinkedIn links are ignored due to rate limiting.\n');
    console.log('Note: Template files are skipped as they contain example links.\n');
    
    let totalBrokenLinks = 0;
    let filesWithErrors = 0;
    let skippedFiles = 0;
    
    for (const file of files) {
      process.stdout.write(`Checking ${file}...\n`);
      
      const result = await checkLinks(file);
      
      if (result.skipped) {
        console.log('Skipped (template file)\n');
        skippedFiles++;
        continue;
      }
      
      if (result.error) {
        console.error(`Error in ${file}: ${result.error}\n`);
        filesWithErrors++;
        continue;
      }
      
      if (result.brokenLinks.length > 0) {
        console.log(`Found ${result.brokenLinks.length} broken external links in ${file}:`);
        result.brokenLinks.forEach(link => {
          console.log(`  ${link.link} (${link.status})`);
        });
        console.log('');
        totalBrokenLinks += result.brokenLinks.length;
      }
    }
    
    console.log('\nSummary:');
    console.log(`Total files checked: ${files.length}`);
    console.log(`Files skipped (templates): ${skippedFiles}`);
    console.log(`Files with errors: ${filesWithErrors}`);
    console.log(`Total broken external links found: ${totalBrokenLinks}`);
    
    if (totalBrokenLinks > 0 || filesWithErrors > 0) {
      process.exit(1);
    } else {
      console.log('\nAll external links are valid! ✨');
      process.exit(0);
    }
  } catch (error) {
    console.error('Error checking links:', error);
    process.exit(1);
  }
}

main();