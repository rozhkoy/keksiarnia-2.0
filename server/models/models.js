const sequelize = require("../db")
const {DataTypes} = require("sequelize")
const {contentDisposition} = require("express/lib/utils");



const brand = sequelize.define("brand", {
  brandID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  brandName: {type: DataTypes.STRING, allowNull: false}
})

const mainTypeProduct = sequelize.define("mainTypeProduct", {
  id_mainTypeProduct: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  picture_ID: {type: DataTypes.BIGINT, allowNull: false},
  title: {type: DataTypes.STRING, allowNull: false},
})

const subTypeProduct = sequelize.define("subTypeProduct", {
  id_subTypeProduct: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  id_mainTypeProduct: {type: DataTypes.BIGINT, allowNull: false},
  picture_ID: {type: DataTypes.BIGINT, allowNull: false},
  title: {type: DataTypes.STRING, allowNull: false}
})

const mainTypeProductPicture = sequelize.define("mainTypeProductPicture", {
  mainTypeProductPictureID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  mainTypeProductPictureName: {type: DataTypes.STRING, allowNull: false}
})

const subTypeProductPicture = sequelize.define("subTypeProductPicture", {
  subTypeProductPictureID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  subTypeProductPictureName: {type: DataTypes.STRING, allowNull: false}
})

const productPicture = sequelize.define("productPicture", {
  picture_ID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  productID: {type: DataTypes.BIGINT, allowNull: false},
  productPictureName: {type: DataTypes.STRING, allowNull: false},
  firstPicture: {type: DataTypes.BOOLEAN, allowNull: false},
  orderOfPicture: {type: DataTypes.INTEGER, allowNull: false}
})

const isActive = sequelize.define("isActive", {
  isActive_ID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  value: {type: DataTypes.STRING, allowNull: false}
})

const filterTagForSearch = sequelize.define("filterTagForSearch", {
  filterTagForSearchID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  productID: {type: DataTypes.BIGINT, allowNull: false},
  filterCategoryID: {type: DataTypes.BIGINT, allowNull: false},
  tagName: {type: DataTypes.STRING, allowNull: false}
})

const filterCategory = sequelize.define("filterCategory", {
  filterCategoryID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  subTypeProductID: {type: DataTypes.BIGINT, allowNull: false},
  filterCategoryName: {type: DataTypes.BIGINT, allowNull: false},
  filterTitle: {type: DataTypes.BIGINT, allowNull: false}
})

const filterItem = sequelize.define("filterItem", {
  filterItemI: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  filterCategoryID: {type: DataTypes.BIGINT, allowNull: false},
  filterItemName: {type: DataTypes.STRING, allowNull: false}
})

const supplier = sequelize.define("supplier", {
  supplierID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  supplierCategoryID: {type: DataTypes.BIGINT, allowNull: false},
  supplierName: {type: DataTypes.STRING, allowNull: false}
})

const supplierCategory = sequelize.define("supplierCategory", {
  supplierCategoryID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  supplierCategoryName: {type: DataTypes.BIGINT, allowNull: false}
})

const productGroup = sequelize.define("productGroup", {
  productGroupID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  propertyGroupID: {type: DataTypes.BIGINT, allowNull: false},
  productID: {type: DataTypes.BIGINT, allowNull: false},
  productGroupName: {type: DataTypes.STRING, allowNull: false}
})

const propertyGroup = sequelize.define("propertyGroup", {
  propertyGroupID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  propertyGroupName: {type: DataTypes.STRING, allowNull: false}
})

const propertyGroupItem = sequelize.define("propertyGroupItem", {
  propertyGroupItemID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  propertyGroupID: {type: DataTypes.BIGINT, allowNull: false},
  productGroupID: {type: DataTypes.BIGINT, allowNull: false},
  propertyGroupItemValue: {type: DataTypes.STRING, allowNull: false}
})

const propertyProduct = sequelize.define("propertyProduct", {
  propertyProductID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  propertyProductName: {type: DataTypes.STRING, allowNull: false}
})

const propertyProductItem = sequelize.define("propertyProductItem", {
  propertyProductItemID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  propertyProductID: {type: DataTypes.BIGINT, allowNull: false},
  propertyProductItemValue: {type: DataTypes.STRING, allowNull: false}
})

const price = sequelize.define("price", {
  priceID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  discountPrice: {type: DataTypes.BIGINT, allowNull: false},
  useDiscountPrice: {type: DataTypes.BOOLEAN, allowNull: false},
  price: {type: DataTypes.FLOAT, allowNull: false},
  discountPercent: {type: DataTypes.FLOAT, allowNull: false}
})

const product = sequelize.define("product", {
  productID: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
  isActive_ID: {type: DataTypes.BIGINT, allowNull: false},
  mainTypeProductID: {type: DataTypes.BIGINT, allowNull: false},
  brandID: {type: DataTypes.BIGINT, allowNull: false},
  subTypeProduct: {type: DataTypes.BIGINT, allowNull: false},
  supplierID: {type: DataTypes.BIGINT, allowNull: false},
  priceID: {type: DataTypes.BIGINT, allowNull: false},
  productGroupID: {type: DataTypes.BIGINT, allowNull: false},
  productName: {type: DataTypes.STRING, allowNull: false},
  productDescription: {type: DataTypes.STRING, allowNull: false},
  numberProduct: {type: DataTypes.STRING, allowNull: false}
})


const filterCategory_filterTagForSearch = sequelize.define("filterCategory_filterTagForSearch", {
  id:  {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true}
})

mainTypeProduct.hasMany(subTypeProduct, {foreignKey:  "id_mainTypeProduct"})
subTypeProduct.belongsTo(mainTypeProduct, {foreignKey:  "id_mainTypeProduct"})

isActive.hasMany(mainTypeProduct, {foreignKey: "isActive_ID"})
mainTypeProduct.belongsTo(isActive, {foreignKey: "isActive_ID"})


module.exports = {
  filterCategory_filterTagForSearch,
  brand,
  mainTypeProduct,
  subTypeProduct,
  mainTypeProductPicture,
  subTypeProductPicture,
  productPicture,
  isActive,
  filterTagForSearch,
  filterCategory,
  filterItem,
  product,
  supplier,
  supplierCategory,
  productGroup,
  propertyGroup,
  propertyGroupItem,
  propertyProduct,
  propertyProductItem,
  price,
}