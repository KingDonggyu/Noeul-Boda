export default function InputAddress({ $app, initialState }) {
  this.state = initialState;

  const $target = document.createElement('div');
  $target.className = 'input-address';
  $app.appendChild($target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = `
      <h3 class='address-title'>주소</h3>
      <div class='address-item'>
        시/도
        <input></input>
      </div>
      <div class='address-item'>
        시/군/구
        <input></input>
      </div>
      <div class='address-item'>
        읍/면/동
        <input></input>
      </div>
    `;

    const $addressTitle = $target.querySelector('.address-title');
    const $addressItems = $target.querySelectorAll('.address-item');

    $target.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
    `

    $addressTitle.style.cssText = `
      margin-right: 20px;
    `

    $addressItems.forEach(item => {
      item.style.cssText = `
        margin-left: 20px;
      `
    })
  };

  this.render();
}
