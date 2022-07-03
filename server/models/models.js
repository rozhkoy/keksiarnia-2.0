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
	filterItemID: { type: DataTypes.BIGINT, allowNull: false },
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

const propertyProductItem = sequelize.define('propertyProductItem', {
	propertyProductItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	productGroupItemID: { type: DataTypes.BIGINT, allowNull: false },
	productID: { type: DataTypes.BIGINT, allowNull: false },
	value: { type: DataTypes.STRING, allowNull: false },
});

const productPrice = sequelize.define('productPrice', {
	priceID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	discountPrice: { type: DataTypes.INTEGER, allowNull: false },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	discountPercent: { type: DataTypes.STRING, allowNull: false },
});

const product = sequelize.define('product', {
	productID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	isActiveID: { type: DataTypes.BIGINT, allowNull: false },
	categoryID: { type: DataTypes.BIGINT, allowNull: false },
	subcategoryID: { type: DataTypes.BIGINT, allowNull: false },
	priceID: { type: DataTypes.BIGINT, allowNull: false },
	productGroupID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, allowNull: false },
	number: { type: DataTypes.STRING, allowNull: false },
});

const previewProductPicture = sequelize.define('previewProductPicture', {
	pictureID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	productID: { type: DataTypes.BIGINT, allowNull: false },
	name: { type: DataTypes.STRING, allowNull: false },
});

const cartItem = sequelize.define('cartItem', {
	cartItemID: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
	productID: { type: DataTypes.BIGINT, allowNull: false },
	id_user:  { type: DataTypes.BIGINT, allowNull: false },
	quantity: { type: DataTypes.BIGINT, allowNull: false },
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

isActive.hasMany(product, { foreignKey: 'isActiveID' });
product.belongsTo(isActive, { foreignKey: 'isActiveID' });

category.hasMany(product, { foreignKey: 'categoryID' });
product.belongsTo(category, { foreignKey: 'categoryID' });

subcategory.hasMany(product, { foreignKey: 'subcategoryID' });
product.belongsTo(subcategory, { foreignKey: 'subcategoryID' });

productGroup.hasMany(product, { foreignKey: 'productGroupID' });
product.belongsTo(productGroup, { foreignKey: 'productGroupID' });

productPrice.hasMany(product, { foreignKey: 'priceID' });
product.belongsTo(productPrice, { foreignKey: 'priceID' });

isActive.hasMany(productPrice, { foreignKey: 'isActiveID' });
productPrice.belongsTo(isActive, { foreignKey: 'isActiveID' });

product.hasOne(previewProductPicture, { foreignKey: 'pictureID' });
previewProductPicture.belongsTo(product, { foreignKey: 'pictureID' });

subcategory.hasMany(categoryFilter, { foreignKey: 'subcategoryID' });
categoryFilter.belongsTo(subcategory, { foreignKey: 'subcategoryID' });

isActive.hasMany(categoryFilterItem, { foreignKey: 'isActiveID' });
categoryFilterItem.belongsTo(isActive, { foreignKey: 'isActiveID' });

product.hasMany(tagOfFilterForProduct, { foreignKey: 'productID' });
tagOfFilterForProduct.belongsTo(product, { foreignKey: 'productID' });

productGroup.hasMany(productGroupItem, { foreignKey: 'productGroupID' });
productGroupItem.belongsTo(productGroup, { foreignKey: 'productGroupID' });

productGroupItem.hasMany(propertyProductItem, { foreignKey: 'productGroupItemID' });
propertyProductItem.belongsTo(productGroupItem, { foreignKey: 'productGroupItemID' });

isActive.hasMany(productGroupItem, { foreignKey: 'isActiveID' });
productGroupItem.belongsTo(isActive, { foreignKey: 'isActiveID' });

categoryFilterItem.hasMany(tagOfFilterForProduct, { foreignKey: 'filterItemID' });
tagOfFilterForProduct.belongsTo(categoryFilterItem, { foreignKey: 'filterItemID' });

isActive.hasMany(tagOfFilterForProduct, {foreignKey: 'isActiveID'})
tagOfFilterForProduct.belongsTo(isActive, {foreignKey: 'isActiveID'})

product.hasMany(productPicture, {foreignKey: "productID"})
productPicture.belongsTo(product, {foreignKey: "productID"})

cartItem.hasMany(product, {foreignKey: "productID"})
product.belongsTo(cartItem, {foreignKey: "productID"})

product.hasMany(propertyProductItem, {foreignKey: "productID"})
propertyProductItem.belongsTo(product, {foreignKey: "productID"})

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
	previewProductPicture,
	productGroup,
	propertyProductItem,
	productPrice,
	userData,
	tokenData,
	productGroupItem,
	cartItem
};
