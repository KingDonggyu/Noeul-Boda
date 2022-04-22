import Router from './utils/Router.js';
import MainPage from './pages/MainPage.js';
import ResultPage from './pages/ResultPage.js';
import { requestWeather, requestGeocoding } from './utils/api.js';

export default function App($app) {
  this.routes = [
    { page: () => new MainPage($app), path: '/' },
    { page: () => new ResultPage($app), path: 'result' },
  ];

  new Router(this.routes);

  const init = async () => {
    try {
      // this.weater = await requestWeather();
      this.geocoding = await requestGeocoding();
    } catch (e) {
      console.log('error' + e);
    }
  };

  init();
}
