/**
 * GamesController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  show: function(req, res) {
    res.view({
      game: req.params.id
    });
  },

  new: function(req, res) {
    res.view();
  },

  create: function(req, res) {
    console.log("Entre al create");
    Games.create({}, function(err, game) {
      if (err) return res.send(err, 500);

      res.redirect('/games/' + game.id);
    });
  }
};

