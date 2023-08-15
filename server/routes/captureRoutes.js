const express = require('express');

// Initialize Express Router
const router = express.Router();

// Import Middlewares
const { protect, admin } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/imageUploadMiddleware');

// Import Controllers
const {
  createCapture,
  getCaptureById,
  updateCaptureById,
  getAllCaptures,
  deleteCapture,
} = require('../controllers/captureControllers');

// Initialize Routes

// Public Routes

// Private Routes

router.route('/').post(protect, upload.single('image'), createCapture);

router
  .route('/:id')
  .get(protect, getCaptureById)
  .put(protect, updateCaptureById);

// Admin + Private Routes
router.get('/', protect, admin, getAllCaptures);
router.delete('/:id', protect, admin, deleteCapture);

// Export Router
module.exports = router;
