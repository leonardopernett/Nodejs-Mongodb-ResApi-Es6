import {Router} from 'express'
const router = Router()
import {index, create, getOne, remove, update} from '../controllers/tasksController'

router.route('/').get(index).post(create)
router.route('/:id').get(getOne).delete(remove).put(update)

export default router