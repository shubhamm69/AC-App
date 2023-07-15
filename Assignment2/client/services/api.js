const BASE_URL = 'http://localhost:6900/api'; // Replace with your JSON server URL

export const getEmployees = async () => {
    try {
        const response = await fetch(`${BASE_URL}/employees`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error retrieving employees:', error);
        throw error;
    }
};

export const getEmployeeById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/employees/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error retrieving employee with ID ${id}:`, error);
        throw error;
    }
};

export const createEmployee = async (employee) => {
    try {
        const response = await fetch(`${BASE_URL}/employees`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating employee:', error);
        throw error;
    }
};

export const updateEmployee = async (id, employee) => {
    try {
        const response = await fetch(`${BASE_URL}/employees/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating employee with ID ${id}:`, error);
        throw error;
    }
};

export const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/employees/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error deleting employee with ID ${id}:`, error);
        throw error;
    }
};
