import { Router } from 'express'
import auth from '../middleware/auth.js'
import { deleteCategoryController, updateCategoryController, getCategoryController, AddCategoryController } from '../controllers/category.controller.js'
const categoryRouter = Router()

categoryRouter.post("/add-category", auth, AddCategoryController)
categoryRouter.get('/get-category', getCategoryController)
categoryRouter.put('/update-category', auth, updateCategoryController)
categoryRouter.delete("/delete-category", auth, deleteCategoryController)

export default categoryRouter