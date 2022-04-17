import Component from '../modules/Component.js';

export default class InputAddress extends Component {
  template() {
    return`
      <h3>주소</h3>
      <div>
        시/도
        <input></input>
      </div>
      <div>
        시/군/구
        <input></input>  
      </div>
      <div>
        읍/면/동
        <input></input>  
      </div>
    `;
  }
}
