// api/save.js (Vercel serverless function)
// Reads APPS_SCRIPT_URL from environment if available, otherwise falls back to the hard-coded URL.
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxi1JoHdEkcJE_iuU9IzJ0o-7IjcKqJKetbmSuoGCfL5Q9L-5F41r0ZRIlvEUjduHEsZg/exec';

module.exports = async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Shared-Key');
    return res.status(200).end();
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
    // allow browser to call this function from any origin (adjust if you want to restrict)
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(json);
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ status: 'error', message: err.toString() });
  }
};