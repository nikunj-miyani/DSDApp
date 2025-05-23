import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Splash from '../screens/auth/Splash';
import Login from '../screens/auth/Login';
import Home from '../screens/home/Home';
import History from '../screens/history/History';
import Products from '../screens/products/Products';
import Settings from '../screens/settings/Settings';
import {
  CameraIcon,
  HistoryIcon,
  HomeActive,
  ProductsIcon,
  SettingsIcon,
} from '../utils/Svgs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../utils/Colors';
import {bottomBarHeight, WINDOW_HEIGHT} from '../utils/Constant';
import SalesPlan from '../screens/home/salesPlan/SalesPlan';
import LoadInventory from '../screens/home/LoadInventory';
import LoadContainers from '../screens/home/LoadContainers';
import Inspections from '../screens/home/Inspections';
import MessageBoard from '../screens/home/MessageBoard';
import SalesPlanDetail from '../screens/home/salesPlan/SalesPlanDetail';
import StoreActivity from '../screens/home/salesPlan/StoreActivity';
import NewSaleItem from '../screens/home/salesPlan/NewSaleItem';
import LoadTruck from '../screens/home/salesPlan/LoadTruck';
import SearchScreen from '../screens/home/salesPlan/SearchScreen';
import ProductList from '../screens/home/salesPlan/ProductList';
import FinalLoadTruck from '../screens/home/salesPlan/FinalLoadTruck';

const Stack = createStackNavigator();

const BottomTabStack = () => {
  const {bottom} = useSafeAreaInsets();

  const _renderIcon = (routeName: string, selectedTab: string) => {
    switch (routeName) {
      case 'Home':
        return routeName === selectedTab ? <HomeActive /> : <HomeActive />;
      case 'History':
        return routeName === selectedTab ? <HistoryIcon /> : <HistoryIcon />;
      case 'Products':
        return routeName === selectedTab ? <ProductsIcon /> : <ProductsIcon />;
      case 'Settings':
        return routeName === selectedTab ? <SettingsIcon /> : <SettingsIcon />;
    }
  };

  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        className="flex-1 justify-center items-center">
        {_renderIcon(routeName, selectedTab)}
        <Text className="text-text12 font-Heebo-Regular font-normal text-gray70 pt-2">
          {routeName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      tabBar={renderTabBar}
      style={[styles.bottomBar, {paddingBottom: bottom}]}
      shadowStyle={styles.shawdow}
      height={bottomBarHeight}
      circleWidth={WINDOW_HEIGHT * 0.07}
      bgColor={colors.white}
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      // borderTopLeftRight
      renderCircle={() => (
        <Animated.View
          className={'items-center justify-center'}
          style={styles.btnCircleUp}>
          <TouchableOpacity
            className="flex-1 justify-center"
            onPress={() => Alert.alert('Click Action')}>
            <CameraIcon />
          </TouchableOpacity>
        </Animated.View>
      )}>
      <CurvedBottomBar.Screen name="Home" position="LEFT" component={Home} />
      <CurvedBottomBar.Screen
        name="History"
        position="LEFT"
        component={History}
      />
      <CurvedBottomBar.Screen
        name="Products"
        position="RIGHT"
        component={Products}
      />
      <CurvedBottomBar.Screen
        name="Settings"
        position="RIGHT"
        component={Settings}
      />
    </CurvedBottomBar.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={BottomTabStack} />

      <Stack.Screen name="SalesPlan" component={SalesPlan} />
      <Stack.Screen name="SalesPlanDetail" component={SalesPlanDetail} />
      <Stack.Screen name="StoreActivity" component={StoreActivity} />
      <Stack.Screen name="NewSaleItem" component={NewSaleItem} />
      <Stack.Screen name="LoadTruck" component={LoadTruck} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="FinalLoadTruck" component={FinalLoadTruck} />

      <Stack.Screen name="LoadInventory" component={LoadInventory} />
      <Stack.Screen name="LoadContainers" component={LoadContainers} />
      <Stack.Screen name="Inspections" component={Inspections} />
      <Stack.Screen name="MessageBoard" component={MessageBoard} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  shawdow: {
    shadowColor: colors.gray70,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  bottomBar: {
    backgroundColor: colors.white,
  },
  btnCircleUp: {
    width: WINDOW_HEIGHT * 0.07,
    height: WINDOW_HEIGHT * 0.07,
    borderRadius: 100,
    backgroundColor: colors.blue100,
    bottom: WINDOW_HEIGHT * 0.025,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
});
