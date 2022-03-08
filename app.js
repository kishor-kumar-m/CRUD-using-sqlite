const express = require('express')
const cors = require('cors')

const router = require('./routes/productRouter.js')


const app = express()
app.use(express.json());

var corOptions ={
    origin :'https://localhost:8081'
}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/products', router)

app.get('/',(req,res)=>{
    res.json({message:'Testing'})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is running onport ${PORT}`)
} )