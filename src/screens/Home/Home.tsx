import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect } from "react";
import ScreenTemplate from "../../templates/ScreenTemplate/ScreenTemplate";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { styles } from "./Home.styles";

const HomeScreen: React.FC = ({ navigation }: any) => {
  const animationValue = useSharedValue(0); // Animation starts at 0

  useEffect(() => {
    // Start the animation
    animationValue.value = withTiming(1, {
      duration: 2000, // 2 seconds animation
      easing: Easing.inOut(Easing.ease),
    });

    // Navigate to the next screen after the animation finishes
    const timer = setTimeout(() => {
      navigation.navigate("Shop");
    }, 2500); // 2.5 seconds delay for navigation

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [animationValue, navigation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animationValue.value, // Fade-in effect
      transform: [{ scale: animationValue.value }], // Scaling effect
    };
  });

  return (
    <ScreenTemplate>
      <Animated.Text
        style={[styles.title, animatedStyle]}
        onPress={() => {
          navigation.navigate("Shop");
        }}>
        Welcome to ShoppingApp
      </Animated.Text>
    </ScreenTemplate>
  );
};

export default HomeScreen;
