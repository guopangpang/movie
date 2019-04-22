import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import stores from './store/store'
import {
    addTodo,
    setVisibilityFilter,
    VisibilityFilters,
    MoviePost
} from './store/actions/action'

import {MovieRost} from './store/actions/get_movie_list'

import MovieDetail from './component/movie_detail/movie_detail'
import MovieList from './container/MovieContainer'

const middleware = [ thunk ];

let store = createStore(
    stores,
    applyMiddleware(...middleware)
);

// const unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );

// 发起一系列 action
// store.dispatch(MoviePost()).then((res) => console.log(res,store.getState()));
// store.dispatch(MovieRost('start')).then((res) => console.log('MovieRost',store.getState()));

store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 停止监听 state 更新
// unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={MovieList} />
                <Route path="/movie_detail" component={MovieDetail} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
