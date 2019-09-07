
const db = require('../models');


// TODO Refactor names later

// show all cities
const index = (req, res) => {
    db.Comment.find({}, (error, foundParks) => {
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
  db.Comment.findById(req.params.id, (error, foundPark) => {
    if (error) return res.status(500).json(error);
    // response.sendResponse(res, foundPokemons);
    res.status(200).json({
      status:200,
      data:foundPark
    })  
    });
}

// create
const create = (req, res) => {
  console.log("---------")
  console.log("----ctrl create-----")
  db.Comment.create(req.body, (err, createdPost) => {
    if (err) return res.status(400).json({status: 400, message: "something went wrong, please try again..."});
    // TODO add user later
    // createdPost.user = req.session.currentUser.id;
    createdPost.save((error, savedPost) => {
      if (error) return res.status(500).send(error);
      res.send(savedPost);
    })
    // res.status(201).json({status: 201, data: createdPost});
  });
};

// creating post for a city
// const createPost = 

module.exports = {
  index,
  show,
  create
  // createPost
};