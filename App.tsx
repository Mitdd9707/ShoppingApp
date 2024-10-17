/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigator from "./src/navigation/navigator";
import { Provider as ReduxProvider } from "react-redux";
import store, { persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
};

export default App;
