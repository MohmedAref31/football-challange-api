const router = require("express").Router();
const {createPlayer, updatePlayer, deletePlayer, getAllPlayers, getActivePlayers, getNotActivePlayers} = require("../controllers/player.controller")


router.route('/')
        .post(createPlayer)

router.route("/:id")
        .delete(deletePlayer)
        .patch(updatePlayer)

router.get("/all-players",getAllPlayers)
router.get("/not-active-players",getNotActivePlayers)
router.get("/active-players",getActivePlayers)


module.exports = router