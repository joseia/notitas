const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.post('/', indexController.create);
router.put('/', indexController.delete);



router.get('/edit/:id', indexController.detail);
router.post('/edit/:id', indexController.edit);




module.exports = router;

