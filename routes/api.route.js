const express = require('express');
const router = express.Router();

const company_controller = require('../controllers/company.controller');
const unity_controller = require('../controllers/unity.controller');
const active_controller = require('../controllers/active.controller');
const users_controller = require('../controllers/users.controller');

router.post('/company/create', company_controller.create);
router.get('/company/detail/:id', company_controller.details);
router.get('/company/listAll', company_controller.listAll);
router.put('/company/update/:id', company_controller.update);
router.delete('/company/delete/:id', company_controller.delete);
    
router.post('/unity/create', unity_controller.create);
router.get('/unity/detail/:id', unity_controller.details);
router.get('/unity/listAll', unity_controller.listAll);
router.put('/unity/update/:id', unity_controller.update);
router.delete('/unity/delete/:id', unity_controller.delete);

router.post('/active/create', active_controller.create);
//router.get('/active/detail/:id', active_controller.details);
//router.get('/active/listAll', active_controller.listAll);
router.put('/active/update/:id', active_controller.update);
router.delete('/active/delete/:id', active_controller.delete);

router.post('/users/create', users_controller.create);
//router.get('/users/detail/:id', users_controller.details);
router.get('/users/listAll', users_controller.listAll);
router.put('/users/update/:id', users_controller.update);
router.delete('/users/delete/:id', users_controller.delete);

module.exports = router;