const Player = require("../models/player.model");


const playerCtl = {
    createPlayer : async(req, res)=>{
        try{
            const {name,image} = req.body;

            const player = new Player({name,image});

            player.save()
                    .then(()=>{
                        res.send({message:"player add successfully"})
                    }).catch(e=>{
                        res.status(400).send({message:e.message})
                        console.log(e)
                    })
        }catch(e){
            res.status(500).send({message:e.message})
        }
    },
    deletePlayer : async (req, res)=>{
        try {
                const {id} = req.params;

                const player =await Player.findByIdAndDelete(id);

                if(!player)
                    return res.status(400).send({message:"player not found"})

                res.send({message:"player deleted succesfully"})
        } catch (error) {
            res.status(500).send({message:error.message})
        }
    },
    getActivePlayers : async (req, res)=>{
        try {
                const players = await Player.find({isActive:true});

                if(!players)
                    return res.status(400).send({message:"player not found"})

                players.sort(()=> .5 - Math.random())

                res.send(players)
        } catch (error) {
            res.status(500).send({message:error.message})
        }
    },
    getNotActivePlayers : async (req, res)=>{
        try {
                const players = await Player.find({isActive:false});

                if(!players)
                    return res.status(400).send({message:"player not found"})

                res.send(players)
        } catch (error) {
            res.status(500).send({message:error.message})
        }
    },
    getAllPlayers : async (req, res)=>{
        try {
                const players = await Player.find({});

                if(!players)
                    return res.status(400).send({message:"player not found"})

                res.send(players)
        } catch (error) {
            res.status(500).send({message:error.message})
        }
    },
    updatePlayer : async(req, res)=>{
        try{
            const {id} = req.params
            if(!id)
                return res.status(404).send({message:"please provide id"})

            

            const player = await Player.findByIdAndUpdate(id,req.body);
            if(!player)
                res.status(404).send({message:"player not found"})
            res.send({message:"player updated success"})
        }catch(e){
            res.status(500).send({message:e.message})
        }
    }
}



module.exports = playerCtl