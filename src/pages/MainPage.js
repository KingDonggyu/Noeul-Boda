import InputDate from "../components/InputDate.js";
import InputAddress from "../components/InputAddress.js"

export default function MainPage($app) {
  new InputDate({$app});
  new InputAddress({$app});

  this.$target = document.createElement('div');
  this.$target.className = 'input';
  $app.appendChild(this.$target);

  this.render = () => {
    this.$target.innerHTML = `
      <h1>input</h1>
      <button type="button" class="main-button">Other Page</button>
    `;

    const button = document.querySelector('.main-button'); 
    button.addEventListener('click', () => history.pushState({}, "test", '/result'));
  };

  this.render();
}
