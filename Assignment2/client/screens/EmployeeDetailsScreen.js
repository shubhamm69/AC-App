import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getEmployeeById } from '../services/api';

const EmployeeDetailsScreen = ({ route }) => {
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
});

export default EmployeeDetailsScreen;
