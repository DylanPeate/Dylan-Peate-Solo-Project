const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models')
const router = express.Router();

//get photos
router.get('/', asyncHandler(async function (req, res) {
    const pictures = await db.Picture.findAll();
    return res.json(pictures)
}))

//open photo
router.get('/:id', asyncHandler(async function (req, res) {
    const pictureId = parseInt(req.params.id, 10);
    const picture = await db.Picture.findOne({
        where: { id: pictureId }
    })
    return res.json(picture)
}))

//edit photo
router.put('/:id', asyncHandler(async function (req, res) {

}))
//delete photo
router.delete('/:id', asyncHandler(async function (req, res) {

}))
//upload photo
router.post('/', asyncHandler(async function (req, res) {

}))

module.exports = router;
