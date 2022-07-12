//server setup
const express= require('express')
const cors=require('cors')
const app= express()
app.use(express.json())
app.use(cors())
// importing controller
const {getHouse,createHouse, deleteHouse,updateHouse}=require('./controller')

//creating end points
app.get('/api/houses',getHouse)
app.post('/api/houses',createHouse )
app.delete('/api/houses/:id',deleteHouse)
app.put('/api/houses/:id',updateHouse )

// connecting to the server and running the server
app.listen(4040,()=> console.log('server running on 4040'))
