const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')

const pictureValidation = [
    check('imageLink')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an image URL'),
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please Provide a Title')
        .isLength({ max: 50 })
        .withMessage('Title must be less than 50 characters'),
    check('description')
        .isLength({ max: 255 })
        .withMessage('Description must be less than 255 characters'),
    handleValidationErrors
]


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
router.put('/:id', pictureValidation, requireAuth, asyncHandler(async function (req, res) {
    const pictureId = parseInt(req.params.id, 10);
    const {
        id,
        userId,
        albumId,
        imageLink,
        title,
        description,
        private,
        longitude,
        latitude
    } = req.body

    const selectedPicture = await Picture.findByPk(id)
    const editedPicture = selectedPicture.update(
        {
            id,
            userId,
            albumId,
            imageLink,
            title,
            description,
            private,
            longitude,
            latitude
        })
    return res.json(editedPicture)
}))

//delete photo
router.delete('/:id', asyncHandler(async function (req, res) {

}))
//upload photo
router.post('/', asyncHandler(async function (req, res) {

}))

module.exports = router;
