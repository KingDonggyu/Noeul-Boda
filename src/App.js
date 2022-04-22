import Router from './utils/Router.js';
import MainPage from './pages/MainPage.js';
import ResultPage from './pages/ResultPage.js';

export default function App($app) {
  const routes = [
    { page: () => new MainPage($app), path: '/' },
    { page: () => new ResultPage($app), path: 'result' },
  ];

  new Router(routes);
}
