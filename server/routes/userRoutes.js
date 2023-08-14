const express = require('express');

// Initialize Express Router
const router = express.Router();

// Import Middlewares
const { protect, admin } = require('../middlewares/authMiddleware');

// Import Controllers
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require('../controllers/userController');

// Initialize Routes
router.post('/login', authUser);
router.post('/register', registerUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Export Router
module.exports = router;
