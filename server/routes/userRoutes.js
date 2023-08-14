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
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require('../controllers/userControllers');

// Initialize Routes

// Public Routes
router.post('/login', authUser);
router.post('/register', registerUser);

// Private Routes
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Admin + Private Routes
router.get('/', protect, admin, getAllUsers);
router.delete('/:id', protect, admin, deleteUser);
router
  .route('/profile/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

// Export Router
module.exports = router;
