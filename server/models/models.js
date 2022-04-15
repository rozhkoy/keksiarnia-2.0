const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const category = sequelize.define('category', {
	categoryID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	pictureID: { type: DataTypes.BIGINT, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
});

const subcategory = sequelize.define('subcategory', {
	subcategoryID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	categoryID: { type: DataTypes.BIGINT, allowNull: false },
	pictureID: { type: DataTypes.BIGINT, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
});

const categoryPicture = sequelize.define('categoryPicture', {
	pictureID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false },
});

const subcategoryPicture = sequelize.define('subcategoryPicture', {
	pictureID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false },
});

const productPicture = sequelize.define('productPicture', {
	pictureID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	productID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
	firstPicture: { type: DataTypes.BOOLEAN, allowNull: false },
	orderOfPicture: { type: DataTypes.INTEGER, allowNull: false },
});

const isActive = sequelize.define('isActive', {
	isActiveID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	value: { type: DataTypes.STRING, allowNull: false },
});

const tagOfFilterForProduct = sequelize.define('tagOfFilterForProduct', {
	tagOfFilterForProductID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	productID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
});

const categoryFilter = sequelize.define('categoryFilter', {
	categoryFilterID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	subcategoryID: { type: DataTypes.BIGINT, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
});

const categoryFilterItem = sequelize.define('categoryFilterItem', {
	filterItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	categoryFilterID: { type: DataTypes.BIGINT, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
});

// const supplier = sequelize.define('supplier', {
// 	supplierID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
// 	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
// 	supplierCategoryID: { type: DataTypes.BIGINT, allowNull: false },
// 	supplierName: { type: DataTypes.STRING, allowNull: false },
// });
//
// const supplierCategory = sequelize.define('supplierCategory', {
// 	supplierCategoryID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
// 	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
// 	supplierCategoryName: { type: DataTypes.BIGINT, allowNull: false },
// });

const productGroup = sequelize.define('productGroup', {
	productGroupID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
});

const productGroupItem = sequelize.define('productGroupItem', {
	productGroupItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	productGroupID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
});

const propertyGroup = sequelize.define('propertyGroup', {
	propertyGroupID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
});

const propertyGroupItem = sequelize.define('propertyGroupItem', {
	propertyGroupItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	propertyGroupID: { type: DataTypes.BIGINT, allowNull: false },
	productGroupID: { type: DataTypes.BIGINT, allowNull: false },
	propertyGroupItemValue: { type: DataTypes.STRING, allowNull: false },
});

const propertyProduct = sequelize.define('propertyProduct', {
	propertyProductID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	propertyProductName: { type: DataTypes.STRING, allowNull: false },
});

const propertyProductItem = sequelize.define('propertyProductItem', {
	propertyProductItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	propertyProductID: { type: DataTypes.BIGINT, allowNull: false },
	propertyProductItemValue: { type: DataTypes.STRING, allowNull: false },
});

const productPrice = sequelize.define('productPrice', {
	priceID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	discountPrice: { type: DataTypes.STRING, allowNull: false },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	price: { type: DataTypes.STRING, allowNull: false },
	discountPercent: { type: DataTypes.STRING, allowNull: false },
});

const product = sequelize.define('product', {
	productID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.STRING, allowNull: false },
	categoryID: { type: DataTypes.STRING, allowNull: false },
	subcategoryID: { type: DataTypes.STRING, allowNull: false },
	priceID: { type: DataTypes.STRING, allowNull: false },
	productGroupID: { type: DataTypes.STRING, allowNull: false },
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

isActive.hasMany(category, { foreignKey: 'isActiveID' });
category.belongsTo(isActive, { foreignKey: 'isActiveID' });

categoryPicture.hasMany(category, { foreignKey: 'pictureID' });
category.belongsTo(categoryPicture, { foreignKey: 'pictureID' });

isActive.hasMany(subcategory, { foreignKey: 'isActiveID' });
subcategory.belongsTo(isActive, { foreignKey: 'isActiveID' });

subcategoryPicture.hasMany(subcategory, { foreignKey: 'pictureID' });
subcategory.belongsTo(subcategoryPicture, { foreignKey: 'pictureID' });

category.hasMany(subcategory, { foreignKey: 'categoryID' });
subcategory.belongsTo(category, { foreignKey: 'categoryID' });

isActive.hasMany(productGroup, { foreignKey: 'isActiveID' });
productGroup.belongsTo(isActive, { foreignKey: 'isActiveID' });

isActive.hasMany(categoryFilter, { foreignKey: 'isActiveID' });
categoryFilter.belongsTo(isActive, { foreignKey: 'isActiveID' });

categoryFilter.hasMany(categoryFilterItem, { foreignKey: 'categoryFilterID' });
categoryFilterItem.belongsTo(categoryFilter, { foreignKey: 'categoryFilterID' });

// isActive.hasMany(product, { foreignKey: 'isActiveID' });
// product.belongsTo(isActive, { foreignKey: 'isActiveID' });
//
// category.hasMany(product, { foreignKey: 'categoryID' });
// product.belongsTo(category, { foreignKey: 'categoryID' });
//
// subcategory.hasMany(product, { foreignKey: 'subcategoryID' });
// product.belongsTo(subcategory, { foreignKey: 'subcategoryID' });
//
// productGroup.hasMany(product, { foreignKey: 'productGroupID' });
// product.belongsTo(productGroup, { foreignKey: 'productGroupID' });
//
// productPrice.hasMany(product, { foreignKey: 'priceID' });
// product.belongsTo(productPrice, { foreignKey: 'priceID' });
//
// isActive.hasMany(productPrice, { foreignKey: 'isActiveID' });
// productPrice.belongsTo(isActive, { foreignKey: 'isActiveID' });

module.exports = {
	category,
	subcategory,
	categoryPicture,
	subcategoryPicture,
	productPicture,
	isActive,
	tagOfFilterForProduct,
	categoryFilter,
	categoryFilterItem,
	product,
	// supplier,
	// supplierCategory,
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
