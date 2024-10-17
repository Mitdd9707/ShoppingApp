import React, { useState } from "react";
import { styles } from "./Shop.styles";
import ScreenTemplate from "../../templates/ScreenTemplate/ScreenTemplate";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Alert,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import uuid from "react-native-uuid";
import {
  addItems,
  deleteItems,
  editItems,
  shopItems,
  togglePurchaseds,
} from "../../redux/slices/shop";
import CheckBox from "react-native-check-box";
import { RootState, useAppDispatch, useSelector } from "../../redux/store";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TextInput from "../../components/atoms/TextInput/TextInput";

// Enable LayoutAnimation for Android
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ShopScreen: React.FC = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const list = useSelector((state: RootState) => state.shop);
  // State to hold the current input value
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selectIndex, setSelectIndex] = useState(null);

  const addShopItems = async () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const trimmedName = name.trim();
    const trimmedUnit = unit.trim();
    const parsedQuantity = parseFloat(quantity);

    if (trimmedName === "") {
      Alert.alert("Error", "Item name cannot be empty.");
      return;
    }

    // Validation: Check if quantity is a valid positive number
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      Alert.alert("Error", "Quantity must be a positive number.");
      return;
    }

    // Validation: Check if unit is empty
    if (trimmedUnit === "") {
      Alert.alert("Error", "Unit cannot be empty.");
      return;
    }

    // Validation: Check if the item already exists
    if (
      list.shopList.some(
        (item) => item.Name.toLowerCase() === trimmedName.toLowerCase()
      )
    ) {
      Alert.alert("Error", "Item already exists.");
      return;
    }

    await dispatch(
      addItems([
        ...list.shopList,
        {
          id: uuid.v4(),
          Name: trimmedName,
          Quantity: parsedQuantity,
          Unit: trimmedUnit,
          Purchased: false,
        },
      ])
    );
    // Clear the inputs after adding
    setName("");
    setQuantity("");
    setUnit("");
  };

  const editShopItems = async () => {
    await dispatch(editItems({ id: selectIndex, name }));
    setName("");
    setQuantity("");
    setUnit("");
    setSelectIndex(null);
    setIsEdit(false);
  };

  const editNameItems = (id) => {
    const index: shopItems | undefined = list.shopList.find(
      (item) => item.id === id
    );
    setName(index?.Name);
    setQuantity(index?.Quantity);
    setUnit(index?.Unit);
    setSelectIndex(index?.id);
    setIsEdit(!isEdit);
  };

  const renderItems = ({ item, index }: { item: shopItems; index: number }) => {
    return (
      <View
        key={index}
        style={[
          styles.FlatListView,
          {
            backgroundColor: item.Purchased ? "#ccc" : undefined,
          },
        ]}>
        <View style={styles.boxname}>
          <CheckBox
            isChecked={item.Purchased}
            onClick={() => dispatch(togglePurchaseds(item.id))}
            style={{
              padding: 10,
            }}
          />
          <View style={styles.ListtextView}>
            <Text style={styles.item}>{item.Name}</Text>
            <View style={styles.boxname}>
              <Text style={styles.LabelTitle}>Quantity: </Text>
              <Text style={styles.item}>{item.Quantity}</Text>
            </View>
            <View style={styles.boxname}>
              <Text style={styles.LabelTitle}>Unit: </Text>
              <Text style={styles.item}>{item.Unit}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <Icon
            name="pencil-circle"
            color={"#000"}
            onPress={() => editNameItems(item.id)}
            size={25}
          />
          <Icon
            name="delete"
            color={"#000"}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );
              dispatch(deleteItems(item.id));
            }}
            size={25}
          />
        </View>
      </View>
    );
  };

  return (
    <ScreenTemplate>
      {list.shopList && list.shopList.length > 0 && (
        <FlatList
          data={list.shopList}
          style={{ width: "100%", marginBottom: 10 }}
          renderItem={renderItems}
          keyExtractor={(item) => `id-${item.id.toString()}`}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}
      <View style={styles.TopView}>
        <View style={styles.textinputView}>
          <TextInput
            style={styles.input}
            placeholder="Item Name"
            value={name}
            onChangeText={setName}
            keyboardType="default"
          />
          {!isEdit && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Quantity"
                value={quantity}
                keyboardType="numeric"
                onChangeText={setQuantity}
              />
              <TextInput
                style={styles.input}
                placeholder="Unit (e.g., kg, liters, pieces)"
                value={unit}
                onChangeText={setUnit}
              />
            </>
          )}
        </View>
        <Pressable
          onPress={isEdit ? editShopItems : addShopItems}
          style={styles.button}>
          <Text style={styles.buttonText}>
            {isEdit ? "Update Items" : "Add Items"}
          </Text>
        </Pressable>
      </View>
    </ScreenTemplate>
  );
};

export default ShopScreen;
