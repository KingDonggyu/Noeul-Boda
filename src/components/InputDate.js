import Component from '../modules/Component.js';

export default class InputDate extends Component {
  template() {
    return `
      <h3>날짜</h3>
      <div id="date-picker">
        <button>오늘</button>
        <button>내일</button>
        <button>모레</button>
      </div>
    `;
  }
}
