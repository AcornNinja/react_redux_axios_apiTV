import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import List from './components/List';
import Card from './components/Card';

export default (
    <Route path="/" component={App} />
);