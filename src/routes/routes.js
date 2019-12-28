import {Router} from 'express'
const router = Router()
import {index} from '../controllers/indexController'

router.route('/').get(index)



export default router
