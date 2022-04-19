import { Router } from 'express'

const usersRoutes = Router()

usersRoutes.get("/", (request, response) => {
  return response.status(200).json({msg: 'get'})
})

export { usersRoutes }