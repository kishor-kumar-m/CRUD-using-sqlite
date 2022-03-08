const { resetWatchers } = require('nodemon/lib/monitor/watch')
const db= require('../models')

const Review = db.reviews

/**Add Review */
exports.addReview =async (req,res) =>{
    let data ={
        rating : req.body.rating,
        description : req.body.description
    }
    const review = await Review.create(data)
    res.status(201).json({
        review : review
    })
}

/**get all reviews */

exports.getReviews = async (req,res) => {
    const reviews =await Review.findAll({})
    res.status(200).json({
        reviews : reviews
    })
}