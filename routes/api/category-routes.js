const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((data) => {
    res.json(data);
      console.log(data);
  });


});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne(
    {
      where: { 
        id: req.params.id
      },
    }
  ).then((data) => {
    res.json(data);
    console.log(data);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.bulkCreate([
    {
      category_name: 'pants',
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      product_name: req.body.product_name,
    },
    {
  
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedData) => {
      // Sends the updated book as a json response
      res.json(updatedData);
    })
    .catch((err) => res.json(err));

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedData) => {
      res.json(deletedData);
    })
    .catch((err) => res.json(err))
});

module.exports = router;
