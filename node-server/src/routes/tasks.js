const express = require('express');
const router = express.Router();
const tasks = require('../data/tasks');

// GET /tasks -> { tasks: [...] }
router.get('/', (req, res) => {
  return res.json({ tasks });
});

// POST /tasks with JSON { text: string } -> { message: 'Task added successfully' }
router.post('/', (req, res) => {
  const { text } = req.body;

  // Minimal validation to keep parity with the Python model
  if (!text || typeof text !== 'string') {
    // FastAPI would normally return a 422 for a malformed request body
    return res.status(422).json({ detail: 'Invalid request body: text is required' });
  }

  tasks.push(text);
  return res.json({ message: 'Task added successfully' });
});

module.exports = router;
