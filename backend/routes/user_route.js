const express = require('express')
const tableController = require('../controllers/user.js')

const router = express.Router()

router.route("/api").get(tableController.getAllUsers).post(tableController.createuser)

module.exports = router