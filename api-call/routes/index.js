const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  // call the star wars api and then render the species list from the response into the index view
  axios.get('https://swapi.py4e.com/api/species')
    .then(response => {
      console.log(response.data.results);
      const list = response.data.results;
      res.render('index', { list });
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;
