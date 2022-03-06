const router = require('express').Router();
const { notes } = require('../../db/db');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
let results = notes;
res.json(results);
});

router.delete('/notes', (req, res) => {
const id = res.notes.id;
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4(); 
});

module.exports = router;