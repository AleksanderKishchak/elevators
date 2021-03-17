import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Map } from '../Map';
import { Marker } from '../Marker';

import './App.css';
import { LAT_ZAPORIZHZHIA, LNG_ZAPORIZHZHIA } from '../../constants';

function App() {
  return (
    <Router>
      <Route path="/">
        <Map>
          <Marker lat={LAT_ZAPORIZHZHIA} lng={LNG_ZAPORIZHZHIA} />
        </Map>
      </Route>
      <Route path="/entrance">
        <div style={{ position: 'fixed', top: '50%', left: '50%',}}>
          Test popup
        </div>
      </Route>
    </Router>
  );
}

export default App;
