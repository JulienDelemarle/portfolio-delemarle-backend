require('dotenv').config();
const express = require('express');

const app = express();

const PORT = 5050;

const cors = require('cors');
const { db } = require('./conf');

app.use(cors());
app.use(express.json());

app.get('/api/home', async (req, res) => {
  const [rows] = await db.query('SELECT text FROM Presentation');
  res.status(200).json(rows);
});

/* app.get('/api/skills', async (req, res) => {
  const trackId = req.params.id;

  const [results] = await db.query('SELECT * FROM track WHERE id = ?', [
    trackId,
  ]);
  if (results.length) res.json(results[0]);
  else res.status(404).send('track not found');
});

app.post('/api/tracks', async (req, res) => {
  const { title, youtube_url } = req.body;
  await db.query('INSERT INTO track(title, youtube_url) VALUES(?,?)', [
    title,
    youtube_url,
  ]);
  res
    .status(201)
    .send(`Received new message, you posted: ${title} at ${youtube_url}`);
});
*/

app.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.error(err);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
