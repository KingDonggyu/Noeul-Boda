import Component from '../modules/Component.js';
import InputList from '../components/InputList.js';

export default class Home extends Component {
  template() {
    return `
      <h1>노을보다</h1>
      <p>당신이 아름다운 노을을 보았으면 해요</p>
      <div data-component="input-list" id="input-wrapper"></div>
      <button id="home-button">노을 확인하기</button>
    `;
  }

  style() {
    return `
      #home-button {
        width: 150px;
        height: 40px;
        border-radius: 15px;
      }
      
      #input-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 300px;
        margin-bottom: 30px;
      }
    `;
  }

  mounted() {
    const inputList = this.target.querySelector(
      '[data-component="input-list"]'
    );

    new InputList(inputList);
  }
}
