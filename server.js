<<<<<<< HEAD

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hemantrajpal:hemantrajpal@laptopgiantcluster.1xak4ce.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
=======

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hemantrajpal:hemantrajpal@laptopgiantcluster.1xak4ce.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
>>>>>>> 771d962655286b8c9248fb111b7ab8840b15d1c9
