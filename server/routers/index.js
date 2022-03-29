const Router = require('express');
const router = new Router();
const test = require('./testRounter');
const userController = require('../controller/userController');
const { body } = require('express-validator');
const isActiveRouter = require('../routers/isActiveRouter');
const checkRole = require('../middleware/checkRoleMiddlleware');
const categoriesRouter = require('./categories');
const mainTypePicturesRouter = require('../routers/mainTypePicturesRouter');
const categoryByIdRouter = require('../routers/categoryByIdRouter');
const pictureCategoryByIdRouter = require('../routers/pictureCategoryByIdRouter');
const getAllCategories = require('../controller/categoryController');
const subcategoriesRouter = require('../routers/subcategoriesRouter');
const subcategoriesPicturesRouter = require('./subcategoriesPicturesRouter');
const subcategoryByIdRouter = require('./subcategoryByIdRouter');
const pictureSubcategoryByIdRouter = require('./pictureSubcategoryByIdRouter');
const productGroupRouter = require('./productGroupRouter')

router.post('/registration', body('email').isEmail(), body('password').isLength({ min: 3, max: 32 }), userController.registration);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', checkRole, userController.gerUsers);
router.use('/isActive', isActiveRouter);
router.use('/categories', categoriesRouter);
router.use('/mainTypePictures', mainTypePicturesRouter);
router.use('/CategoryById', categoryByIdRouter);
router.use('/pictureCategoryById', pictureCategoryByIdRouter);
router.get('/getAllCategories', getAllCategories.getAllCategories);
router.use('/subcategories', subcategoriesRouter);
router.use('/subcategoriesPictures', subcategoriesPicturesRouter);
router.use('/subcategoryById', subcategoryByIdRouter);
router.use('/pictureSubcategoryById', pictureSubcategoryByIdRouter);
router.use('/productGroup', productGroupRouter)

module.exports = router;
