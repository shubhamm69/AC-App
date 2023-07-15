import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { getEmployees } from '../services/api';

const EmployeeList = ({ navigation }) => {
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

    return (
        <View>
            <FlatList
                data={employees}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text onPress={() => navigation.navigate('EmployeeDetails', { id: item.id })}>
                        {item.employee_name}
                    </Text>
                )}
            />
        </View>
    );
};

export default EmployeeList;
