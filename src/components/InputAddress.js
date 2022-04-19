export default function InputAddress({ $app, initialState }) {
  this.state = initialState;

  this.$target = document.createElement('div');
  this.$target.className = 'input-address';
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `
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
  };
}
