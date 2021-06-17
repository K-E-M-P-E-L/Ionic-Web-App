import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Theme variables */
import './theme/variables.css';

const App = () => (
 <IonApp>

 <IonReactRouter>
 <IonRouterOutlet>

 <Route exact path="/home" component={Home} />
 <Route exact path="/about" component={About} />
 <Route exact path="/contact"component={Contact} />


 <Route exact path="/">
 <Redirect to="/home" />
 </Route>

 </IonRouterOutlet>
 </IonReactRouter>
 </IonApp>
);

export default App;