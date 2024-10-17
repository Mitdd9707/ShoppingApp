import { useNavigation } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

export type AppStackParamList = {
  Shop: undefined;
  Home: undefined;
};

export type AppStackNavigationProps = StackNavigationProp<AppStackParamList>;
export const useAppNavigation = () => useNavigation<AppStackNavigationProps>();
export const AppStack = createStackNavigator<AppStackParamList>();
