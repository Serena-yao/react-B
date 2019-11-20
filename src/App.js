import React from 'react';
import store from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router/RouterView'
import config from './router/router.config'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RouterView routes={config.routes}></RouterView>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
