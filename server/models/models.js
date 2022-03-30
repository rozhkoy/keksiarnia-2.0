const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { contentDisposition } = require('express/lib/utils');

const brand = sequelize.define('brand', {
	brandID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	brandName: { type: DataTypes.STRING, allowNull: false },
});

const category = sequelize.define('category', {
	id_category: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	picture_ID: { type: DataTypes.BIGINT, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
});

const subcategory = sequelize.define('subcategory', {
	id_subcategory: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	id_category: { type: DataTypes.BIGINT, allowNull: false },
	picture_ID: { type: DataTypes.BIGINT, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
});

const categoryPicture = sequelize.define('categoryPicture', {
	picture_ID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false },
});

const subcategoryPicture = sequelize.define('subcategoryPicture', {
	picture_ID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false },
});

const productPicture = sequelize.define('productPicture', {
	picture_ID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	productID: { type: DataTypes.BIGINT, allowNull: false },
	productPictureName: { type: DataTypes.STRING, allowNull: false },
	firstPicture: { type: DataTypes.BOOLEAN, allowNull: false },
	orderOfPicture: { type: DataTypes.INTEGER, allowNull: false },
});

const isActive = sequelize.define('isActive', {
	isActive_ID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	value: { type: DataTypes.STRING, allowNull: false },
});

const filterTagForSearch = sequelize.define('filterTagForSearch', {
	filterTagForSearchID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	productID: { type: DataTypes.BIGINT, allowNull: false },
	filterCategoryID: { type: DataTypes.BIGINT, allowNull: false },
	tagName: { type: DataTypes.STRING, allowNull: false },
});

const filterCategory = sequelize.define('filterCategory', {
	filterCategoryID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	id_subCategory: { type: DataTypes.BIGINT, allowNull: false },
	filterCategoryName: { type: DataTypes.BIGINT, allowNull: false },
	filterTitle: { type: DataTypes.BIGINT, allowNull: false },
});

const filterItem = sequelize.define('filterItem', {
	filterItemI: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	filterCategoryID: { type: DataTypes.BIGINT, allowNull: false },
	filterItemName: { type: DataTypes.STRING, allowNull: false },
});

const supplier = sequelize.define('supplier', {
	supplierID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	supplierCategoryID: { type: DataTypes.BIGINT, allowNull: false },
	supplierName: { type: DataTypes.STRING, allowNull: false },
});

const supplierCategory = sequelize.define('supplierCategory', {
	supplierCategoryID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	supplierCategoryName: { type: DataTypes.BIGINT, allowNull: false },
});

const productGroup = sequelize.define('productGroup', {
	productGroupID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
});

const productGroupItem = sequelize.define('productGroupItem', {
	productGroupItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	productGroupID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
});

const propertyGroup = sequelize.define('propertyGroup', {
	propertyGroup_ID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
});

const propertyGroupItem = sequelize.define('propertyGroupItem', {
	propertyGroupItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	propertyGroupID: { type: DataTypes.BIGINT, allowNull: false },
	productGroupID: { type: DataTypes.BIGINT, allowNull: false },
	propertyGroupItemValue: { type: DataTypes.STRING, allowNull: false },
});

const propertyProduct = sequelize.define('propertyProduct', {
	propertyProductID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	propertyProductName: { type: DataTypes.STRING, allowNull: false },
});

const propertyProductItem = sequelize.define('propertyProductItem', {
	propertyProductItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	propertyProductID: { type: DataTypes.BIGINT, allowNull: false },
	propertyProductItemValue: { type: DataTypes.STRING, allowNull: false },
});

const price = sequelize.define('price', {
	priceID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	discountPrice: { type: DataTypes.BIGINT, allowNull: false },
	useDiscountPrice: { type: DataTypes.BOOLEAN, allowNull: false },
	price: { type: DataTypes.FLOAT, allowNull: false },
	discountPercent: { type: DataTypes.FLOAT, allowNull: false },
});

const product = sequelize.define('product', {
	productID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	id_category: { type: DataTypes.BIGINT, allowNull: false },
	brandID: { type: DataTypes.BIGINT, allowNull: false },
	id_subCategory: { type: DataTypes.BIGINT, allowNull: false },
	supplierID: { type: DataTypes.BIGINT, allowNull: false },
	priceID: { type: DataTypes.BIGINT, allowNull: false },
	productGroupID: { type: DataTypes.BIGINT, allowNull: false },
	productName: { type: DataTypes.STRING, allowNull: false },
	productDescription: { type: DataTypes.STRING, allowNull: false },
	numberProduct: { type: DataTypes.STRING, allowNull: false },
});

const userData = sequelize.define('userData', {
	id_user: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, allowNull: false },
	password: { type: DataTypes.STRING, allowNull: false },
	firstName: { type: DataTypes.STRING, allowNull: false },
	lastName: { type: DataTypes.STRING, allowNull: false },
	role: { type: DataTypes.STRING, allowNull: false },
});

const tokenData = sequelize.define('tokenData', {
	id_token: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	user_id: { type: DataTypes.BIGINT, allowNull: false },
	refreshToken: { type: DataTypes.STRING, allowNull: false },
});

const filterCategory_filterTagForSearch = sequelize.define('filterCategory_filterTagForSearch', {
	id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
});

isActive.hasMany(category, { foreignKey: 'isActive_ID' });
category.belongsTo(isActive, { foreignKey: 'isActive_ID' });

categoryPicture.hasMany(category, { foreignKey: 'picture_ID' });
category.belongsTo(categoryPicture, { foreignKey: 'picture_ID' });

isActive.hasMany(subcategory, { foreignKey: 'isActive_ID' });
subcategory.belongsTo(isActive, { foreignKey: 'isActive_ID' });

subcategoryPicture.hasMany(subcategory, { foreignKey: 'picture_ID' });
subcategory.belongsTo(subcategoryPicture, { foreignKey: 'picture_ID' });

category.hasMany(subcategory, { foreignKey: 'id_category' });
subcategory.belongsTo(category, { foreignKey: 'id_category' });

isActive.hasMany(productGroup, { foreignKey: 'isActive_ID' });
productGroup.belongsTo(isActive, { foreignKey: 'isActive_ID' });

module.exports = {
	category,
	subcategory,
	categoryPicture,
	subcategoryPicture,
	filterCategory_filterTagForSearch,
	brand,
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
	userData,
	tokenData,
	productGroupItem,
};
