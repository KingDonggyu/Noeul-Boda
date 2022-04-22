import InputDate from '../components/InputDate.js';
import InputAddress from '../components/InputAddress.js';
import { requestWeather, requestGeocoding } from '../utils/api.js';

export default function MainPage($app) {
  this.state = {
    weather: {},
    geocoding: {},
  };

  const $target = document.createElement('div');
  $target.className = 'main';
  $app.appendChild($target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = `
      <h1>노을보다</h1>
      <div class="input-list"></div>
    `;

    const $inputList = $target.querySelector('.input-list');
    new InputDate({ $app: $inputList });
    new InputAddress({ $app: $inputList });

    $target.style.cssText = `
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `;

    $inputList.style.cssText = `
      padding: 25px;
      background-color: white;
      border-radius: 15px;
      box-shadow: rgb(0 0 0 / 8%) 2px 4px 12px;
    `
  };

  const init = async () => {
    try {
      this.setState({
        ...this.state,
        geocoding: await requestGeocoding(),
      });
    } catch (e) {
      console.log(e);
    }
  };

  init();
}
