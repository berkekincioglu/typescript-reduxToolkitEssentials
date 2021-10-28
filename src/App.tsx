import './App.css';
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';

import { StyleSheet } from '../src/utils/StyleSheet';
import SinglePostPage from './features/posts/SinglePostPage';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Fragment>
                <PostsList />
                <AddPostForm />
              </Fragment>
            )}
          />
          <Route exact path='/posts/:postId' component={SinglePostPage} />
          <Route exact path='/editPost/:postId' component={EditPostForm} />

          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
