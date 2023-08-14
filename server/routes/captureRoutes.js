const express = require('express');

// Initialize Express Router
const router = express.Router();

// Import Middlewares
const { protect, admin } = require('../middlewares/authMiddleware');

// Import Controllers
const {
  getAllCaptures,
  deleteCapture,
} = require('../controllers/captureControllers');

// Initialize Routes

// Public Routes

// Private Routes

// Admin + Private Routes
router.get('/', protect, admin, getAllCaptures);
router.delete('/:id', protect, admin, deleteCapture);

// Export Router
module.exports = router;
