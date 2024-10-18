## Shopping List App

This is a simple shopping list app built using React Native with Redux for state management and Redux Persist for local data persistence. The app allows users to add, edit, delete, and mark shopping items as purchased. The list is saved locally and persists even when the app is closed.

## Features

- Add shopping items with a name, quantity, and unit.
- Edit shopping item names.
- Mark items as purchased.
- Delete items from the list.
- Data persistence using Redux and Redux Persist.
- Optional: Backend synchronization (if implemented).

## Tech Stack

- React Native: Frontend framework for building cross-platform mobile apps.
- Redux: For state management.
- Redux Persist: For persisting Redux state locally.
- Jest: For testing.
- React Native Testing Library: For UI testing.

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- Node.js (>= 12.x)
- npm or yarn (npm is used in this guide)
- React Native CLI (for running on a physical or emulator device)
- Install it globally using:

```bash
npm install -g react-native-cli
```

- Android Studio (for Android development) or Xcode (for iOS development) with a simulator/emulator or physical device connected.

### Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/shopping-list-app.git
cd shopping-list-app
```

2. Install dependencies
   Install all project dependencies using npm or yarn:

```bash
yarn install
```

3. Running the App
   Android
   Make sure you have an Android emulator running or a physical device connected. Then, run the following command:

```bash
npx react-native run-android
```

iOS
Ensure you have Xcode installed and a simulator running, then run the following command:

```bash
npx react-native run-ios
```

Note: For iOS development, you must run this on a Mac system with Xcode installed.

4. Redux Persist
   Redux Persist is configured to store the shopping list data locally. This means that your shopping list will remain intact even when you close and reopen the app.

## Testing

This project includes a basic set of unit and UI interaction tests using Jest and React Native Testing Library.

### Running Tests

To run all the test cases, simply run:

```bash
yarn test
```

### Writing Tests

Test cases are written in the **tests** folder. The tests cover:

- Adding a new shopping item.
- Editing an existing item's name.
- Marking an item as purchased.
- Deleting an item from the list.
- Redux actions and reducers (optional, if implemented).

### Project Structure

- src/components: Contains the React Native components (e.g., ShoppingItem, AddItemForm).
- src/redux: Contains Redux slices and store configuration.
- **tests**: Contains unit and UI tests.

# License

This project is licensed under the MIT License.

### How to Contribute

Feel free to fork the repository, make enhancements, and submit pull requests.

# Author

Developed by Mit Desai
