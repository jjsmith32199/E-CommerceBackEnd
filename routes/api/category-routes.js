const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  }).then((categories) => res.json(categories).catch((err) => res.status(500).json));
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
    Category.findOne({
      include: [Product],
    }).then((categories) => res.json(categories).catch((err) => res.status(500).json));
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body).then((category) => res.status(200)
  .json(category)).catch((err) => res.status(400).json(err));
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((category) => res.status(200
    ).json(category)).catch((err) => res.status(200).json(category))
  // update a category by its `id` value
});
 
router.delete('/:id', (req, res) => {
  Catergory.delete(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((category)).catch((err) => res.status(200).json(category))
  // delete a category by its `id` value
});

module.exports = router;
