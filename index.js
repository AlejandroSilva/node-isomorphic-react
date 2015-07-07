'use strict';
var path = require('path');
var express = require('express');
var kraken = require('kraken-js');

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
var options = {
    /*
     * Add any additional config setup or overrides here. `config` is an initialized
     * `confit` (https://github.com/krakenjs/confit/) configuration object.
     */
    onconfig: function (config, next) {
        next(null, config);
    }
};
var app = module.exports = express();

require('node-jsx').install();
var renderer = require('react-engine');


// create the view engine with `react-engine`
var engine = renderer.server.create({
    reactRoutes: path.join(__dirname + '/public/routes.jsx')
});

// set the engine
app.engine('.jsx', engine);
// set the view directory
app.set('views', __dirname + '/public/views');
// set jsx as the view engine
app.set('view engine', 'jsx');
// finally, set the custom view
app.set('view', renderer.expressView);
//expose public folder as static assets
app.use(express.static(__dirname + '/public'));
//app.get('/', function(req, res) {
//    res.render(req.url, {
//        title: 'React Engine Express Sample App',
//        name: 'Jordan'
//    });
//});
app.get('/', function(req, res) {
    res.render('home', {
        title: 'React Engine Demo',
        name: 'Home',
        selection: 'header-home'
    });
});

app.get('/page2', function(req, res) {
    res.render('page2', {
        title: 'React Engine Demo',
        name: 'Page 2',
        selection: 'header-page2'
    });
});

app.get('/spa*', function(req, res) {
    res.render(req.url, {
        title: 'SPA - React Engine Demo',
        name: 'React SPA',
        selection: 'header-spa'
    });
});
// 404 template
app.use(function(req, res) {
    res
        .status(404)
        .render('404', {
            title: 'React Engine Express Sample App',
            url: req.url
        });
});



//app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
