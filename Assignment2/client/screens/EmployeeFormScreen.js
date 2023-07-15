import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { createEmployee, updateEmployee } from '../services/api';

const EmployeeFormScreen = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');

    const id = route.params?.id ?? null;

    const isEditMode = id !== null;

    const handleSubmit = async () => {
        const employee = {
            employee_name: name,
            employee_salary: salary,
            employee_age: age,
        };

        try {
            if (isEditMode) {
                await updateEmployee(id, employee);
            } else {
                await createEmployee(employee);
            }
            navigation.goBack();
        } catch (error) {
            console.error('Error submitting employee:', error);
        }
    };

    return (
        <View>
            <Text>Name:</Text>
            <TextInput value={name} onChangeText={setName} />

            <Text>Salary:</Text>
            <TextInput value={salary} onChangeText={setSalary} />

            <Text>Age:</Text>
            <TextInput value={age} onChangeText={setAge} />

            <Button title={isEditMode ? 'Update' : 'Create'} onPress={handleSubmit} />
        </View>
    );
};

export default EmployeeFormScreen;
