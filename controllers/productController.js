const { reviews } = require('../models')
const db = require('../models')

//create main model
const Product = db.products
const Review = db.reviews

//main work

//1.create product

exports.addProduct = async(req,res) =>{
    let info = {
        title : req.body.title,
        price : req.body.price,
        description : req.body.description,
        published : req.body.published ? req.body.published : false
    }
    await Product.create(info)
    .then((product) =>{
        res.send(product)
    })
    .catch((err)=>{
        console.log(err);
        res.send(err)
    })
   
}

/**2.Get All Products */
exports.getAllProduct = async(req,res) =>{
    let products = await Product.findAll({
        // attributes :['title','price']
    })
    res.status(200).json({
        product : products
    })
}

/**3.Get Single Product */
exports.getProduct = async(req,res) =>{
    let id = req.params.id
    let product = await Product.findOne({ where :{id:id}})
    res.status(200).json({
        product : product
    })
}


/**4.UpdateProduct */
exports.updateProduct = async(req,res) =>{
    let id = req.params.id
    const product = await Product.update(req.body, {where :{id:id}})
    res.status(200).json({
        product : product
    })
}

/**5.DeleteProduct */
exports.deleteProduct = async(req,res) =>{
    let id = req.params.id
    await Product.destroy({where :{id:id}})
    res.status(200).json({
        message :" Product is deleted"
    })
}

exports.getProductReviews = async(req,res) =>{
    const id = req.params.id

    const data = await Product.findAll({
        include : [{
            model: Review,
            as: 'review'
        }],
        where: { id: id }
    })
    res.status(200).json({
        data : data
    })
}