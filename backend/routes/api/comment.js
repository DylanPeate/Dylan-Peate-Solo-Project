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
