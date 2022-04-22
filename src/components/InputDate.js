export default function InputDate({ $app, initialState }) {
  this.state = initialState;

  this.$target = document.createElement('div');
  this.$target.className = 'input-date';
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `
      <h3>날짜</h3>
      <div id="date-picker">
        <button>오늘</button>
        <button>내일</button>
        <button>모레</button>
      </div>
    `;
  };

  this.render()
}
