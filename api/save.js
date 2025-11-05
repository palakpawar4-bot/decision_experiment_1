// api/save.js (Vercel serverless function)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxi1JoHdEkcJE_iuU9IzJ0o-7IjcKqJKetbmSuoGCfL5Q9L-5F41r0ZRIlvEUjduHEsZg/exec'; // replace

module.exports = async (req, res) => {
  // handle preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'https://palakpawar4-bot.github.io/');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).send('ok');
  }

  try {
    const body = req.body;
    // forward to Apps Script
    const fetchRes = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const json = await fetchRes.json();
    // allow browser to call this function from GitHub Pages
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(json);
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ status: 'error', message: err.toString() });
  }
};