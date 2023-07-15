import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EmployeeListScreen from './screens/EmployeeListScreen';
import EmployeeDetailsScreen from './screens/EmployeeDetailsScreen';
import EmployeeFormScreen from './screens/EmployeeFormScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="EmployeeList" component={EmployeeListScreen} />
                <Stack.Screen name="EmployeeDetails" component={EmployeeDetailsScreen} />
                <Stack.Screen name="EmployeeForm" component={EmployeeFormScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
