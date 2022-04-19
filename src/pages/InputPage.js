import InputDate from './InputDate.js';
import InputAddress from './InputAddress.js';

export default function InputPage($app) {
  const inputDate = new InputDate();
  const inputAddress = new InputAddress();

  this.$target = document.createElement('div');
  this.$target.className = 'input-list';
  $app.appendChild(this.$target);

  this.setState = (nexState) => {
    this.state = nexState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = ``;
  };

  this.render();
}
