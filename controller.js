const houses = require("./db.json");
let globalId=5

//exportable object that has 4 functions...
module.exports = {
    getHouse: (req, res) => {
      res.status(200).send(houses);
    },
    ///
    createHouse: (req, res) => {
      const { address, price, imageURL } = req.body;
      let newhouse = {
        id: globalId,
        address,
        price,
        imageURL,
      };
      houses.push(newhouse);
      res.status(200).send(house);
      globalId++;
    },
    deleteHouse:(req,res) => {
        let {id} = req.params
        let index = houses.findIndex(house => +house.id === +id)
        if(index === -1){
            res.status(400).send(`user not found`)
        } else {
            houses.splice(index,1)
            res.status(200).send(house)
        } 
    },

    updateHouse:(req,res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(house => +house.id === +id)
        if (type==='plus'){
           houses[index].price+=10000
           res.status(200).send(house)
        }
        else if(type==='minus'){
            houses[index].price-=10000
            res.status(200).send(house)
        
         }
        
        else{
            res.sendStatus(400)
        } 
    }
}
