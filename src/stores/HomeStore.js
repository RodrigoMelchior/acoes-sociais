import { observable, action } from 'mobx';
import BaseStore from './BaseStore';
import { Events, Strings } from '../constants/index';
import { BackHandler, Keyboard } from 'react-native';
import PubSub from 'pubsub-js';

const payload = {
  type: Strings.WARNING,
  title: 'Sair do Aplicativo',
  message: 'Você realmente deseja sair do Aplicativo Caspc?',
  secondaryButton: {
    title: 'Cancelar',
  },
};

export default class HomeStore extends BaseStore {
  /**
   * Store constructor.
   * @param {RootStore} rootStore
   */
  constructor(rootStore) {
    super(rootStore);

    this.handleBackButton = this.handleBackButton.bind(this);
    this.onNewHome = this.onNewHome.bind(this);
}

  /**
   * Receives a navigation object and set backbutton event.
   * @param {Any} navigation
   */
  configureNavigationOptions() {
    this.navigation.addListener(Events.NAVIGATION_DID_FOCUS, payload => {
      console.log(
        `${Events.NAVIGATION_DID_FOCUS} - ${JSON.stringify(payload, null, 2)}`
      );
      BackHandler.addEventListener(
        Events.HARDWARE_BACK_PRESS,
        this.handleBackButton
      );
      Keyboard.dismiss();
    });
    this.navigation.addListener(Events.NAVIGATION_DID_BLUR, payload => {
      console.log(
        `${Events.NAVIGATION_DID_BLUR} - ${JSON.stringify(payload, null, 2)}`
      );
      BackHandler.removeEventListener(
        Events.HARDWARE_BACK_PRESS,
        this.handleBackButton
      );
    });
  }

  /**
   * Sets the backButton Event
   */
  handleBackButton() {
    const newPayload = {
      ...payload,
      primaryButton: {
        title: 'Sair',
        onPress: () => this.navigation.replace('Login'),
      },
    };
    PubSub.publish(Events.MODALALERT_SHOW, newPayload);
    return true;
  }

  @action
  onNewHome() {
    this.navigation.navigate('Home');
  }

}
