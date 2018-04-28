import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import AlbumList from '../components/list_newalbums';
import AlbumPage from '../components/album_page';

const Routes = () => {
    return (
    <BrowserRouter>
    <Switch>
    <Route path="/album/:id" exact component={AlbumPage}/>
    <Route path="/" exact component={AlbumList} />
    </Switch>
    </BrowserRouter>
    )
}

export default Routes;