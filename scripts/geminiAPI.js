// scripts/geminiApi.js
const { spawn } = require('child_process');

/**
 * Runs the Python script `geminiRewrite.py` in a subprocess,
 * passing it the article text via stdin, then returning
 * the AI-rewritten summary via stdout.
 */
async function rewriteWithGemini(title, content) {
  return new Promise((resolve, reject) => {
    // Launch the Python script with environment variables (for GEMINI_API_KEY)
    const pyProcess = spawn('python3', ['scripts/geminiRewrite.py'], {
      env: { ...process.env },
    });

    let outputData = '';
    let errorData = '';

    pyProcess.stdout.on('data', (chunk) => {
      outputData += chunk.toString();
    });

    pyProcess.stderr.on('data', (chunk) => {
      errorData += chunk.toString();
    });

    // Check exit code
    pyProcess.on('close', (code) => {
      if (code !== 0) {
        return reject(new Error(`Python script exited with code ${code}: ${errorData}`));
      }
      resolve(outputData.trim());
    });

    // Combine title & content for your Python script
    const combinedText = `Title: ${title}\n\n${content}`;
    pyProcess.stdin.write(combinedText);
    pyProcess.stdin.end();
  });
}

module.exports = { rewriteWithGemini };
