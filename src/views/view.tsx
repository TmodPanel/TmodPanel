import Home from './Home';
import AppLayout from '../components/Layout/AppLayout';
import { URL } from '../router';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Player from './player';
import Config from './config';
import Brower from './brower';
import Server from './server';
import Log from './log';
import File from './file';
import Terminal from './config/terminal';
import InstanceConsole from '../components/Setting/instance/console';
import NewInstance from '../components/Setting/add/new';

function View() {
  return (
    <div>
      <Router>
        <AppLayout>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={URL.home} element={<Home />} />
            <Route path={URL.player} element={<Player />} />
            <Route path={URL.config} element={<Config />} />
            <Route path={URL.brower} element={<Brower />} />
            <Route path={URL.server} element={<Server />} />
            <Route path={URL.log} element={<Log />} />
            <Route path={URL.file} element={<File />} />
            <Route path={URL.terminal} element={<Terminal />} />
            <Route path={URL.console} element={<InstanceConsole />} />
            <Route path={URL.add} element={<NewInstance />} />
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default View;
