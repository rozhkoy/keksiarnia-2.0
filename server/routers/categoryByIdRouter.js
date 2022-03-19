const Router = require('express')
const router = new Router
const CategoryByIdRouter = require('../controller/CategoryByIdController')

router.get('/', CategoryByIdRouter.GetCategoryById)