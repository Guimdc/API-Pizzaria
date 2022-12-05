const express = require('express');
const dashboardController = require("../controller/dashboardController");
const dashboardRouter = express.Router();

dashboardRouter.get('/borda', async (req, res, next) => {
    user = await dashboardController.getDashBorda(req.headers);
    res.status(200).send(user);
})

dashboardRouter.get('/massa', async (req, res, next) => {
    user = await dashboardController.getDashMassa(req.headers);
    res.status(200).send(user);
})

dashboardRouter.get('/sabor', async (req, res, next) => {
    user = await dashboardController.getDashSabor(req.headers);
    res.status(200).send(user);
})

module.exports = dashboardRouter;