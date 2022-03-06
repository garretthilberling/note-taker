const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
var { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = uuidv4(); 
  }
  console.log(uuidv4());
  res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
  notes = filterDelete(notes, req.params.id);
  res.json(notes);
});

function filterDelete (notes, id) {
  for (let i = 0; i < notes.length; i++) {
    if(notes[i].id == id) {
      delete notes[i]
    }
  }
  return notes.filter(() => true);
}

router.post('/notes', (req, res) => {
  notes.push(req.body);
});

module.exports = router;