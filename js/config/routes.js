var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
import { browserHistory } from 'react-router'
var IndexRoute = ReactRouter.IndexRoute;

var Index = require('../components/Index');
var ClubPage = require('../components/Club');
// var ResultsContainer = require('../containers/ResultsContainer');

// var routes = (
//     <Router history={browserHistory}>
//         <Route path="index" component={Index} />
        
//         <Route path="/" component={Index} hasQuery={false}/>
//         <Route path="/test/:id" component={Index} hasQuery={true}/>
// //         {/*<Route path="club" component={ClubPage} />
// //         <Route name="app" handler={ClubPage} path="*" />
// //         <Route path="test" component={ResultsContainer} />*/}
// //         <Route path="/club" component={ClubPage}/>
// //         {/*<Route path="club" component={ResultsContainer} />*/}
//     </Router>
// );

var routes = (
    <Router history={browserHistory}>
        <Route path="index" component={Index} />

        <Route path="" component={Index} hasQuery={false}/>
        <Route path="/test/:id" component={Index} hasQuery={true}/>
        <Route path="/:id" component={ClubPage} hasQuery={true}/>
    </Router>
);

module.exports = routes;