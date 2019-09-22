import React from 'react';
import { IonApp, IonPage } from '@ionic/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Lists from './pages/Lists/Lists';
import List from './pages/List/List';

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
  <BrowserRouter>
      <IonApp>
          <IonPage id="main">
            <Switch>
              <Route exact path="/" component={Lists}></Route>
              <Route path="/lista/:lista" component={List}></Route>
            </Switch>
          </IonPage>
      </IonApp>
  </BrowserRouter>
);


export default App;
