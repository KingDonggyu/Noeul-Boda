export default function Router(routes) {
  // this.path = location.pathname;

  // window.onhashchange = () => {
  //   this.path = window.location.hash.replace('#', '');
  //   const { page } = routes.find((route) => route.path === this.path);
  //   new page($app);
  // };

  this.path = location.pathname;
  const route = routes.find((route) => route.path === this.path);
  route.page();

  this.push = (nextPath) => {
    window.history.pushState(undefined, 'result', '/result');
  };
}
