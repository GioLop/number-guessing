#!/usr/bin/env node

const { GameController } = require("../src/controller/game.controller");

const controller = new GameController();

controller.init();