export default class BaseStore {
	/**
	 * Referente to the RootStore.
	 */
	rootStore;

	/**
	 * Construtor of BaseStore.
	 * @param {RootStore} rootStore
	 */
	constructor(rootStore) {
		this.rootStore = rootStore;
	}

	set navigation(navigation){
		this.rootStore.setNavigation(navigation)
	}

	get navigation(){
		return this.rootStore.getNavigation();
	}
}