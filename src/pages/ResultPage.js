export default function ResultPage($app) {
  this.$target = document.createElement('div');
  this.$target.className = 'result';
  $app.appendChild(this.$target);

  this.render = () => {
    this.$target.innerHTML = `
      <h1>Result</h1>
      <button type="button" class="other-button">Main Page</button>
    `
  };

  this.render();
}
