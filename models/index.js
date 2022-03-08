const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('test-db','user','password',{
    dialect : 'sqlite',
    host : './dev.sqlite'
})

sequelize.authenticate()
.then(() => {
    console.log('Connected')
})
.catch(err => {
    console.log('error',err)
})

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize, DataTypes)
db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})

.then(()=>{
    console.log('re-sync done')
})

//one to many relations

db.products.hasMany(db.reviews,{
    foreignKey : 'product_id',
    as : 'review'
})

db.reviews.belongsTo(db.products,{
    foreignKey : 'product_id',
    as : 'product'
})


module.exports = db