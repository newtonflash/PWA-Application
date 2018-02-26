
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import CombinedReducers from './reducers/';
import ReduxThunk from 'redux-thunk';


const ApplicationStore = createStore(CombinedReducers, /* {}, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() , applyMiddleware(ReduxThunk));

const DashBoardWrapper = () =>{
    return (
        <MuiThemeProvider>
            <div>Hotel List</div>
        </MuiThemeProvider>
)
};

const BoardWrapper = (prop) => {
    return (
        <MuiThemeProvider>
            <div>hotel data</div>
        </MuiThemeProvider>
    )
};


const App = () => {

    return (
        <Provider store={ApplicationStore}>
            <Router>
                <Switch>
                    <Route exact path="/" component={DashBoardWrapper} />
                    <Route path="/hotel/:id?" render={props => (<BoardWrapper {...props} />)} />
                </Switch>
            </Router>
        </Provider>
    );
};



ReactDOM.render(
<App/>,
    document.getElementById('application-container')
);



function init() {

    if ('serviceWorker' in navigator) {

        window.addEventListener('load', () => {
            navigator.serviceWorker.register('js/sw.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
}

init();

