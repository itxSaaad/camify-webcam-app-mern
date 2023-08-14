const asyncHandler = require('express-async-handler');

// Import Schema
const Capture = require('../schemas/captureSchema');

// Initialize Controllers

// @desc    Get Captured Image by ID
// @route   GET /api/captures/:id
// @access  Private

const getCaptureById = asyncHandler(async (req, res) => {
  const capture = await Capture.findById(req.params.id);

  if (capture) {
    res.json(capture);
  } else {
    res.status(404);
    throw new Error('Captured Image Not Found!');
  }
});

// @desc    Update Captured Image by ID
// @route   PUT /api/captures/:id
// @access  Private

const updateCaptureById = asyncHandler(async (req, res) => {
  const capture = await Capture.findById(req.params.id);

  if (capture) {
    const updatedCapture = await capture.save();

    res.json({
      capture: updatedCapture,
      message: 'Captured Image Updated Successfully!',
    });
  } else {
    res.status(404);
    throw new Error('Captured Image Not Found!');
  }
});

// @desc    Get all Captured Images
// @route   GET /api/captures/
// @access  Private/Admin

const getAllCaptures = asyncHandler(async (req, res) => {
  const captures = await Capture.find({});

  if (captures) {
    res.json(captures);
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
  getCaptureById,
  updateCaptureById,
  getAllCaptures,
  deleteCapture,
};
