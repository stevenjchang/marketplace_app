const knex = require('../../database/index');

const selectTestTable = () => {
  knex.select().from('test')
  .then((result) => {
    // console.log('knex result ==>', result);
  })
}

const getPosts = (req, res) => {
  knex.select().from('sample_posts')
  .then((result) => {
    console.log('result ==>', result);
    res.status(200).send(result);
  })
}

const sampleReqObject = {
  title: 'Someone to take over lease',
  price: 900,
  bedroom: 4,
  location: 'neihu',
  shared: false,
}

const createListing = (req, res) => {
  console.log('you hit test ==>');
  const {
    title,
    price,
    bedroom,
    location,
    shared
  } = sampleReqObject;
  knex('listings').insert(sampleReqObject)
  .then((data) => {
    console.log('res ==>', data)
    res.status(200).send(data);
  })
  .catch(err => { console.log('err ==>', err )})
}

const getListings = (req, res) => {
  knex('listings').select()
  .then((data) => {
    console.log('res ==>', data)
    res.status(200).send(data);
  })
  .catch(err => { console.log('err ==>', err )})
}

module.exports = {
  selectTestTable,
  getPosts,
  createListing,
  getListings,
};
