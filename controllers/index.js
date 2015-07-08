'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {
    var model = new IndexModel();

    //router.get('/', function (req, res) {
    //    res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
    //});

    router.get('/', function(req, res) {
        res.render('home', {
            title: 'React Engine Demo',
            name: 'Home',
            selection: 'header-home'
        });
    });

    router.get('/page2', function(req, res) {
        console.info(req.url);
        res.render('page2', {
            title: 'React Engine Demo',
            name: 'Page 2',
            selection: 'header-page2'
        });
    });

    router.get('/spa*', function(req, res) {
        res.render(req.url, {
            title: 'SPA - React Engine Demo',
            name: 'React SPA',
            selection: 'header-spa'
        });
    });
    // 404 template
    router.use(function(req, res) {
        res
            .status(404)
            .render('errors/notFound', {
            //.render('/spa/not-found', {
                title: 'React Engine Express Sample App',
                url: req.url
            });
    });
};
