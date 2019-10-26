import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Login, Dashboard, SignUp, Subscriptions, Profile } from '../pages';

const AppStack = createBottomTabNavigator(
  {
    dashboard: Dashboard,
    subscriptions: Subscriptions,
    profile: Profile
  },
  {
    tabBarPosition: 'bottom',
    headerMode: 'none',
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: 'white',
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      style: {
        backgroundColor: '#2B1A2F',
        height: 64
      },
      labelStyle: {
        backgroundColor: '#2B1A2F'
      },
      tabStyle: {
        paddingVertical: 10
      }
    }
  }
);
const AuthStack = createSwitchNavigator(
  {
    login: Login,
    signUp: SignUp
  },
  {
    headerMode: 'none'
  }
);
/* eslint-disable */
export default isAuth =>
  createAppContainer(
    createSwitchNavigator(
      {
        auth: AuthStack,
        app: AppStack,
      },
      {
        initialRouteName: isAuth ? 'app' : 'auth',
      },
    ),
  );
