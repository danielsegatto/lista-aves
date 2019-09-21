import React from 'react';
import { IonApp, IonPage } from '@ionic/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lists from './containers/Lists';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import './theme/fonts.scss';

const App = () => (
  <Router>
      <IonApp>
          <IonPage id="main">
            <Switch>
              <Route exact path="/" component={Lists}></Route>
              <Route path="/app" component={() => <h1>App</h1>}></Route>
            </Switch>
          </IonPage>
      </IonApp>
  </Router>
);


export default App;
