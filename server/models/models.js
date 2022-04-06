const sequelize = require('../db');
const { DataTypes } = require('sequelize');

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

const categoryFilter = sequelize.define('categoryFilter', {
	categoryFilterID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	id_subcategory: { type: DataTypes.BIGINT, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
});

const categoryFilterItem = sequelize.define('categoryFilterItem', {
	filterItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	categoryFilterID: { type: DataTypes.BIGINT, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
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
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
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
	propertyProductID: { type: DataTypes.BIGINT, allowNull: false },
	propertyProductItemValue: { type: DataTypes.STRING, allowNull: false },
});

const productPrice = sequelize.define('productPrice', {
	priceID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	discountPrice: { type: DataTypes.BIGINT, allowNull: false },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	price: { type: DataTypes.FLOAT, allowNull: false },
	discountPercent: { type: DataTypes.FLOAT, allowNull: false },
});

const product = sequelize.define('product', {
	productID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActive_ID: { type: DataTypes.BIGINT, allowNull: false },
	id_category: { type: DataTypes.BIGINT, allowNull: false },
	id_subcategory: { type: DataTypes.BIGINT, allowNull: false },
	priceID: { type: DataTypes.BIGINT, allowNull: false },
	propertyGroup_ID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, allowNull: false },
	number: { type: DataTypes.STRING, allowNull: false },
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

isActive.hasMany(categoryFilter, { foreignKey: 'isActive_ID' });
categoryFilter.belongsTo(isActive, { foreignKey: 'isActive_ID' });

categoryFilter.hasMany(categoryFilterItem, { foreignKey: 'categoryFilterID' });
categoryFilterItem.belongsTo(categoryFilter, { foreignKey: 'categoryFilterID' });

isActive.hasMany(product, { foreignKey: 'isActive_ID' });
product.belongsTo(isActive, { foreignKey: 'isActive_ID' });

category.hasMany(product, { foreignKey: 'id_category' })
product.belongsTo(category, { foreignKey: 'id_category' });

subcategory.hasMany(product, { foreignKey: 'id_subcategory' });
product.belongsTo(subcategory, { foreignKey: 'id_subcategory' });

productGroup.hasMany(product, { foreignKey: 'propertyGroup_ID' });
product.belongsTo(productGroup, { foreignKey: 'propertyGroup_ID' });

productPrice.hasMany(product, {foreignKey: "priceID"})
product.belongsTo(productPrice, {foreignKey: "priceID"})

isActive.hasMany(productPrice, { foreignKey: 'isActive_ID' });
productPrice.belongsTo(isActive, { foreignKey: 'isActive_ID' });

module.exports = {
	category,
	subcategory,
	categoryPicture,
	subcategoryPicture,
	brand,
	productPicture,
	isActive,
	filterTagForSearch,
	categoryFilter,
	categoryFilterItem,
	product,
	supplier,
	supplierCategory,
	productGroup,
	propertyGroup,
	propertyGroupItem,
	propertyProduct,
	propertyProductItem,
	productPrice,
	userData,
	tokenData,
	productGroupItem,
};
