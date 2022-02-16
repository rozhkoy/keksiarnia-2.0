const sequelize = require("../db")
const {DataTypes} = require("sequelize")
const {contentDisposition} = require("express/lib/utils");



const brand = sequelize.define("branc", {
  brandID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActiveID: {type: DataTypes.BIGINT, allowNull: false},
  brandName: {type: DataTypes.STRING, allowNull: false}
})

const mainTypeProduct = sequelize.define("mainTypeProduct", {
  mainTypeProductID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActiveID: {type: DataTypes.BIGINT, allowNull: false},
  subTypeProductID: {type: DataTypes.BIGINT, allowNull: false},
  mainTypeProductPictureID: { type: DataTypes.BIGINT, allowNull: false},
  mainTypeProductName: {type: DataTypes.BIGINT, allowNull: false},
})

const subTypeProduct = sequelize.define("subTypeProduct", {
  subTypeProductID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActiveID: {type: DataTypes.BIGINT, allowNull: false},
  subTypeProductPicture: {type: DataTypes.BIGINT, allowNull: false},
  subTypeProductName: {type: DataTypes.STRING, allowNull: false}
})

const mainTypeProductPicture = sequelize.define("mainTypeProductPicture", {
  mainTypeProductPictureID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  mainTypeProductPictureName: {type: DataTypes.STRING, allowNull: false}
})

const subTypeProductPicture = sequelize.define("mainTypeProductPicture", {
  subTypeProductPictureID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  subTypeProductPictureName: {type: DataTypes.STRING, allowNull: false}
})

const productPicture = sequelize.define("productPicture", {
  productPictureID: {type: DataTypes.BIGINT, allowNull: false},
  productID: {type: DataTypes.BIGINT, allowNull: false},
  productPictureName: {type: DataTypes.STRING, allowNull: false},
  firstPicture: {type: DataTypes.BOOLEAN, allowNull: false},
  orderOfPicture: {type: DataTypes.INTEGER, allowNull: false}
})

const isActive = sequelize.define("isActive", {
  isActiveID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  value: {type: DataTypes.STRING, allowNull: false}
})

const filterTagForSearch = sequelize.define("filterTagForSearch", {
  filterTagForSearchID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActiveID: {type: DataTypes.BIGINT, allowNull: false},
  productID: {type: DataTypes.BIGINT, allowNull: false},
  filterCategoryID: {type: DataTypes.BIGINT, allowNull: false},
  tagName: {type: DataTypes.STRING, allowNull: false}
})

const filterCategory= sequelize.define("filterCategory", {
  filterCategoryID: {type: DataTypes.BIGINT, }
})






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