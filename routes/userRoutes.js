
import express from 'express'
import { upload } from '../middlewear/multer.js';
import { signupUser } from '../controllers/userController.js';



const router = express.Router()

router.post('/signup',  upload, signupUser);



export default router