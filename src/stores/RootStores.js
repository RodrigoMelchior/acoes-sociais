import LoginStore from './LoginStore';
import HomeStore from './HomeStore';

class RootStores {
  _navigation;

  constructor() {
    this.loginStore = new LoginStore(this);
    this.homeStore = new HomeStore(this);

  }

  setNavigation = navigation => {
    this._navigation = navigation;
  };

  getNavigation = () => {
    return this._navigation;
  };
}

export default new RootStores();
