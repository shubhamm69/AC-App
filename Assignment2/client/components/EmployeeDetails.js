import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getEmployeeById } from '../services/api';

const EmployeeDetails = ({ route }) => {
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

    return (
        <View>
            {employee ? (
                <View>
                    <Text>ID: {employee.id}</Text>
                    <Text>Name: {employee.employee_name}</Text>
                    <Text>Salary: {employee.employee_salary}</Text>
                    <Text>Age: {employee.employee_age}</Text>
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default EmployeeDetails;
