
const db = require('../models');

// show all cities
const index = (req, res) => {
    db.Parks.find({}, (error, foundParks) => {
        if (error) return res.status(500).json(error);
        console.log({foundParks})
        // response.sendResponse(res, foundCities);
        res.status(200).json({
          status:200,
          data:foundParks
        })
    });
    
}

// show one city, taking id
const show = (req, res) => {
  console.log('requesting one park')
  db.Parks.findById(req.params.id, (error, foundPark) => {
    if (error) return res.status(500).json(error);
    // response.sendResponse(res, foundPokemons);
    res.status(200).json({
      status:200,
      data:foundPark
    })  
    });
}

// creating post for a city
// const createPost = 

module.exports = {
  index,
  show,
  // createPost
};