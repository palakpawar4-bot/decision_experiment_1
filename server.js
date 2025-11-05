// server.js - simple static server + proxy to Apps Script
const express = require('express');
const fetch = require('node-fetch'); // v2 (commonjs)
const path = require('path');

const app = express();
const APPS_SCRIPT_URL = 'http://localhost:3000/save';

app.use(express.json({ limit: '20mb' })); // parse JSON bodies
// serve your experiment files (index.html, experiment.js, jspsych/ etc)
app.use(express.static(path.join(__dirname)));

// proxy endpoint the browser will call
app.post('/save', async (req, res) => {
  try {
    // forward body to Apps Script
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const json = await response.json();
    res.status(response.status).json(json);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ status: 'error', message: err.toString() });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server + proxy running at http://localhost:${PORT}`));