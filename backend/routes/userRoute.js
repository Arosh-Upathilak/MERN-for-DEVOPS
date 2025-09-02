import express from "express"
import {createUser ,getUser,getUserId,updateUser,deleteUser} from "../controller/userController.js"

const router = express.Router()

router.post('/create-user',createUser)
router.get('/get-user',getUser)
router.get('/get-user/:id',getUserId)
router.put('/update-user/:id',updateUser)
router.delete('/delete-user/:id',deleteUser)

export default router;