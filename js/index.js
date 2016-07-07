import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

var routes = require('./config/routes');

render(routes, document.getElementById('app'));