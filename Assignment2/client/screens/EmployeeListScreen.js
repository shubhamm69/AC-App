import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { getEmployees, deleteEmployee } from '../services/api';
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

const EmployeeListScreen = ({ navigation }) => {
    const [employees, setEmployees] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setEmployees(data);
            setSearchResults(data);
            setSearchQuery('');
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteEmployee(id);
            const updatedEmployees = employees.filter((employee) => employee.id !== id);
            setEmployees(updatedEmployees);
            setSearchResults(updatedEmployees);
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const renderEmployeeItem = ({ item }) => (
        <View style={styles.employeeItemContainer}>
            <TouchableOpacity
                style={styles.employeeInfoContainer}
                onPress={() => navigation.navigate('EmployeeDetails', { id: item.id })}
            >
                <Text style={styles.employeeName}>{item.employee_name}</Text>
                <Text style={styles.employeeDetails}>Salary: {item.employee_salary}</Text>
                <Text style={styles.employeeDetails}>Age: {item.employee_age}</Text>
            </TouchableOpacity>
            <View style={styles.actionsContainer}>
                <TouchableOpacity
                    style={[styles.actionButton, styles.editButton]}
                    onPress={() => navigation.navigate('EmployeeForm', { id: item.id })}
                >
                    <Text style={styles.actionButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.actionButton, styles.deleteButton]}
                    onPress={() => handleDelete(item.id)}
                >
                    <Text style={styles.actionButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    useFocusEffect(
        React.useCallback(() => {
            fetchEmployees();

            return () => {
                // Cleanup function
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <FontAwesome name="search" size={20} color="#007bff" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Search employee"
                    placeholderTextColor="#007bff"
                />
            </View>
            <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderEmployeeItem}
            />
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('EmployeeForm')}>
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#007bff',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#007bff',
    },
    employeeItemContainer: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#fff',
        borderColor: '#e8e8e8',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    employeeInfoContainer: {
        flex: 1,
        marginRight: 16,
    },
    employeeName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    employeeDetails: {
        fontSize: 16,
    },
    actionsContainer: {
        flexDirection: 'row',
    },
    actionButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginLeft: 8,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editButton: {
        backgroundColor: '#007bff',
    },
    deleteButton: {
        backgroundColor: '#dc3545',
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
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
