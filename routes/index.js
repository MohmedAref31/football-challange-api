const router = require("express").Router();

const playerRouter = require("./player.route");

router.use('/player',playerRouter);


module.exports = router