import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ProtectedRoute } from '../ProtectedRoute';
import { LogInForm } from '../Login';
import { Footer } from '../Footer';

import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Route path="/login">
        <LogInForm />
      </Route>

      <ProtectedRoute exact path="/">
        <div>
          main list
        </div>
      </ProtectedRoute>
      <Footer />
    </Router>
  );
}

export default App;
