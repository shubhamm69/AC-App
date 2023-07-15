import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
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
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <View>
            <FlatList
                data={employees}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EmployeeDetails', { id: item.id })}
                        onLongPress={() => handleDeleteEmployee(item.id)}
                    >
                        <Text>{item.employee_name}</Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity onPress={() => navigation.navigate('EmployeeForm')}>
                <Text>Add Employee</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EmployeeListScreen;
