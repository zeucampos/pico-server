import express from "express";

class AppController {
    constructor() {
        this.middleware();
        this.routes();
    }

    middleware() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express;