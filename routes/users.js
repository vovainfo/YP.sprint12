const usersRouter = require('express').Router();
const path = require('path');
const fs = require('fs');

function readUsers() {
  const filePath = path.join(__dirname, '../data/users.json');
  const rawdata = fs.readFileSync(filePath);
  return JSON.parse(rawdata);
}

usersRouter.get('/', (req, res) => {
  res.send(readUsers());
});

usersRouter.get('/:id', (req, res) => {
  const users = readUsers();
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((item) => item._id === req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = usersRouter;
