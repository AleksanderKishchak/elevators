import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ProtectedRoute } from '../ProtectedRoute';
import { LazyLoader } from '../LazyLoader';
import { Footer } from '../Footer';
import { Header } from '../Header';

import './App.css';

const LogInForm = lazy(() => import('../Login'));
const MyAccount = lazy(() => import('../MyAccount'));
const BuildingRoute = lazy(() => import('../BuildingsRoute'));
const EntranceList = lazy(() => import('../EntranceList'));
const NotFoundPage = lazy(() => import('../NotFoundPage'));

function App() {
  return (
    <Router>
      <Header />
      <CssBaseline />
      <Switch>
        <Route path="/login">
          <Suspense fallback={<LazyLoader />}>
            <LogInForm />
          </Suspense>
        </Route>

        <ProtectedRoute exact path="/">
          <Redirect to="/my-account" />
        </ProtectedRoute>

        <ProtectedRoute exact forAdminOnly path="/buildings">
          <Suspense fallback={<LazyLoader />}>
            <BuildingRoute />
          </Suspense>
        </ProtectedRoute>

        <ProtectedRoute exact forAdminOnly path="/buildings/:buildingId">
          <Suspense fallback={<LazyLoader />}>
            <EntranceList />
          </Suspense>
        </ProtectedRoute>

        <ProtectedRoute path="/my-account">
          <Suspense fallback={<LazyLoader />}>
            <MyAccount />
          </Suspense>
        </ProtectedRoute>

        <Route>
          <Suspense fallback={<LazyLoader />}>
            <NotFoundPage />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
