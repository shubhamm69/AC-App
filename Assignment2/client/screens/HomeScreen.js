import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button title="Employee List" onPress={() => navigation.navigate('EmployeeList')} />
        </View>
    );
};

export default HomeScreen;
