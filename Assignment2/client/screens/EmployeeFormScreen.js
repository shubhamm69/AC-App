import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getEmployeeById, updateEmployee, createEmployee } from '../services/api';

const EmployeeFormScreen = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');

    const id = route.params?.id ?? null;

    const isEditMode = id !== null;

    useEffect(() => {
        if (isEditMode) {
            fetchEmployee();
        }
    }, []);

    const fetchEmployee = async () => {
        try {
            const employee = await getEmployeeById(id);
            setName(employee.employee_name);
            setSalary(employee.employee_salary.toString());
            setAge(employee.employee_age ? employee.employee_age.toString() : '');
        } catch (error) {
            console.error('Error fetching employee details:', error);
        }
    };

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
            const successMessage = isEditMode ? 'Employee updated!' : 'Employee added!';
            Alert.alert('Success', successMessage);
        } catch (error) {
            console.error('Error submitting employee:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
            />

            <Text style={styles.label}>Salary:</Text>
            <TextInput
                style={styles.input}
                value={salary}
                onChangeText={setSalary}
                placeholder="Enter salary"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                placeholder="Enter age"
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{isEditMode ? 'Update' : 'Create'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default EmployeeFormScreen;
