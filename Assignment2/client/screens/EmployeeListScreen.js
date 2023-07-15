import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getEmployees, deleteEmployee } from '../services/api';

const EmployeeListScreen = ({ navigation }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setEmployees(data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleDeleteEmployee = async (id) => {
        try {
            await deleteEmployee(id);
            fetchEmployees();
            Alert.alert('Success', 'Employee deleted!');
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const renderEmployeeItem = ({ item }) => (
        <TouchableOpacity
            style={styles.employeeItemContainer}
            onPress={() => navigation.navigate('EmployeeDetails', { id: item.id })}
            onLongPress={() => handleDeleteEmployee(item.id)}
        >
            <Text style={styles.employeeName}>{item.employee_name}</Text>
            <Text style={styles.employeeDetails}>Salary: {item.employee_salary}</Text>
            <Text style={styles.employeeDetails}>Age: {item.employee_age}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={employees}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderEmployeeItem}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('EmployeeForm')}
            >
                <Text style={styles.addButtonText}>Add Employee</Text>
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
    employeeItemContainer: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#e8e8e8',
        borderRadius: 8,
    },
    employeeName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    employeeDetails: {
        fontSize: 16,
        marginTop: 8,
    },
    addButton: {
        marginTop: 16,
        marginBottom: 32,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#007bff',
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EmployeeListScreen;
