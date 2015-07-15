'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var SPA = require('./views/spa.jsx');
var Section1 = require('./views/section1.jsx');
var Section2 = require('./views/section2.jsx');
var Section3 = require('./views/section3.jsx');
var Section4 = require('./views/section4.jsx');

//var NotFound = require('./views/errors/notFound.jsx');
var NotFound2 = React.createClass({
    render: function render() {
        return (
            <section className="spa-section">
                <h3>URL: {this.props.params}- Not Found(404)</h3>
                <h6>I am a Plain vanilla react view 2</h6>
            </section>
        );
    }
});

var routes = module.exports = (
    <Route path='/spa' handler={SPA}>
        <Route name='section1' handler={Section1} />
        <Route name='section2' handler={Section2} />
        <Route name='section3' handler={Section3} />
        <Route name='section4' handler={Section4} />

        <Router.DefaultRoute handler={NotFound2} />
        <Router.NotFoundRoute handler={NotFound2} />
    </Route>
// ToDo: show a 404 inside a the "spa" route, example: '/spa/section999'
);