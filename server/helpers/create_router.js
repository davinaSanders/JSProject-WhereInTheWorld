const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/random-landmark', (req, res) => {
    collection.aggregate([
      {$match:{"_id":{$ne:router.lastId}}},
      {$sample: {size: 1}}])
      .toArray()
      .then((docs) => {
        router.lastId = docs[0]._id;
        return res.json(docs[0])
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
