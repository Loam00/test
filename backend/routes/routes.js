const express = require('express');
const router = express.Router();
const appControl = require('../controllers/control')

//gestion route giustissima (sempre meglio separare i files ma è meno importante rispetto ai repositories e i controllers)
router.get("/stores", appControl.getStores);

router.get("/:minimumTotal/:store_id", appControl.getCustomers);

module.exports = router;