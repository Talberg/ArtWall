const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {
        type:String,
        
    },
    game: {
        type: Object
    },
    player:{
        type:String
    },
    finished:{
        type:Boolean
    }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
