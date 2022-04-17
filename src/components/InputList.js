import Component from '../modules/Component.js';
import InputDate from './InputDate.js';
import InputAddress from './InputAddress.js';

export default class InputList extends Component {
  template() {
    return `
      <div data-component="input-date" class="input-item" id="date-wrapper"></div>
      <div data-component="input-address" class="input-item" id="address-wrapper"></div>
    `;
  }

  style() {
    return `
      .input-item {
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border-radius: 15px;
        box-shadow: rgb(0 0 0 / 8%) 2px 4px 12px;
      }
      #date-wrapper {

      }
      #address-wrapper {
        
      }
    `;
  }

  mounted() {
    const inputDate = this.target.querySelector(
      '[data-component="input-date"]'
    );

    const inputAddress = this.target.querySelector(
      '[data-component="input-address"]'
    );

    new InputDate(inputDate);
    new InputAddress(inputAddress);
  }
}
