import React from 'react';
import ReactDOM from 'react-dom';


//Route
import Router from './router'

const App = () => {
    return <Router />
}
ReactDOM.render(<App />, document.querySelector('#root'))
