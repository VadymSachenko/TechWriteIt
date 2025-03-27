// scripts/telegramApi.js
const axios = require('axios');

/**
 * Publishes the given text to your Telegram channel via Bot API.
 */
async function postToTelegramChannel(message) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  // Use your channel handle or numeric chat ID
  const channelId = '@kaHava_news';

  try {
    const response = await axios.post(telegramUrl, {
      chat_id: channelId,
      text: message,
      // If you want Telegram to parse Markdown or HTML:
      // parse_mode: 'MarkdownV2'
    });
    return response.data;
  } catch (err) {
    console.error('Error posting to Telegram:', err);
    throw err;
  }
}

module.exports = { postToTelegramChannel };
