const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();
  router.idsSent = [];
  collection.countDocuments().then(count => router.numDocuments =  count);

  router.get('/random-landmark', (req, res) => {
    collection.aggregate([
      {$match:{"_id":{$nin:router.idsSent}}},
      {$sample: {size: 1}}])
      .toArray()
      .then((docs) => {
        if(router.idsSent.length === router.numDocuments - 1){
          router.idsSent = [];
        }
        router.idsSent.push(docs[0]._id);
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
