import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { appRoutes } from './routes';
import { white, darkRed, whiteLight } from '~/styles/colors';
import { TabIcon } from '~/components';
import { LoadingScreen } from '~/views';

function Routes() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake Loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);

  const Stack = createStackNavigator();
  const Tabs = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden />
      {isLoading ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Tabs.Navigator
          barStyle={styles.tabStyle}
          backBehavior="history"
          keyboardHidesNavigationBar={true}
          activeColor={white}
          inactiveColor={whiteLight}>
          {appRoutes.map((route) => (
            <Tabs.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={() => ({
                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ focused }) => (
                  <TabIcon icon={route.icon} focused={focused} />
                ),
                tabBarAccessibilityLabel: `Opção ${route.label} do Menu`,
                title: route.label,
              })}
            />
          ))}
        </Tabs.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: darkRed,
  },
});

export default Routes;
