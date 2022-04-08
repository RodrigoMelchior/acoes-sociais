import { observable, action } from 'mobx';
import BaseStore from './BaseStore';

export default class LoginStore extends BaseStore {

	/**
	 * User Name
	 */
	@observable userName = '';

	/**
	 * User password.
	 */
	@observable password = '';

    

	/**
	 * Store constructor.
	 * @param {RootStore} rootStore
	 */
	constructor(rootStore) {
		super(rootStore);
		this.onNewHome = this.onNewHome.bind(this);
    }
    
    
  @action
  onNewHome() {
    this.navigation.navigate('Home');
  }
	
}
