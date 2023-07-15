import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getEmployeeById, deleteEmployee, updateEmployee } from '../services/api';

const EmployeeDetailsScreen = ({ route, navigation }) => {
    const [employee, setEmployee] = useState(null);
    const { id } = route.params;

    useEffect(() => {
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {
        try {
            const data = await getEmployeeById(id);
            setEmployee(data);
        } catch (error) {
            console.error('Error fetching employee details:', error);
        }
    };

    const handleDeleteEmployee = async () => {
        try {
            await deleteEmployee(id);
            navigation.goBack();
            Alert.alert('Success', 'Employee deleted!');
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const handleEditEmployee = () => {
        navigation.navigate('EmployeeForm', { id });
    };

    const handleUpdateEmployee = async (updatedEmployee) => {
        try {
            await updateEmployee(id, updatedEmployee);
            Alert.alert('Success', 'Employee details updated!');
            fetchEmployee();
        } catch (error) {
            console.error('Error updating employee details:', error);
        }
    };

    if (!employee) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.employeeContainer}>
                <Text style={styles.label}>ID:</Text>
                <Text style={styles.value}>{employee.id}</Text>
            </View>
            <View style={styles.employeeContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{employee.employee_name}</Text>
            </View>
            <View style={styles.employeeContainer}>
                <Text style={styles.label}>Salary:</Text>
                <Text style={styles.value}>{employee.employee_salary}</Text>
            </View>
            {employee.employee_age && (
                <View style={styles.employeeContainer}>
                    <Text style={styles.label}>Age:</Text>
                    <Text style={styles.value}>{employee.employee_age}</Text>
                </View>
            )}
            <TouchableOpacity style={styles.editButton} onPress={handleEditEmployee}>
                <Text style={styles.editButtonText}>Edit Employee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteEmployee}>
                <Text style={styles.deleteButtonText}>Delete Employee</Text>
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
    loadingText: {
        fontSize: 16,
        textAlign: 'center',
    },
    employeeContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 8,
    },
    value: {
        flex: 1,
    },
    editButton: {
        marginTop: 16,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: '#ffc107',
        borderRadius: 8,
        alignItems: 'center',
    },
    editButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    deleteButton: {
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: '#dc3545',
        borderRadius: 8,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EmployeeDetailsScreen;
