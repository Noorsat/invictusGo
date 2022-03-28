import React from 'react';
import './App.css';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
<<<<<<< HEAD
import Main from './components/Main2/Main';
import Clubs from './components/Clubs2/Clubs';
=======
import Main from './components/Main/Main';
import Clubs from './components/Clubs/Clubs';
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
import Subscription from './components/Subscription/Subscription';
import Error404 from './components/Errors/Error404';
import Error500 from './components/Errors/Error500';
import Coachs from './components/Coachs/Coachs';
import Contacts from './components/Contacts/Contacts';
import Admin from './components/admin/App';
import Club from './components/admin/Club';
<<<<<<< HEAD
// import Coach from './components/admin/Coach';
=======
import Coach from './components/admin/Coach';
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
import News from './components/admin/News';
import Questions from './components/admin/Questions';
import ClubsList from './components/Clubs/ClubsList';
import SubscriptionList from './components/admin/SubscriptionList';
<<<<<<< HEAD
import Coach from './Test';
=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/clubs" component={ClubsList} exact/>
        <Route path="/club/" component={Clubs} />
        <Route path="/subscription" component={Subscription} exact />
        <Route path="/404" component={Error404} exact/>
        <Route path="/500" component={Error500} exact/>
        <Route path="/coachs" component={Coachs} exact/>
        <Route path="/contacts" component={Contacts} exact/>
        <Route path="/admin" component={Admin} exact/>
        <Route path="/admin/club" exact>
              <Club/>
          </Route>
          <Route path="/admin/coach" exact>
              <Coach/>
          </Route>
          <Route path="/admin/subscription" exact>
              <SubscriptionList/>
          </Route>
          <Route path="/admin/news" exact>
            <News/>
          </Route>
          <Route path="/admin/faq" exact>
            <Questions/>
          </Route>
      </Switch>
<<<<<<< HEAD
      {/* <Footer/> */}
=======
      <Footer/>
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    </div>
  );
}

export default App;
