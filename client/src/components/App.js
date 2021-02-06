import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = () => {
    return (
        <div className='ui container'>

            < Router history={history}>
                <div>
                    <Header />
                    <Switch>
                    <Route path='/' component={StreamList} exact />
                    <Route path='/stream/new' component={StreamCreate} />
                    <Route path='/stream/edit/:id' component={StreamEdit} />
                    <Route path='/stream/delete/:id' component={StreamDelete} />
                    <Route path='/stream/:id' component={StreamShow} />
                    </Switch>
                </div>
                </Router>
        </div>
    );
};

export default App;