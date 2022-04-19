import InputPage from './pages/InputPage.js';
import ResultPage from './pages/ResultPage.js';

export default function App($app) {
  this.route = () => {
    const { pathname } = location;
    $app.innerHTML = '';

    if (pathname === '/') {
      new InputPage($app);
    } else if (pathname === '/result') {
      new ResultPage($app);
    }
  };

  this.route();
}
