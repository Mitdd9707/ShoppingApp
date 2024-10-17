import React from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { AppStack } from "./hooks";
import ShopScreen from "../screens/Shop/Shop";
import HomeScreen from "../screens/Home/Home";

const stackNavigatorConfig = {
  screenOptions: { headerShown: false },
};

interface NavigatorProps {
  theme?: Theme;
}

const Navigator: React.FC<NavigatorProps> = ({ theme }) => {
  const appNavigator = (
    <AppStack.Navigator {...stackNavigatorConfig} initialRouteName="Home">
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerTitle: "Items List",
          headerShown: true,
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
      />
    </AppStack.Navigator>
  );

  return (
    <NavigationContainer theme={theme}>{appNavigator}</NavigationContainer>
  );
};

export default Navigator;
