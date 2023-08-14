const asyncHandler = require('express-async-handler');

// Import Schema
const Capture = require('../schemas/captureSchema');

// Initialize Controllers

// @desc    Get all Captured Image
// @route   GET /api/captures/
// @access  Private/Admin

const getAllCaptures = asyncHandler(async (req, res) => {
  const Captures = await Capture.find({});

  if (Captures) {
    res.json(Captures);
  } else {
    res.status(404);
    throw new Error('Captured Image Not Found!');
  }
});

// @desc    Delete Captured Image
// @route   DELETE /api/captures/:id
// @access  Private/Admin

const deleteCapture = asyncHandler(async (req, res) => {
  const deletedCapture = await Capture.findByIdAndDelete(req.params.id);

  if (deletedCapture) {
    res.status(201);
    res.json({ message: 'Captured Image Deleted!' });
  } else {
    res.status(404);
    throw new Error('Captured Image Not Found!');
  }
});

module.exports = {
  getAllCaptures,
  deleteCapture,
};
