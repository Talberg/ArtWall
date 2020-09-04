const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
const { PromiseProvider } = require("mongoose");
const gameModel = {
    open: {
        'x0y0': false,
        'x1y0': false,
        'x2y0': false,
        'x3y0': false,
        'x4y0': false,
        'x5y0': false,
        'x6y0': false,
        'x7y0': false,
        'x8y0': false,
        'x9y0': false,
        'x10y0': false,
        'x11y0': false,
        'x12y0': false,
        'x13y0': false,
        'x14y0': false,
        'x0y1': false,
        'x1y1': false,
        'x2y1': false,
        'x3y1': false,
        'x4y1': false,
        'x5y1': false,
        'x6y1': false,
        'x7y1': false,
        'x8y1': false,
        'x9y1': false,
        'x10y1': false,
        'x11y1': false,
        'x12y1': false,
        'x13y1': false,
        'x14y1': false,
        'x0y2': false,
        'x1y2': false,
        'x2y2': false,
        'x3y2': false,
        'x4y2': false,
        'x5y2': false,
        'x6y2': false,
        'x7y2': false,
        'x8y2': false,
        'x9y2': false,
        'x10y2': false,
        'x11y2': false,
        'x12y2': false,
        'x13y2': false,
        'x14y2': false,
        'x0y3': false,
        'x1y3': false,
        'x2y3': false,
        'x3y3': false,
        'x4y3': false,
        'x5y3': false,
        'x6y3': false,
        'x7y3': false,
        'x8y3': false,
        'x9y3': false,
        'x10y3': false,
        'x11y3': false,
        'x12y3': false,
        'x13y3': false,
        'x14y3': false,
        'x0y4': false,
        'x1y4': false,
        'x2y4': false,
        'x3y4': false,
        'x4y4': false,
        'x5y4': false,
        'x6y4': false,
        'x7y4': false,
        'x8y4': false,
        'x9y4': false,
        'x10y4': false,
        'x11y4': false,
        'x12y4': false,
        'x13y4': false,
        'x14y4': false,
        'x0y5': false,
        'x1y5': false,
        'x2y5': false,
        'x3y5': false,
        'x4y5': false,
        'x5y5': false,
        'x6y5': false,
        'x7y5': true,
        'x8y5': false,
        'x9y5': false,
        'x10y5': false,
        'x11y5': false,
        'x12y5': false,
        'x13y5': false,
        'x14y5': false,
        'x0y6': false,
        'x1y6': false,
        'x2y6': false,
        'x3y6': false,
        'x4y6': false,
        'x5y6': false,
        'x6y6': false,
        'x7y6': false,
        'x8y6': false,
        'x9y6': false,
        'x10y6': false,
        'x11y6': false,
        'x12y6': false,
        'x13y6': false,
        'x14y6': false,
        'x0y7': false,
        'x1y7': false,
        'x2y7': false,
        'x3y7': false,
        'x4y7': false,
        'x5y7': false,
        'x6y7': false,
        'x7y7': false,
        'x8y7': false,
        'x9y7': false,
        'x10y7': false,
        'x11y7': false,
        'x12y7': false,
        'x13y7': false,
        'x14y7': false,
        'x0y8': false,
        'x1y8': false,
        'x2y8': false,
        'x3y8': false,
        'x4y8': false,
        'x5y8': false,
        'x6y8': false,
        'x7y8': false,
        'x8y8': false,
        'x9y8': false,
        'x10y8': false,
        'x11y8': false,
        'x12y8': false,
        'x13y8': false,
        'x14y8': false,
        'x0y9': false,
        'x1y9': false,
        'x2y9': false,
        'x3y9': false,
        'x4y9': false,
        'x5y9': false,
        'x6y9': false,
        'x7y9': false,
        'x8y9': false,
        'x9y9': false,
        'x10y9': false,
        'x11y9': false,
        'x12y9': false,
        'x13y9': false,
        'x14y9': false,
        'x0y10': false,
        'x1y10': false,
        'x2y10': false,
        'x3y10': false,
        'x4y10': false,
        'x5y10': false,
        'x6y10': false,
        'x7y10': false,
        'x8y10': false,
        'x9y10': false,
        'x10y10': false,
        'x11y10': false,
        'x12y10': false,
        'x13y10': false,
        'x14y10': false,
    },
    GroundFloor: {
        'x0y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y0': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y1': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y2': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y3': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y4': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y5': {
            open: true,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y5': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y6': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y7': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y8': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y9': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x0y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x1y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x2y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x3y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x4y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x5y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x6y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x7y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x8y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x9y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x10y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x11y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x12y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x13y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
        'x14y10': {
            open: false,
            name: '',
            items: [],
            players: [],
            monsters: [],
            token:[],
            endTurn: false,
            doors: 4,
            numDoors: 4
        },
    },
    doors: {

        'x0y0': 'trbl',
        'x1y0': 'trbl',
        'x2y0': 'trbl',
        'x3y0': 'trbl',
        'x4y0': 'trbl',
        'x5y0': 'trbl',
        'x6y0': 'trbl',
        'x7y0': 'trbl',
        'x8y0': 'trbl',
        'x9y0': 'trbl',
        'x10y0': 'trbl',
        'x11y0': 'trbl',
        'x12y0': 'trbl',
        'x13y0': 'trbl',
        'x14y0': 'trbl',
        'x0y1': 'trbl',
        'x1y1': 'trbl',
        'x2y1': 'trbl',
        'x3y1': 'trbl',
        'x4y1': 'trbl',
        'x5y1': 'trbl',
        'x6y1': 'trbl',
        'x7y1': 'trbl',
        'x8y1': 'trbl',
        'x9y1': 'trbl',
        'x10y1': 'trbl',
        'x11y1': 'trbl',
        'x12y1': 'trbl',
        'x13y1': 'trbl',
        'x14y1': 'trbl',
        'x0y2': 'trbl',
        'x1y2': 'trbl',
        'x2y2': 'trbl',
        'x3y2': 'trbl',
        'x4y2': 'trbl',
        'x5y2': 'trbl',
        'x6y2': 'trbl',
        'x7y2': 'trbl',
        'x8y2': 'trbl',
        'x9y2': 'trbl',
        'x10y2': 'trbl',
        'x11y2': 'trbl',
        'x12y2': 'trbl',
        'x13y2': 'trbl',
        'x14y2': 'trbl',
        'x0y3': 'trbl',
        'x1y3': 'trbl',
        'x2y3': 'trbl',
        'x3y3': 'trbl',
        'x4y3': 'trbl',
        'x5y3': 'trbl',
        'x6y3': 'trbl',
        'x7y3': 'trbl',
        'x8y3': 'trbl',
        'x9y3': 'trbl',
        'x10y3': 'trbl',
        'x11y3': 'trbl',
        'x12y3': 'trbl',
        'x13y3': 'trbl',
        'x14y3': 'trbl',
        'x0y4': 'trbl',
        'x1y4': 'trbl',
        'x2y4': 'trbl',
        'x3y4': 'trbl',
        'x4y4': 'trbl',
        'x5y4': 'trbl',
        'x6y4': 'trbl',
        'x7y4': 'trbl',
        'x8y4': 'trbl',
        'x9y4': 'trbl',
        'x10y4': 'trbl',
        'x11y4': 'trbl',
        'x12y4': 'trbl',
        'x13y4': 'trbl',
        'x14y4': 'trbl',
        'x0y5': 'trbl',
        'x1y5': 'trbl',
        'x2y5': 'trbl',
        'x3y5': 'trbl',
        'x4y5': 'trbl',
        'x5y5': 'trbl',
        'x6y5': 'trbl',
        'x7y5': 'trbl',
        'x8y5': 'trbl',
        'x9y5': 'trbl',
        'x10y5': 'trbl',
        'x11y5': 'trbl',
        'x12y5': 'trbl',
        'x13y5': 'trbl',
        'x14y5': 'trbl',
        'x0y6': 'trbl',
        'x1y6': 'trbl',
        'x2y6': 'trbl',
        'x3y6': 'trbl',
        'x4y6': 'trbl',
        'x5y6': 'trbl',
        'x6y6': 'trbl',
        'x7y6': 'trbl',
        'x8y6': 'trbl',
        'x9y6': 'trbl',
        'x10y6': 'trbl',
        'x11y6': 'trbl',
        'x12y6': 'trbl',
        'x13y6': 'trbl',
        'x14y6': 'trbl',
        'x0y7': 'trbl',
        'x1y7': 'trbl',
        'x2y7': 'trbl',
        'x3y7': 'trbl',
        'x4y7': 'trbl',
        'x5y7': 'trbl',
        'x6y7': 'trbl',
        'x7y7': 'trbl',
        'x8y7': 'trbl',
        'x9y7': 'trbl',
        'x10y7': 'trbl',
        'x11y7': 'trbl',
        'x12y7': 'trbl',
        'x13y7': 'trbl',
        'x14y7': 'trbl',
        'x0y8': 'trbl',
        'x1y8': 'trbl',
        'x2y8': 'trbl',
        'x3y8': 'trbl',
        'x4y8': 'trbl',
        'x5y8': 'trbl',
        'x6y8': 'trbl',
        'x7y8': 'trbl',
        'x8y8': 'trbl',
        'x9y8': 'trbl',
        'x10y8': 'trbl',
        'x11y8': 'trbl',
        'x12y8': 'trbl',
        'x13y8': 'trbl',
        'x14y8': 'trbl',
        'x0y9': 'trbl',
        'x1y9': 'trbl',
        'x2y9': 'trbl',
        'x3y9': 'trbl',
        'x4y9': 'trbl',
        'x5y9': 'trbl',
        'x6y9': 'trbl',
        'x7y9': 'trbl',
        'x8y9': 'trbl',
        'x9y9': 'trbl',
        'x10y9': 'trbl',
        'x11y9': 'trbl',
        'x12y9': 'trbl',
        'x13y9': 'trbl',
        'x14y9': 'trbl',
        'x0y10': 'trbl',
        'x1y10': 'trbl',
        'x2y10': 'trbl',
        'x3y10': 'trbl',
        'x4y10': 'trbl',
        'x5y10': 'trbl',
        'x6y10': 'trbl',
        'x7y10': 'trbl',
        'x8y10': 'trbl',
        'x9y10': 'trbl',
        'x10y10': 'trbl',
        'x11y10': 'trbl',
        'x12y10': 'trbl',
        'x13y10': 'trbl',
        'x14y10': 'trbl',

    },
    GroundFloorRooms: {
        AbandonedRoom: {
            name: "Abandon Room",
            doors: 4,
            card: "o",
            token:[],
            entry: ''

        },
        BallRoom: {
            name: "Ball Room",
            doors: 4,
            card: 'e',
            token:[],
            entry: ''

        },
        BloodyRoom: {
            name: "Bloody Room",
            doors: 4,
            card: 'i',
            token:['bloodRoom'],      
         entry: ''

        },
        CharedRoom: {
            name: "Charred Room",
            doors: 4,
            card: 'o',
            token:[],
            entry: ''

        },
        CollapsedRoom: {
            name: "Collapsed Room",
            doors: 4,
            card: false,
            token:['collapsedRoom']  ,        
            entry: '',
            collapsed: true


        },
        CreakyHallway: {
            name: "Creaky Hallway",
            doors: 4,
            card: false,
            token:[],
            entry: ''

        },
        DustyHallway: {
            name: "Dusty Hallway",
            doors: 4,
            card: false,
            token:[],
            entry: ''

        },
        JunkRoom: {
            name: "Junk Room",
            doors: 4,
            card: 'o',
            token:['junkRoom'] ,
            entry: ''

        },
        GameRoom: {
            name: 'Game Room',
            doors: 3,
            card: 'e',
            token:[],
            entry: ''
        },
        Patio: {
            name: 'Patio',
            doors: 3,
            card: 'e',
            token:[],
            entry: ''
        },
        DinningRoom: {
            name: 'Dinning Room',
            doors: 2,
            card: 'o',
            token:[],
            entry: ''
        },
        Gardens: {
            name: 'Gardens',
            doors: 2,
            card: 'e',
            token:[],
            entry: ''
        },
        Kitchen: {
            name: 'Kitchen',
            doors: 2,
            card: 'o',
            token:[],
            entry: ''
        },
        Library: {
            name: 'Library',
            doors: 2,
            card: 'e',
            token:[],
            entry: ''
        },
        OrganRoom: {
            name: 'Dinning Room',
            doors: 2,
            card: 'e',
            token:[],
            entry: ''
        },
        StatuaryCorridor: {
            name: 'Statuary Corridor',
            doors: 2,
            card: 'e',
            token:[],
            entry: ''
        },
        CoalChute: {
            name: 'Coal Chute',
            doors: 1,
            card: false,
            token:[],
            entry: 'one way to basement'
        },
        Chapel: {
            name: 'Chapel',
            doors: 1,
            card: 'e',
            token:[],
            entry: ''
        },
        Conservatory: {
            name: 'Conservatory',
            doors: 1,
            card: 'e',
            token:[],
            entry: ''
        },
        Graveyard: {
            name: 'Graveyard',
            doors: 1,
            card: 'e',
            token:[],
            entry: ''
        },


    },
    OmenArray: [
        'SpiritBoard',
        'Spear',
        'Skull',
        'Ring',
        'Medallion',
        'Mask',
        'Madman',
        'HollySymbol',
        'Girl',
        'Dog',
        'CrystalBall',
        'Book',
        'Bite'
        ,],
    EventArray: [
        'BloodyVision',
        "BurningMan",
        'CreepyPuppet',
        'CreepyCrawlies',
        'Debris',
        'DisquietingSounds',
        'DripDripDrip',
        'FootSteps',
        'Funeral',
        'GraveDirt',
        'JonahsTurn',
        'Groundskeeper',
        'NightView',
        'PhoneCall',
        'Rotten',
        'SomethingHidden',
        'SomethingSlimy',
        'Spider',
        'TheVoice',
        'AngryBeing',
        'Webs',
        'Skeletons',
        "aMomentOfHope"

    ],
    Event: {
        BloodyVision: {
            description: 'You must attempt a sanity roll: 4+ : you steel yourself. Gain 1 Sanity || 2-3: Lose 1 Sanity',
            action: ['bloodyVision'],
            flavorText: 'The walls of thes room are damp with blood. The blood drips from the ceiling, down the walls, over the furniture, and onto your shoes. A blink it is gone......',
            ifLost: false,
            companion: false,

        },
        BurningMan: {
            description: 'You must attempt a sanity roll: 4+ :  Gain 1 Sanity || 2-3: Explorer moved to Entrance Hall',
            action: ['burningNam'],
            flavorText: 'A man on fire runs at through the room. His skin bubbles and cracks as it falls from him',
            ifLost: false,
            companion: false,

        },
        ClosetDoor: {
            description: 'Put Closet token here. Explorers may  roll 2 dice to try to open the closet|| 4:Draw item card || 2-3 : Draw event card || 0-1: Draw event cars and remove the closet token',
            action: ['closetDoor'],
            flavorText: 'That closet door is open ... just a crack. There must be something inside...',
            ifLost: false,
            companion: false,
        },
        CreepyCrawlies: {
            description: 'Must attempt a Sanity Roll || 5+ : gain 1 sanity || 1-4: lose sanity || 0 : lose 2 sanity ',
            action: ['creepyCrawlies'],
            flavorText: 'Thousands of bugs spill out on your skin under your cloths and in your hair',
            ifLost: false,
            companion: false,
        },
        CreepyPuppet: {
            description: 'The puppet attacks you with a might roll of 4, if you take damage the player with the spear gains 2 might(unless you have the spear)',
            action: ['creepyPuppet'],
            flavorText: 'You see one odf those dolls that gie you the willies. It jumps at you with a tiny spear',
            ifLost: false,
            companion: false,
        },
        Debris: {
            description: 'You must attempt a speed roll|| 3+ :  Gain 1 Speed || 1-2: Explorer is Buried, take 1 die physical die || 0 :Explorer is Buried, take 2 die physical die  ',
            action: ['debris'],
            flavorText: 'Plaster falls from the walls and ceiling',
            ifLost: false,
            companion: false,
        },
        DisquietingSounds: {
            description: 'Roll 6 die, if the total is greater than or equal to the omen count gain 1 sanity, if not take 1 die of mental damage  ',
            action: ['disquietingSounds'],
            flavorText: "A baby's cry, lost and abandoned. A scream. The crack of breaking glass . Then silence ",
            ifLost: false,
            companion: false,
        },
        DripDripDrip: {
            description: 'Explores in this room roll 1 less die when in this room, leave a drip token here. ',
            action: ['dripDripDrip'],
            flavorText: 'A rhythmic sound that needles at your brain',
            ifLost: false,
            companion: false,
        },
        FootSteps: {
            description: 'You roll 1 die, 2 if in the Chapel || 4 :  Gain 1 might along with nearest explorer|| 3: Gain 1 might, nearest player loses 1 sanity || 2 : lose 1 sanity || 1 : lose 1 speed || 0: everyone loses 1 from the trait of their choice.  ',
            action: ['footSteps'],
            flavorText: 'Floorboards creek slowly ',
            ifLost: false,
            companion: false,
        },
        Funeral: {
            description: 'You must attempt a sanity roll|| 4+ :  Sanity up 1  || 2-3: lose 1 sanity || 0-1 :lose 1 might and 1 sanity , if the Graveyard or Crypt is open put your player there, your choice',
            action: ['funeral'],
            flavorText: 'You see an open coffin but.... YOU ARE INSIDE!  ',
            ifLost: false,
            companion: false,
        },
        GraveDirt:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['graveDirt'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        JonahsTurn:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['jonahsTurn'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        Groundskeeper:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['groundskeeper'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        NightView:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['nightView'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        PhoneCall:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['phoneCall'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        Rotten:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['rotten'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        SomethingHidden:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['somethingHidden'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        SomethingSlimy:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['somethingSlimy'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        Spider:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['spider'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        TheVoice:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['theVoice'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        AngryBeing:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['angryBeing'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        Webs:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['webs'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        Skeletons:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['skeletons'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },
        aMomentOfHope:
        {
            description: 'You must attempt a might roll|| 4+ :  might up 1  || 0-3: 1 point of physical damage at he start of each of yor turns, gain +1 to a trait or end your turn in one of the these rooms :Balcony, Gardens,Graveyard,Larder,Patio,or Tower ',
            action: ['aMomentOfHope'],
            flavorText: 'This room is covers in a thick layer of dirt. You cough as it gets on your skin and in your lungs',
            ifLost: false,
            companion: false,
        },




    },
    ItemArray:[
        'MedicalKit',
        'LuckyStone',
        'Idol',
        'HealingSalve',
        'Dynamite',
        'DarkDice',
        'Candle',
        'Bottle',
        'BloodDagger',
        'Bell'
    ],
    Item:{
        MedicalKit:{
            description: 'Once per turn, you can attempt a knowledge roll to heal yourself or player in the same room || 8+ : Gain 3 points of physical traits || 6-7: gain up to 2 points physical || 4-5 : gain 1 point physical trait || 0-3 : nothing happens',
            action: ['item'],
            flavorText: 'A doctor bag, depleted of some critical resources ',
            use:['medicalKit'],
            ifLost: false,
            companion: false,
        },
        LuckyStone:{
            description: 'After each roll you may reroll and pick the higher roll, discard after use',
            action: ['item'],
            flavorText: 'A smooth, ordinary-looking rock. You sense it will bring you good fortune ',
            use:['luckyStone'],
            ifLost: false,
            companion: false,
        },
        Idol:{
            description: 'Every time you roll for an event, trait, or combat you may add 2 dice (up to 8), each time you do lose 1 sanity',
            action: ['item'],
            flavorText: 'Perhaps its chosen you for some greater purpose Like human sacrifice.',
            use:['idol'],
            ifLost: false,
            companion: false,
        },
        HealingSalve:{
            description: 'Use on self or player in the same room, heal up might or speed to starting value, discarded after use',
            action: ['item'],
            flavorText: 'A sticky paste in a shallow bowl',
            use:['healingSalve'],
            ifLost: false,
            companion: false,
        },
        Dynamite:{
            description: 'Instead of attacking you may throw the Dynamite through a door into an adjacent room. Everyone in that room that have a might and speed traits in that room must roll an speed attempt || 5+ : No damage || 0-4 : take 4 physical damage ',
            action: ['item'],
            flavorText: 'The fuse is not lit ..... yet',
            use:['dynamite'],
            ifLost: false,
            companion: false,
        },
        DarkDice:{
            description: 'Once per-turn, you cna roll 3 dice || 6: Move to the location of another player || 5: Move one other player ,in the same room as you, to adjacent room || 4: gain 1 physical trait point || 3: Move to adjacent room || 2: gain 1 mental trait point || 1: draw an event card || 0: reduce all your traits to the lowest value above the skull symbol ,discard dice.',
            action: ['item'],
            flavorText: 'Are you feeling lucky!?',
            use:['darkDice'],
            ifLost: false,
            companion: false,
        },
        Candle:{
            description: ' If you draw an event card, roll 1 additional die (max 8) for event trait rolls || If you have Book, Bell, and Candle , gain 2 in each trait. The first time you lose one of those 3 items you lose 2 of each trait',
            action: ['item'],
            flavorText: 'It makes the shadows move - at least, you hope it is doing that......',
            use:['candle'],
            ifLost: false,
            companion: false,
        },
        Bottle :{
            description: 'Once during your turn after the haunt is revealed, you can roll 3 dice and drink from the Bottle || 6: Choose a room, go there || 5: Gain 2 might and 2 speed || 4: gain 2 knowledge and 2 sanity || 3:gain 1 knowledge and lose 1 might || 2:lose 2 knowledge and 2 sanity || 1 : lose 2 might and 2 speed || 0: lose 2 from all traits ',
            action: ['item'],
            flavorText: 'An opaque vial containing a black liquid',
            use:['bottle'],
            ifLost: false,
            companion: false,
        },
        BloodDagger:{
            description: 'You roll 3 additional dice when making might attacks with this weapon, If you do then lose 1 speed || You cant use other weapons while using this one || This item cant be traded or dropped, if stolen, take 2 dice of physical damage',
            action: ['item'],
            flavorText: 'A nasty weapon. Needles and tubes extend from the handle ... an plunge right into your veins!',
            use:['bloodDagger'],
            ifLost: false,
            companion: false,
            weapon:true
        },
        Bell:{
            description: 'Gain 1 sanity now || if lost lose 1 sanity || Once during your turn after the haunt is revealed , you may roll sanity || 5+ : Move any number unimpeded heros 1 space closer to you || 0-4 : The traitor can move any number of monster 1 space closer.  ',
            action: ['item'],
            flavorText: 'A brass bell that makes a resonant clang',
            use:['bell'],
            ifLost: false,
            companion: false,
        }



    }
    ,

    Omen: {
        SpiritBoard: {
            description: 'Before moving you may look at the top tile ',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A board with letters and numbers to call the dead...',
            use: ['isHaunt?', 'if haunt then', 'if not you may look at the top of the tiles, store that in the next tile spot on the game.'],
            ifLost: false,
            companion: false,
        },
        Spear: {
            description: 'You roll 2 extra dice when making a Might roll with this weapon (max 8 dice)  ',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A weapon pulsing with power...',
            use: ['spear'],
            ifLost: false,
            companion: false,
        },
        Skull: {
            description: 'If you take mental damage you can take it ALL as physical instead',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A skull, cracked and missing teeth....',
            use: ['skull'],
            ifLost: false,
            companion: false,
        },
        Ring: {
            description: 'If you attack an opponent that has a sanity you can roll with sanity rather than might and they take mental damage not physical ',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A battered ring with an incomprehensible inscription...',
            use: ['ring'],
            ifLost: false,
            companion: false,
        },
        Medallion: {
            description: 'You are immune to  the effects ok the Pentagram Chamber,Crypt,and Graveyard ',
            action: ['item', 'knowledge-Up-1',],
            flavorText: 'A medallion inscribed with a pentagram....',
            use: ['medallion'],
            ifLost: false,
            companion: false,
        },
        Mask: {
            description: 'sanity roll-----   4+: put on or take off the mask(put on : gain 2 knowledge and lose 2 sanity|| take off: gain 2 sanity and lose 2 knowledge ), 3-0 : Cant use mask this turn ',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A somber mask to hide your intentions',
            use: ['mask'],
            ifLost: false,
            companion: true,
        },
        Madman: {
            description: 'Gain 2 Might and 1 Sanity ',
            action: ['item', 'sanity-Up-1', 'might-Up-2'],
            use: ['madman'],
            flavorText: 'A raving, frothing madman!',
            ifLost: 'lose 1 sanity and 2 might ',
            companion: true,

        },
        HollySymbol: {
            description: 'Gain 2 sanity  ',
            action: ['item', 'knowledge-Up-1', 'sanity-Up-2'],
            flavorText: 'A symbol of calm in an upsetting world',
            use: ['holySymbol'],
            ifLost: ['sanity-Down-2'],
            companion: false,

        },
        Girl: {
            description: 'Gain 1 sanity and 1 knowledge ',
            action: ['item', 'knowledge-Up-1', 'sanity-Up-1'],
            flavorText: 'A Girl',
            use: ['mask'],
            ifLost: 'lose 1 sanity and 1 knowledge ',
            companion: true,

        },
        Dog: {
            description: 'Gain 1 Might and 1 Sanity',
            action: ['item', 'knowledge-Up-2'],
            flavorText: '',
            use: ['dog'],
            ifLost: 'lose 1 sanity and 1 might ',
            companion: true,


        },
        CrystalBall: {
            description: ' knowledge roll --------   4+ : Search Event or Item cards and put it on the top of the deck, 1-3 : You avert your eyes and lose 1 Sanity, 0 : You stare into hell, lose 2 Sanity',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'Hazy images appear in the glass....',
            use: ['crystalBall'],
            ifLost: false,
            companion: false

        },
        Book: {
            description: 'Gain 2 Knowledge now , if lost lose 2 Knowledge',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A diary or lab notes? Ancient script or modern ravings?',
            ifLost: ['sanity-Down-2', 'remove-item'],
            companion: false

        },
        Bite: {
            description: 'You are bitten by a mysterious shadow, might roll to save, you must beat ',
            action: ['bite'],                                                    // might 4 attack roll defendable, 
            flavorText: 'A growl, then sent of death. Pain. Darkness.Gone',
            ifLost: false,
            companion: false
        }

    },
    OmenMaster: {
        SpiritBoard: {
            description: 'Before moving you may look at the top tile ',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A board with letters and numbers to call the dead...',
            use: ['isHaunt?', 'if haunt then', 'if not you may look at the top of the tiles, store that in the next tile spot on the game.'],
            ifLost: false,
            companion: false,
        },
        Spear: {
            description: 'You roll 2 extra dice when making a Might roll with this weapon (max 8 dice)  ',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A weapon pulsing with power...',
            use: ['spear'],
            ifLost: false,
            companion: false,
        },
        Skull: {
            description: 'If you take mental damage you can take it ALL as physical instead',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A skull, cracked and missing teeth....',
            use: ['skull'],
            ifLost: false,
            companion: false,
        },
        Ring: {
            description: 'If you attack an opponent that has a sanity you can roll with sanity rather than might and they take mental damage not physical ',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A battered ring with an incomprehensible inscription...',
            use: ['ring'],
            ifLost: false,
            companion: false,
        },
        Medallion: {
            description: 'You are immune to  the effects ok the Pentagram Chamber,Crypt,and Graveyard ',
            action: ['items'],
            flavorText: 'A medallion inscribed with a pentagram....',
            use: ['medallion'],
            ifLost: false,
            companion: false,
        },
        Mask: {
            description: 'sanity roll-----   4+: put on or take off the mask(put on : gain 2 knowledge and lose 2 sanity|| take off: gain 2 sanity and lose 2 knowledge ), 3-0 : Cant use mask this turn ',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A somber mask to hide your intentions',
            use: ['mask'],
            ifLost: false,
            companion: true,
        },
        Madman: {
            description: 'Gain 2 Might and 1 Sanity ',
            action: 'Add madman to companion array ,Gain 2 Might and 1 Sanity'['item', 'sanity-Up-1', 'might-Up-2'],
            use: ['madman'],
            flavorText: 'A raving, frothing madman!',
            ifLost: 'lose 1 sanity and 2 might ',
            companion: true,

        },
        HollySymbol: {
            description: 'Gain 2 sanity  ',
            action: ['sanity-Up-2'],
            flavorText: 'A symbol of calm in an upsetting world',
            use: ['holySymbol'],
            ifLost: ['sanity-Down-2'],
            companion: false,

        },
        Girl: {
            description: 'Gain 1 sanity and 1 knowledge ',
            action: ['item', 'knowledge-Up-1', 'sanity-Up-1'],
            flavorText: 'A Girl',
            use: ['mask'],
            ifLost: 'lose 1 sanity and 1 knowledge ',
            companion: true,

        },
        Dog: {
            description: 'Gain 1 Might and 1 Sanity',
            action: ['item', 'knowledge-Up-2'],
            flavorText: '',
            use: ['dog'],
            ifLost: 'lose 1 sanity and 1 might ',
            companion: true,


        },
        CrystalBall: {
            description: ' knowledge roll --------   4+ : Search Event or Item cards and put it on the top of the deck, 1-3 : You avert your eyes and lose 1 Sanity, 0 : You stare into hell, lose 2 Sanity',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'Hazy images appear in the glass....',
            use: ['crystalBall'],
            ifLost: false,
            companion: false

        },
        Book: {
            description: 'Gain 2 Knowledge now , if lost lose 2 Knowledge',
            action: ['item', 'knowledge-Up-2'],
            flavorText: 'A diary or lab notes? Ancient script or modern ravings?',
            use: ['book'],
            ifLost: ['sanity-Down-2', 'remove-item'],
            companion: false

        },
        Bite: {
            description: 'You are bitten by a mysterious shadow, might roll to save, you must beat ',
            action: ['attack-might-4'],                                                    // might 4 attack roll defendable, 
            flavorText: 'A growl, then sent of death. Pain. Darkness.Gone',
            use: ['bite'],
            ifLost: false,
            companion: false
        }

    },
    GroundFloorRoomsArray: [
        'AbandonedRoom',
        'BallRoom',
        'BloodyRoom',
        'CharedRoom',
        'CollapsedRoom',
        'CreakyHallway',
        'DustyHallway',
        'JunkRoom',
        'GameRoom',
        'Patio',
        'DinningRoom',
        'Gardens',
        'Kitchen',
        'Library',
        'OrganRoom',
        'StatuaryCorridor',
        'CoalChute',
        'Chapel',
        'Conservatory',
        'Graveyard'],
    CharacterArray: [
        {
            color: 'white',
            speedIndex: 4,
            mightIndex: 3,
            sanityIndex: 3,
            knowledgeIndex: 5,
            speed: [0, 2, 2, 4, 4, 5, 5, 6, 6],
            might: [0, 1, 2, 3, 4, 5, 5, 6, 6],
            sanity: [0, 1, 3, 3, 4, 5, 5, 6, 7],
            knowledge: [0, 4, 5, 5, 5, 5, 6, 7, 8],
            age: 57,
            birthday: 'not real sure ',
            hobbies: [],
            chosen: false,
            name: 'Professor Longfellow'

        },
        {
            color: 'white',
            speedIndex: 3,
            mightIndex: 3,
            sanityIndex: 5,
            knowledgeIndex: 4,
            speed: [0, 2, 3, 3, 4, 5, 6, 7, 7],
            might: [0, 1, 2, 2, 4, 4, 5, 5, 7],
            sanity: [0, 3, 4, 5, 5, 6, 7, 7, 8],
            knowledge: [0, 1, 3, 3, 4, 5, 6, 6, 8],
            about: 'small descriptions of the character will be here ',
            age: 62,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Father Rhinehardt'

        },
        {
            color: 'orange',
            speedIndex: 3,
            mightIndex: 4,
            sanityIndex: 3,
            knowledgeIndex: 4,
            speed: [0, 3, 4, 5, 6, 6, 6, 7, 7],
            might: [0, 2, 3, 3, 3, 4, 5, 6, 7],
            sanity: [0, 1, 2, 3, 4, 5, 5, 6, 7],
            knowledge: [0, 2, 3, 4, 4, 5, 6, 6, 6],
            about: 'small descriptions of the character will be here ',
            age: 9,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Missy Dubourde'

        },
        {
            color: 'orange',
            speedIndex: 4,
            mightIndex: 4,
            sanityIndex: 3,
            knowledgeIndex: 3,
            speed: [0, 4, 4, 4, 4, 5, 6, 8, 8],
            might: [0, 2, 2, 3, 3, 4, 4, 6, 7],
            sanity: [0, 1, 2, 3, 4, 4, 5, 5, 5],
            knowledge: [0, 1, 2, 3, 4, 4, 5, 5, 5],
            about: 'small descriptions of the character will be here ',
            age: 8,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Zoe Ingstrom'

        },
        {
            color: 'blue',
            speedIndex: 3,
            mightIndex: 4,
            sanityIndex: 3,
            knowledgeIndex: 4,
            speed: [0, 2, 3, 3, 5, 5, 6, 6, 7],
            might: [0, 2, 3, 3, 4, 5, 5, 5, 6],
            sanity: [0, 4, 4, 4, 5, 6, 7, 8, 8],
            knowledge: [0, 1, 3, 4, 4, 4, 5, 6, 6],
            about: 'small descriptions of the character will be here ',
            age: 37,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Madame Zostra'

        },
        {
            color: 'blue',
            speedIndex: 4,
            mightIndex: 3,
            sanityIndex: 3,
            knowledgeIndex: 4,
            speed: [0, 3, 4, 4, 4, 4, 6, 7, 8],
            might: [0, 2, 2, 2, 4, 4, 5, 6, 6],
            sanity: [0, 4, 4, 4, 5, 6, 7, 8, 8],
            knowledge: [0, 4, 5, 5, 5, 5, 6, 6, 7],
            about: 'small descriptions of the character will be here ',
            age: 42,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Vivian Lopez'

        },
        {
            color: 'red',
            speedIndex: 5,
            mightIndex: 3,
            sanityIndex: 3,
            knowledgeIndex: 3,
            speed: [0, 4, 4, 4, 5, 6, 7, 7, 8],
            might: [0, 2, 3, 3, 4, 5, 6, 6, 7],
            sanity: [0, 1, 2, 3, 4, 5, 5, 5, 7],
            knowledge: [0, 2, 3, 3, 4, 5, 5, 5, 7],
            about: 'small descriptions of the character will be here ',
            age: 20,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Darwin "Flash" Williams'

        },
        {
            color: 'red',
            speedIndex: 5,
            mightIndex: 3,
            sanityIndex: 3,
            knowledgeIndex: 3,
            speed: [0, 2, 2, 2, 3, 4, 5, 5, 6],
            might: [0, 4, 5, 5, 6, 6, 7, 8, 8],
            sanity: [0, 2, 2, 3, 4, 5, 5, 6, 7],
            knowledge: [0, 2, 2, 3, 3, 5, 5, 6, 6],
            about: 'small descriptions of the character will be here ',
            age: 23,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Ox Bellows'

        },
        {
            color: 'purple',
            speedIndex: 3,
            mightIndex: 3,
            sanityIndex: 3,
            knowledgeIndex: 5,
            speed: [0, 3, 3, 4, 5, 6, 6, 7, 8],
            might: [0, 3, 3, 3, 4, 5, 6, 7, 8],
            sanity: [0, 3, 3, 3, 4, 5, 6, 6, 6],
            knowledge: [0, 2, 3, 3, 4, 5, 6, 7, 8],
            about: 'small descriptions of the character will be here ',
            age: 18,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Heather Granville'

        },
        {
            color: 'purple',
            speedIndex: 4,
            mightIndex: 3,
            sanityIndex: 5,
            knowledgeIndex: 3,
            speed: [0, 2, 3, 4, 4, 4, 5, 6, 8],
            might: [0, 3, 4, 4, 4, 4, 5, 6, 8],
            sanity: [0, 1, 1, 2, 4, 4, 4, 5, 6],
            knowledge: [0, 2, 3, 3, 4, 4, 5, 6, 8],
            about: 'small descriptions of the character will be here ',
            age: 21,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Jenny LeClerc'

        },
        {
            color: 'green',
            speedIndex: 4,
            mightIndex: 3,
            sanityIndex: 4,
            knowledgeIndex: 3,
            speed: [0, 3, 3, 3, 4, 6, 6, 7, 7],
            might: [0, 2, 3, 3, 4, 5, 5, 6, 8],
            sanity: [0, 3, 4, 4, 4, 5, 6, 6, 7],
            knowledge: [0, 3, 4, 4, 5, 6, 7, 7, 8],
            about: 'small descriptions of the character will be here ',
            age: 13,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Peter Akimoto'

        },
        {
            color: 'green',
            speedIndex: 3,
            speed: [0, 3, 4, 4, 4, 5, 6, , 7, 8],
            mightIndex: 4,
            might: [0, 2, 3, 3, 4, 5, 6, 6, 7],
            sanityIndex: 4,
            sanity: [0, 3, 3, 3, 4, 5, 6, 7, 8],
            knowledgeIndex: 3,
            knowledge: [0, 1, 3, 3, 5, , 5, 6, 6, 7],
            about: 'small descriptions of the character will be here ',
            age: 12,
            birthday: 'not real sure ',
            hobbies: [],
            fears: 'spoops',
            chosen: false,
            name: 'Brandon Jaspers'

        },
    ],

    // need to make the the players array  that is passed through the post route
    players: {},
    allReady: false,
    currentCard: {
        display: 'hidden',
        type: 'Type',
        title: ''
    },
    omenCount: 0,
    nextItem: false,
    nextEvent: false,
    nextRoom: false,

}
const Game = {
    player:{
        sneak:1,
        strength:1,
        speech:1,
        health:20,
        MP:10,
        bag:[],
        level:1,
        hand:false,
        body:false,
        head:false,
        location:'maybe?'
    },
    game:{
      
        
           
     
        intro:{
            where:'firstShore',
            src:"https://lh3.googleusercontent.com/pw/ACtC-3euveF8n4fhhLPcfK_B9gzemc7Fi1dxdphTHD0XITkZdWgNNBUvLlsKVzcX3aL2jZnOKWAPvvROzQ9jD6WFeGRa9dHd4nDD9rauHpf8Af0-1frcSd_cNs5s8hZ5zGDwOlI_eRZ5Rn9Vfzs2OpLUa74n3Q=w1213-h903-no?authuser=0",
            dialog:"You wake up to the waves crashing around you. Blue as far as the eye can see. You sit upon small rock formation that looks like it was built rather than sculpted by the ocean. You climb atop the rocks and can barley make out an island on the horizon. ",
            responses:['next'],
            next:'intro2'

        },
        intro2:{
            where:'firstShore',
            src:"https://lh3.googleusercontent.com/pw/ACtC-3euveF8n4fhhLPcfK_B9gzemc7Fi1dxdphTHD0XITkZdWgNNBUvLlsKVzcX3aL2jZnOKWAPvvROzQ9jD6WFeGRa9dHd4nDD9rauHpf8Af0-1frcSd_cNs5s8hZ5zGDwOlI_eRZ5Rn9Vfzs2OpLUa74n3Q=w1213-h903-no?authuser=0",
            dialog:"There is a rowboat tied up to a dock made of stone. Even the ropes seem to be made of stone. This made the wood of the boat stand out. ",
            responses:['next'],
            next:'wall'

        },
        wall:{
            where:'firstShore',
            src:'https://lh3.googleusercontent.com/pw/ACtC-3eAIE28YY7WfPSyVH3g0CiaTt-U_huwXIroyxo3_HtrhbJf4q11ald29kAywfmwf7e1AFpT8G8yYpfklLTOd5Gzh7pqDgFsaR8LCD7tWR6fLCnxYqZOg7-69bpt9nGJIRUHPLfUWhxXJXoBj8h6ppOOMQ=w1031-h763-no?authuser=0',
            dialog:'You climb on the boat, using the oar you break the stone rope and push of the boat and begin the journey to the new island.',
            responses:['next'],
            next:'island'
        },
        island:{
            src:'https://lh3.googleusercontent.com/pw/ACtC-3eAIE28YY7WfPSyVH3g0CiaTt-U_huwXIroyxo3_HtrhbJf4q11ald29kAywfmwf7e1AFpT8G8yYpfklLTOd5Gzh7pqDgFsaR8LCD7tWR6fLCnxYqZOg7-69bpt9nGJIRUHPLfUWhxXJXoBj8h6ppOOMQ=w1031-h763-no?authuser=0',
            dialog:'After rowing for an hour or so you are about 100 yards from the island, you keep thinking you see a flash come from the island out of the corner of your eye but every time you look nothing is there. The water has become to shallow for your boat so you have to walk to the beach.',
            next:'owl'
        },
        owl:{
            src:'https://lh3.googleusercontent.com/pw/ACtC-3dinxsD3g8x-t0xO7kp99DhiFx0vSqF4a8sTF_14gBEoGFmk8WUw8fTWG-fHWlIgeqmt6WxI-daJyGlFz2k0dqofSZzqUO2tLrbYqgZIwbK6BuSyi_979hg56_tWuZbwy0eaLe__Wis9ylBJ4IZxCHNfA=w574-h744-no?authuser=0',
            dialog:'Soaking wet and exhausted you collapsed  on the sand with releif. But just as you start to nod off the flash is there again.  Startled you sit up and finally see the source of the light. An Owl. ',
            next:'owlIntro'

        },
        owlIntro:{
            src:'https://lh3.googleusercontent.com/pw/ACtC-3dinxsD3g8x-t0xO7kp99DhiFx0vSqF4a8sTF_14gBEoGFmk8WUw8fTWG-fHWlIgeqmt6WxI-daJyGlFz2k0dqofSZzqUO2tLrbYqgZIwbK6BuSyi_979hg56_tWuZbwy0eaLe__Wis9ylBJ4IZxCHNfA=w574-h744-no?authuser=0',
            dialog: 'In your head you hear, "Welcome to the Distant Temple, please dont be alarmed, ,I am here to help you. But you are going to have to help me in order to help yourself."',
            next:'owlIntro2'
        },
        owlIntro2:{
            src: 'https://lh3.googleusercontent.com/pw/ACtC-3dinxsD3g8x-t0xO7kp99DhiFx0vSqF4a8sTF_14gBEoGFmk8WUw8fTWG-fHWlIgeqmt6WxI-daJyGlFz2k0dqofSZzqUO2tLrbYqgZIwbK6BuSyi_979hg56_tWuZbwy0eaLe__Wis9ylBJ4IZxCHNfA=w574-h744-no?authuser=0',
            dialog:'So I need 3 things from you. There is a cave to your left that was recently sealed off by a fallen tree, and in there is the ONLY place that my favorite berry grows. Forward there is a long path that will lead you to a friend of mine that is holding a ring for me he does bite sometimes.',
            next:'owlIntro3'
        },
        owlIntro3:{
            src:'https://lh3.googleusercontent.com/pw/ACtC-3dinxsD3g8x-t0xO7kp99DhiFx0vSqF4a8sTF_14gBEoGFmk8WUw8fTWG-fHWlIgeqmt6WxI-daJyGlFz2k0dqofSZzqUO2tLrbYqgZIwbK6BuSyi_979hg56_tWuZbwy0eaLe__Wis9ylBJ4IZxCHNfA=w574-h744-no?authuser=0',
            dialog:'To the right along the beach are sleeping rocks, if you wake them up it will not be pretty. But there is an old sword in a tree that you will need over there before I can get you off this Island.',
            next:'boatGone'
        }, 
        boatGone:{
            src:'boat bye bye pic',
            dialog:'Oh also your boat seems to have left you, and on its way back home. Such a good boat...',
            next:'BeachHub1'
        },
        BeachHub1:{
            // here is where the quest area should propogate with the current quests. Should be a "hub area that you can go to each place and put in a save state here also"
            movement:['Cave','Rocks','Jungle'],
            dialog:'Where are you going?',
            next:'Obelisk',
            checkpoint:"allThree"
        
        },
        Cave:{
            checkpoint:'log',
            choice:['Attack Log','Move Log'],
            dialog:'A large log blocks the entrance to the cave, what would you like to do?',
            enter:'InsideCave',
            back:'BeachHub1',
            dialog2:'The log is now out of the way, cool air rushes past you from the mouth of the cave. Go in or back? '
            

            
        },
        LogBreaks:{
            item:'Bark',
            src:'cave bark',
            dialog:'You break the log in half with your strength. A piece of the log splinters off, you pick it up and put it in your pocket.',
            next:'LogCheckpoint',
            

        }, 
        LogAttackFail:{
            damage:2,
            dialog:'You lose health, be carful!',
            next:'Cave',
            
            

        },
        LogCheckpoint:{
            checkpointReached:'log',
            dialog:"You have Cleared the log CHECKPOINT",
            next:'Cave'


        },
        InsideCave:{
            dialog:'You walk into the cave, water drips from stalagmites. Under each Stalagmite is a bush dotted with rainbow colored berries. Each bush also has a small lizard sleeping in front of it. All you can make out is the size of each lizard. All are different sizes ranging from a few inches to about a foot long. Which Lizard"s bush would you like to choose? ',
            movement:['Small Lizard','Medium With 2 Tails','Large no tail'],
            back:'Cave',
            checkpoint:'lizard',
            dialog2:'The lizards and the bushes seem to have turned into stalagmite versions of themselves...  ',
            enter:'BeachHub1'
        },
        SmallLizard:{
            choice:['Sneak Past Lizard', 'Attack on the lizard'],
            dialog:'There is a small lizard curled up, Would you rather step on the lizard or sneak past?'

        },
        MediumWith2Tails:{
            choice:['Sneak Past Lizard','Attack on the lizard'],
            dialog:'There is a medium sized lizard with 2 tails. What do you do?'
        },
        Largenotail:{
            choice:['Sneak Past Lizard','Attack on the lizard'],
            dialog:'The largest lizard has no tail and is snoring load. What do you do?'

        },
        LizardSneakSucc:{
            dialog:'You sneak past the sleeping lizard and pick one berry of each color. Without making a sound you sneak back out side the cave',
            next:'LizardCheckpoint',
            item:'RainbowBerries'
            


        },
        LizardAttackSucc:{
            dialog:'You crush the lizard Under your boot',
            next:'LizardCheckpoint',
            item:'RainbowBerries'
            


        },
        LizardFail:{
            dialog:'The lizard bites you but not before you grab the berries',
            next:'LizardCheckpoint',
            item:'RainbowBerries',
            damage:'2'
        },
        LizardCheckpoint:{
            dialog:'Checkpoint Reached!',
            next:'InsideCave',
            checkpointReached:'lizard',
        },
        Jungle:{
             dialog:'The path through the jungle is thick with vegitation. Deeper and Deeper into the jungle you go hoping that the Owl"s friend is easy to spot...',
             next:'DeepJungle',
             back:'BeachHub1'
             
        },
        DeepJungle:{
            dialog:'Spiderwebs block your path. There is a sign on the other side of the webs but you cant read it from here. What will you do?',
            choice:['Sneak Past The Webs','Attack The Webs'],
            back:'Jungle'

        },
        SpiderSneakSucc:{
            dialog:'You carefully  sneak past the webs',
            next:'SpiderWeb',
            

            
        },
        SpiderSneakFail:{
            dialog:'You brush the webs with your shoulder, thousands of spiders stream down the web! You run but not fast enough! You are bitten!',
            damage:4,
            next:"SpiderWeb"
        },
        SpiderWeb:{
            dialog:'You pocket some of the rope like webs',
            item:'Spiderweb',
            next:'SpiderCheckpoint',

        },
        SpiderCheckpoint:{
            dialog:'Spider Checkpoint reached',
            checkpointReached:'spider',
            next:'Sign'
        },
        MoveLogSucc:{
            dialog:'You move the log out of your path.',
            next:'LogCheckpoint',
            item:"Grub"

        },
        MoveLogFail:{
            dialog:'You try hard to move the log but you only pick up a few inches then drop it on your toe! Take 2 Damage',
            damage:2,
            next:'Cave'
        },
        Sign:{
            dialog:'Sign Reads: "Welcome, I am Home". It is places next to a shallow hole. ',
            next:'Hole'
        },
        Hole:{
            dialog:'At the bottom of the hole, a snake is curled and ready to strike. "Welcome to my home! I bet that Owl sent you to take my ring." as the snake uncoils you catch a the shine of gold at the tip of its tail. What will you do?  "',
            give:'Grub',
            choice:['Attack the Snake', 'Ask Snake for the Ring'],
            checkpoint:'hole',
            dialog2:'Would you like to Help the poor guy?',
            enter:'Help The Snake',
            back:'BeachHub1'

        },
        AttackSnakeSucc:{
            dialog:'You jump down on to the snake and grab the ring before the snake can react you are out of the hole, ring in hand!',

            next:'Ring'
        },
        AttackSnakeFail:{
            dialog:'You jump in the hole but the snake moves, you grab the ring, but before you leave the hole the snake bites you! Take 4 Damage! ',
            damage:4,
            next:"Ring"
        },
        AskSnakeSucc:{
            dialog:'You ask the snake nicely for the Owl ring. After a second the answer is clear as the snake moves off of the ring. "Okay, take it, no use to me anyways!" You pick up the Ring',
            next:'Ring'
        },
        AskSnakeFail:{  
            dialog:'"FIGHT ME FOR IT!',
            choice:['Attack the Snake'],
            

        },
        Ring:{
            dialog:'You pocket the Gold ring with a blue stone',
            item:'Ring',
            next:'HoleCheckpoint'
        },
        HoleCheckpoint:{
            dialog:'As you leave the hole it collapses around the snake, you can hear muffled screams coming from the ruble',
            checkpointReached:'hole',
            next:'Hole'
        },
        HelpTheSnake:{
            dialog:'You cant help....',
            back:'Hole',
        },
        AttackWebSucc:{
            dialog:'You run so fast through the webs that the spiders dont have time to bite you.',
            next:'SpiderWeb'
        },
        AttackWebFail:{
            dialog:'You are to slow, the spiders rush you, biting your exposed skin! Take 4 damage',
            damage:4,
            next:'SpiderWeb'
        },








      

    },
    save:'intro',
    checkPoint:{
        log:false,
        lizard:false,
        spider:false
    }
  

}







router.post('/newGame', function (req, res, next) {
    //need to add the players to the game Model

    console.log(req.body)
    let j = 1

    

    console.log(j)

    db.Game.create({ game: Game })
        .then((data) => {
            console.log(data)
            // function that will put the players nested in the correct spot in the game data
            db.User.findOneAndUpdate(
                { email:req.body.email},
                { $push: { games: data._id } },
                function (err, data) {
                    console.log(err)
                }
            )

           



            // write a map here that will push each player to the array



        })



})
router.get('/:id', function (req, res, callback) {

    db.Game.findById(req.params.id)
        .then(Game => {
            console.log(Game)
            res.json(Game)
        })
})
router.post('/:id', function (req, res, callback) {

    db.Game.findOneAndUpdate({ _id: req.params.id },
        { game: req.body }
    ).then(data => { console.log(data) }

    )
})

module.exports = router