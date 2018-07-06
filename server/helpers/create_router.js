const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/random-landmark', (req, res) => {
    collection
    .aggregate({ $sample: { size: 1 }
                 _id: {$ne: router.lastId}})
      .then((doc) => {
        router.lastId = doc._id;
        return res.json(doc)
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  return router;

};

module.exports = createRouter;
