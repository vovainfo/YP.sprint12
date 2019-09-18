const cardsRouter = require('express').Router();
const path = require('path');
const fs = require('fs');

function readCards() {
  try {
    const filePath = path.join(__dirname, '../data/cards.json');
    const rawdata = fs.readFileSync(filePath);
    return JSON.parse(rawdata);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return [];
  }
}
cardsRouter.get('/', (req, res) => {
  res.send(readCards());
});
module.exports = cardsRouter;
