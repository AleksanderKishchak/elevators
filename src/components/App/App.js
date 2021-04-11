import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ProtectedRoute } from '../ProtectedRoute';
import { LogInForm } from '../Login';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MyAccount } from '../MyAccount';
import { BuildingList } from '../BuildingList';
import { EntranceList } from '../EntranceList';
import { NotFoundPage } from '../NotFoundPage';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <CssBaseline />
      <Switch>
        <Route path="/login">
          <LogInForm />
        </Route>

        <ProtectedRoute exact path="/">
          <Redirect to="/my-account" />
        </ProtectedRoute>

        <ProtectedRoute exact forAdminOnly path="/buildings">
          <BuildingList />
        </ProtectedRoute>

        <ProtectedRoute exact forAdminOnly path="/buildings/:buildingId">
          <EntranceList />
        </ProtectedRoute>

        <ProtectedRoute path="/my-account">
          <MyAccount />
        </ProtectedRoute>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
