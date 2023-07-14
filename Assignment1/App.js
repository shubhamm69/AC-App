import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignupScreen from "./src/screens/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();

function MyLoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyLoginStack />
    </NavigationContainer>
  );
}










// const switchNavigator = createSwitchNavigator({
//   loginFlow: createNativeStackNavigator({
//     Signup: SignupScreen,
//     Signin: SigninScreen,
//   }),
//   mainFlow: createNativeStackNavigator({
//     Home: HomeScreen,
//   }),
// });

// const App = NavigationContainer(switchNavigator);

// export default () => {
//   return <>
//     <App />
//   </>
// }