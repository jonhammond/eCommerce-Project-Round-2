var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Plush Palace' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Plush Palace' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Plush Palace' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'My Account' });
});

router.get('/edit-account', function(req, res, next) {
  res.render('account', { title: 'Edit Account' });
});

router.get('/new-account', function(req, res, next) {
  res.render('account', { title: 'Create Account' });
});

module.exports = router;