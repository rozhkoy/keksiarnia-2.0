const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const product = sequelize.define("product", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: {type:DataTypes.STRING, allowNull: false},
  price: {type:DataTypes.INTEGER, allowNull: false},
  img: {type:DataTypes.STRING, allowNull: false},
  typeID: {type:DataTypes.INTEGER},
  description: {type:DataTypes.STRING, allowNull: false}
},{ timestamps: false})

const filterItem = sequelize.define("filterItem", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  field: {type: DataTypes.STRING, allowNull: false},
  CategoryID: {type: DataTypes.INTEGER, allowNull: false}
},{ timestamps: false})

const filterCategory = sequelize.define("filterCategory", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  typeID: {type: DataTypes.INTEGER, allowNull: false},
  Category: {type: DataTypes.STRING, allowNull: false}
},{ timestamps: false})

const type = sequelize.define("type", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: {type: DataTypes.STRING, allowNull: false}
},{ timestamps: false})


const filterTagForSearch = sequelize.define("filterTagForSearch", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  field: {type: DataTypes.STRING, allowNull: false},
  productID: {type: DataTypes.INTEGER, allowNull: false}
},{ timestamps: false})

const test = sequelize.define("test", {
  id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  field: {type: DataTypes.STRING, allowNull: false},
},{ timestamps: false})


type.hasMany(product,  {foreignKey: 'typeID'})
product.belongsTo(type, {foreignKey: 'typeID'})

filterCategory.hasMany(filterItem, {foreignKey: "CategoryID"})
filterItem.belongsTo(filterCategory, {foreignKey: 'CategoryID'})

type.hasMany(filterCategory,  {foreignKey: 'typeID'})
filterCategory.belongsTo(type, {foreignKey: 'typeID'})

product.hasMany(filterTagForSearch, {foreignKey: 'productID'})
filterTagForSearch.belongsTo(product, {foreignKey: 'productID'})


module.exports = {
  product, filterItem, filterCategory, type, filterTagForSearch, test
}