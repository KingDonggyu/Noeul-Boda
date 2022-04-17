import Component from './modules/Component.js';
import Home from './pages/Home.js';

export default class App extends Component {
  setup() {}

  template() {
    return `
      <div data-component="home" id="home-wrapper"></div>
    `;
  }

  style() {
    return `
      #home-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #444444;
      }
    `;
  }

  mounted() {
    const home = this.target.querySelector('[data-component="home"]');

    new Home(home);
  }
}
