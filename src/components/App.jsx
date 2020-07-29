import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../core/createStore';
import Stuff from './Stuff';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const store = createStore();

  return (
    <Provider store={store}>
      <div className="container" id="container">
        <Stuff />
      </div>
    </Provider>
  );
};

App.displayName = 'App';

export default App;
