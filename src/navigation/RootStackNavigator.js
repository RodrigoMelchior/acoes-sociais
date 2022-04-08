import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fonte from '../assets/icons/UxBB.json';
import { Colors, Fonts } from '../constants/index';

//ROOT
import Login from '../screens/Login';
import Home from '../screens/Home';

const Icon = createIconSetFromIcoMoon(fonte);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.background,
    ...Platform.select({
      ios: {
        opacity: 1,
      },
    }),
  },
});

const RootStackNavigator = StackNavigator(
  {
    //ROOT
    Login: { screen: Login },
    Home: { screen: Home },
   
  },
  {
    //headerMode: 'none',
    initialRouteName: 'Login',
    cardStyle: styles.card,

    navigationOptions: containerOptions => ({
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: Colors.navBarBackgroundColor,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      },
      headerTitleStyle: [Fonts.style.t1, { color: Colors.navBarTintColor }],
      headerTintColor: Colors.navBarTintColor,
      headerRight: (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => {
              const { navigation } = containerOptions;
              navigation.popToTop();
            }}
          >
            <Icon name="places-home-1" size={25} color={Colors.blueBB} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: (
        <HeaderBackButton
          tintColor={Colors.navBarTintColor}
          onPress={() => {
            const { navigation } = containerOptions;

            const isTransactionEnd = navigation.getParam(
              'isTransactionEnd',
              false
            );
            if (isTransactionEnd) {
              navigation.popToTop();
            } else {
              navigation.goBack();
            }
          }}
        />
      ),
    }),
  }
);

export default RootStackNavigator;
