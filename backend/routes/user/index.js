import express from 'express';

import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile
} from '../../controllers/user/index.js';
import { protect } from '../../midleware/auth/index.js';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/profile').get(protect, getUserProfile);

export default router;
