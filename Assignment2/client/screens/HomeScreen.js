import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button title="Employee List" onPress={() => navigation.navigate('EmployeeList')} />
            <Button title="Add Employee" onPress={() => navigation.navigate('EmployeeForm')} />
        </View>
    );
};

export default HomeScreen;
