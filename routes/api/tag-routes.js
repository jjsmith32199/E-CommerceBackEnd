const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{
      model: Product,
      through: ProductTag,
    },]
  }).then((tags) => {
    res.json(tags);
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    }, include: [{
      model: Product,
    },],
  }).then((tag) => {res.json(tag);
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body).then((tag) => res.json(tag))
  .catch((err) => res.json(err));
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(rew.body, {
    where: {
      id: req.params.id,
    },
  }).then((tag) => res.json(tag))
    .catch((err) => res.json(err));
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.desttoy({
  where: {
    id: req.params.id
  },
  }).then((tag) => res.json(tag))
  .catch((err) => res.json(err));
  // delete on tag by its `id` value
});

module.exports = router;
