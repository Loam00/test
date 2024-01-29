const express = require('express');
const router = express.Router();
const appControl = require('../controllers/control')

router.get("/stores", appControl.getStores);

router.get("/:minimumTotal/:store_id", appControl.getCustomers);

module.exports = router;