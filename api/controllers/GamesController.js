/**
 * GamesController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var _ = require('underscore');
var games = [];
var cards = [];
var createBoardCards = function createBoardCards(){
  _.each(_.range(7), function(item){
    _.each(_.range(item, 7),function(item2){
      if(item != 6 || item2 != 6){
        cards.push([item,item2])
      }
    })
  });
}
module.exports = {
  show: function(req, res) {
    if (_.size(cards) == 0){
      createBoardCards()
    }
    res.view({
      game: req.params.id
    });
  },

  new: function(req, res) {
    res.view();
  },

  playerscards: function(req, res) {
    cards = _.shuffle(cards);
    var newcards = cards.splice(7);
    var playercards = cards;
    cards = newcards;
    res.json({cards: playercards});
  },
  create: function(req, res) {
    console.log("Entre al create");
    Games.create({}, function(err, game) {
      if (err) return res.send(err, 500);

      res.redirect('/games/' + game.id);
    });
  }
};

