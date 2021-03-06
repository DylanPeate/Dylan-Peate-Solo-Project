const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth.js');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')
const router = express.Router();
const db = require('../../db/models');

const validateComments = [
    check('body')
        .exists({ checkFalsy: true })
        .withMessage('Please Leave a Comment')
        .isLength({ max: 255 })
        .withMessage('Comments must be under 255 characters'),
    handleValidationErrors
];

router.post('/', validateComments, requireAuth, asyncHandler(async (req, res) => {
    const {
        userId,
        body,
        pictureId,
        commentUser
    } = req.body
    const comment = await db.Comment.build({
        userId,
        body,
        pictureId,
        commentUser
    })
    const newComment = await comment.save()

    // const newComment = await db.Comment.create(req.body)
    res.json(newComment)
}));

router.put('/', requireAuth, validateComments, asyncHandler(async (req, res) => {
    const { comment } = req.body;
    const updateComment = await db.Comment.findByPk(comment.id)
    const editedComment = await updateComment.update({ comment })

    res.json(editedComment)
}))

router.get('/:pictureId', asyncHandler(async (req, res) => {
    const pictureId = req.params.pictureId;
    const comments = await db.Comment.findAll({ where: { pictureId } })
    res.json(comments)
}))

router.delete('/', requireAuth, asyncHandler(async (req, res) => {
    const deletedComment = await db.Comment.findByPk(req.body.id)
    await deletedComment.destroy()
    return res.json(req.body.id)
}))

module.exports = router;
