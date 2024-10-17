import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import { styles } from "./ScreenTemplate.styles";

const ScreenTemplate: React.FC<{
  children: React.ReactNode;
}> = ({ children, ...rest }) => {
  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <View style={styles.Container}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenTemplate;
