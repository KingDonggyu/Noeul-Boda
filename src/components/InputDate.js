export default function InputDate({ $app, initialState }) {
  this.state = initialState;

  const $target = document.createElement('div');
  $target.className = 'input-date';
  $app.appendChild($target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = `
      <h3>날짜</h3>
      <div id="date-picker">
        <button>오늘</button>
        <button>내일</button>
        <button>모레</button>
      </div>
    `;

    $target.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
    `
  };

  this.render()
}
