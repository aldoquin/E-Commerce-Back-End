const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll().then((data) => {
    res.json(data);
      console.log(data);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne(
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
  // create a new tag
 Tag.bulkCreate([
    {
      tag_name: 'spanish rap',
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
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

      res.json(updatedData);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedData) => {
        res.json(deletedData);
      })
      .catch((err) => res.json(err))
  });
});

module.exports = router;
