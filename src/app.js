// src/app.js
const express = require('express');
const { collectDefaultMetrics, Registry } = require('prom-client');
const register = new Registry();

collectDefaultMetrics({ register });

const app = express();
app.use(express.json());

// Endpoints
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date() }));
app.get('/items', (req, res) => res.json([{ id: 1, name: 'item-1' }]));

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));

