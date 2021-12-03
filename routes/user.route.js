import express from 'express'
import * as userController from '../controllers/user.controller.js'
const router = express.Router()

router.post('/user/register', userController.signUp)
router.post("/user/login", userController.signIn);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/user/tokenIsValid", userController.tokenIsValid);
router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUserById);

export default router;