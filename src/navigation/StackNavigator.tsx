import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Home from '../screens/home/Home';
import Splash from '../screens/auth/Splash';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import History from '../screens/history/History';
import Products from '../screens/products/Products';
import Settings from '../screens/settings/Settings';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

const HomeTab = () => {
  const nav = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {
    if (routeName == 'Home')
      return routeName === selectedTab ? (
        <images.Home2Active />
      ) : (
        <images.Home2InActive />
      );
    else if (routeName == 'Gallery')
      return routeName === selectedTab ? (
        <images.GalleryInactive />
      ) : (
        <images.GalleryActive />
      );
    else if (routeName == 'LeaderBoard')
      return routeName === selectedTab ? (
        <images.TrophyActive />
      ) : (
        <images.TrophyInactive />
      );
    else if (routeName == 'Profile')
      return routeName === selectedTab ? (
        <images.ProfileActive />
      ) : (
        <images.ProfileActive />
      );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  function e(reason: any): PromiseLike<never> {
    throw new Error('Function not implemented.');
  }

  return (
    <CurvedBottomBar.Navigator
      screenOptions={{headerShown: false}}
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={60}
      circleWidth={60}
      // bgColor="transparent"
      bgColor="#c2d6e1"
      initialRouteName="home"
      // renderCircle={({selectedTab, navigate}) => (
      //   <Animated.View style={styles.btnCircleUp}>
      //     <TouchableOpacity
      //       style={styles.button}
      //       onPress={async () => {
      //         try {
      //           const granted = await PermissionsAndroid.request(
      //             PermissionsAndroid.PERMISSIONS.CAMERA,
      //           );
      //           if ((await granted) == PermissionsAndroid.RESULTS.GRANTED) {
      //             console.log('granted');
      //             const result = await launchCamera({mediaType: 'photo'});
      //             console.log('i am from lauch camera', result);
      //             nav.navigate(ROUTES.pageNameForm, {
      //               image: {path: result.assets[0].uri, type: 'image'},
      //             });
      //           } else {
      //             console.log('not granted');
      //           }
      //           console.log('this is in the naviagator');

      //           // ImageCropPicker.openCamera({mediaType: 'any'})
      //           //   .then(img => {
      //           //     console.log('this an image', img);
      //           //     nav.navigate(ROUTES.pageNameForm, {
      //           //       image: {path: img.path, type: 'image'},
      //           //     });
      //           //   })
      //           //   .catch(e => console.log('error in camera', e));
      //         } catch (e) {
      //           console.log('error in navigator', e);
      //         }
      //       }}>
      //       <images.camera />
      //     </TouchableOpacity>
      //   </Animated.View>
      // )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen name="Home" position="LEFT" component={Home} />
      <CurvedBottomBar.Screen
        name="History"
        component={History}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Products"
        position="LEFT"
        component={Products}
      />
      <CurvedBottomBar.Screen
        name="Settings"
        component={Settings}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeTab} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
