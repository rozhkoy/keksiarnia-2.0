const sequelize = require("../db")
const {DataTypes} = require("sequelize")



const product = sequelize.define("product", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: {type:DataTypes.STRING, allowNull: false},
  price: {type:DataTypes.INTEGER, allowNull: false},
  img: {type:DataTypes.STRING, allowNull: false},
  typeID: {type:DataTypes.INTEGER},
  description: {type:DataTypes.STRING, allowNull: false}
})

const filterItem = sequelize.define("filterItem", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  field: {type: DataTypes.STRING, allowNull: false},
  CategoryID: {type: DataTypes.INTEGER, allowNull: false}
})

const filterCategory = sequelize.define("filterCategory", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  typeID: {type: DataTypes.INTEGER, allowNull: false},
  Category: {type: DataTypes.STRING, allowNull: false}
})

const type = sequelize.define("type", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: {type: DataTypes.STRING, allowNull: false}
})


const filterTagForSearch = sequelize.define("filterTagForSearch", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  field: {type: DataTypes.STRING, allowNull: false},
  productID: {type: DataTypes.INTEGER, allowNull: false}
})

const test = sequelize.define("test", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  field: {type: DataTypes.STRING, allowNull: false},
})




//
// product.hasMany(filterTagForSearch)
// filterTagForSearch.belongsTo(product)
//
// filterCategory.hasMany(filterItem)
// filterItem.belongsTo(filterCategory)

// filterCategory.hasMany(type)
// type.belongsTo(filterCategory)
//
// product.hasOne(type)
// type.belongsTo(product)

type.hasMany(product)
product.belongsTo(type)





module.exports = {
  product, filterItem, filterCategory, type, filterTagForSearch, test
}