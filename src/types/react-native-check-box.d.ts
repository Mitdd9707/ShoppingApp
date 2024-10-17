declare module "react-native-check-box" {
  import { Component } from "react";
  import { ViewStyle, TextStyle } from "react-native";

  interface CheckBoxProps {
    onClick: () => void;
    isChecked: boolean;
    leftText?: string;
    leftTextStyle?: TextStyle;
    rightText?: string;
    rightTextStyle?: TextStyle;
    checkBoxColor?: string;
    checkedCheckBoxColor?: string;
    uncheckedCheckBoxColor?: string;
    disabled?: boolean;
    disabledCheckBoxColor?: string;
    style?: ViewStyle;
    // Add other props here as needed
  }

  export default class CheckBox extends Component<CheckBoxProps> {}
}
