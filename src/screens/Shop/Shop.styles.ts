import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  TopView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textinputView: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F5F5F5",
  },
  button: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#ccc",
    width: "100%",
    borderRadius: 5,
    marginTop: 10,
    color: "#000",
    borderWidth: 1,
    height: 40,
  },
  LabelTitle: {
    fontSize: 14,
    color: "#010101",
    fontWeight: "black",
  },
  item: {
    fontSize: 18,
    color: "#000",
    fontWeight: "black",
  },
  buttons: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-evenly",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  addedittext: {
    color: "#000000",
    fontSize: 16,
  },
  // Flatlist Items

  FlatListView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    height: "50%",
    marginBottom: 10,
    marginTop: 10,
  },
  ListtextView: {
    width: "100%",
    justifyContent: "center",
  },
  boxname: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
  },
});
