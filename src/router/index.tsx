import { lazy, ReactNode, Suspense } from 'react';
import File from '../views/file';
import NewInstance from '../components/Setting/add/new';
const Home = lazy(() => import('../views/Home'));
const Player = lazy(() => import('../views/player'));
const Config = lazy(() => import('../views/config'));
const Terminal = lazy(() => import('../views/config/terminal'));
const Brower = lazy(() => import('../views/brower'));
const Server = lazy(() => import('../views/server'));
const Log = lazy(() => import('../views/log'));

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense>{children}</Suspense>;
};

export const URL = {
  home: '/home',
  player: '/player',
  config: '/instances',
  terminal: '/instances/terminal',
  console: '/instances/:id',
  add: '/instances/add',
  brower: '/brower',
  server: '/server',
  log: '/log',
  file: '/file',
};

export const routes = [
  {
    path: URL.home,
    exact: true,
    children: lazyLoad(<Home />),
  },
  {
    path: URL.player,
    exact: true,
    children: lazyLoad(<Player />),
  },
  {
    path: URL.config,
    exact: true,
    children: lazyLoad(<Config />),
  },
  {
    path: URL.brower,
    exact: true,
    children: lazyLoad(<Brower />),
  },
  {
    path: URL.server,
    exact: true,
    children: lazyLoad(<Server />),
  },
  {
    path: URL.log,
    exact: true,
    children: lazyLoad(<Log />),
  },
  {
    path: URL.file,
    exact: true,
    children: lazyLoad(<File />),
  },
  {
    path: URL.terminal,
    exact: true,
    children: lazyLoad(<Terminal />),
  },
  {
    path: URL.add,
    exact: true,
    children: lazyLoad(<NewInstance />),
  },
];
