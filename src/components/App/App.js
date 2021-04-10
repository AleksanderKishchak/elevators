import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ProtectedRoute } from '../ProtectedRoute';
import { LogInForm } from '../Login';
import { Footer } from '../Footer';
import { MenuAppBar } from '../Header';
import { MyAccount } from '../MyAccount';
import { BuildingList } from '../BuildingList';
import { EntranceList } from '../EntranceList';

import './App.css';

function App() {
  return (
    <Router>
      <MenuAppBar />
      <CssBaseline />
      <Route path="/login">
        <LogInForm />
      </Route>

      <ProtectedRoute exact path="/">
        <div>
          root
        </div>
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
      <Footer />
    </Router>
  );
}

export default App;
