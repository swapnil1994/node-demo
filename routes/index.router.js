const express = require('express');
const router = express.Router();
//const User = require('../models/user.model');

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.get('/', ctrlUser.registerr);
 router.get('/:userId', ctrlUser.registerrs);
 router.put('/:userId', ctrlUser.registerrss);
 router.delete('/:userId', ctrlUser.registerrrs);


module.exports = router;