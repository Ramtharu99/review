import express from 'express'

import * as UserController from '../controllers/user.controller'
import { createUserDto } from '../validators/create.user.validator'
import { validate } from '../utils/validate'

const route = express.Router()

// route.get('/', UserController.getAll)

// route.get('/:id', UserController.findOne)
route.post(`/login`,validate(createUserDto), UserController.login)
route.post(`/signup`,  UserController.createUser)
route.delete('/:id', UserController.remove)
// route.get('/',UserController.getAll)
// route.delete('/:id', UserController.remove)

// route.patch('/:id', UserController.update)

export default route;
