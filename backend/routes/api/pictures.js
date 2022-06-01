const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models')
const router = express.Router();

//get photos
router.get('/', asyncHandler(async function (req, res) {
    const pictures = await db.Picture.findAll();
    return res.json(pictures)
}))

module.exports = router;
