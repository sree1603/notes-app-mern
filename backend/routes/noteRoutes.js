const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Get all notes
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Create a note
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  const savedNote = await newNote.save();
  res.json(savedNote);
});

// Update a note
router.put('/:id', async (req, res) => {
  const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete a note
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

module.exports = router;
