const express = require('express');
const { Todo } = require('../../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const allPosts = await Todo.findAll({ order: [['createdAt', 'DESC']] });
      res.json(allPosts);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { text } = req.body;
      const newTodo = await Todo.create({ text });
      const newPost = await Todo.findByPk(newTodo.id);
      res.json(newPost);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    await Todo.update({ text }, { where: { id } });
    const newTodo = await Todo.findByPk(id);
    res.json(newTodo);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
