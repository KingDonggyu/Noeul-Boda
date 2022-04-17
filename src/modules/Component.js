export default class Component {
  constructor(target, props) {
    this.target = target;
    this.props = props;

    this.setup();
    this.render();
  }

  setup() {}

  mounted() {}

  template() {
    return '';
  }

  style() {
    return '';
  }

  render() {
    const style = `<style>${this.style()}</style>`;
    this.target.innerHTML = this.template() + style;
    this.mounted();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
