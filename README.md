# Employee Management System

This is a web application for managing employee records. It provides basic CRUD (Create, Read, Update, Delete) operations for managing employee information.

## Features

- View a list of employees with their names, salaries, and ages.
- Search employees by name.
- Add a new employee to the system.
- Edit existing employee information.
- Delete an employee from the system.

## Technologies Used

- Front-end: React Native
- Back-end: Node.js, Express.js

## Getting Started

### Prerequisites

- Node.js (v12 or higher)

### Installation

1. Clone the repository:

```
$ git clone https://github.com/shubhamm69/AC-App
```

#### Server

1. Open the server folder:

```
$ cd AC-App/Assignment2/server
```

2. Install the dependencies:

```
$ npm install
```

3. Start the server:

```
$ npm start
```

4. The server will start running on `http://localhost:6900`.

#### Client

1. Open the client folder:
```
$ cd AC-App/Assignment2/client
```

2. Install the dependencies:

```
$ npm install
```

3. Start the client:

```
$ npx expo start
```

4. The Expo development server will start, and you can run the app on an emulator or physical device.


## Usage

- You will see a list of employees.

- Use the search bar to filter employees by name.

- Click on an employee to view their details.

- Click the "Add Employee" button to create a new employee.

- Click the "Edit" button on the Employee Details screen to update employee information.

- Click the "Delete" button on the Employee Details screen to remove an employee from the system.

## JSON Database

The application uses a JSON file (`server/db.json`) as the database to store employee records. The file contains an array of employee objects in JSON format. Each employee object has properties such as `id`, `name`, `salary`, and `age`.


### HomeScreen
![Simulator Screenshot - iPhone 14 Pro Max - 2023-07-16 at 00 40 28](https://github.com/shubhamm69/AC-App/assets/109853624/f17da688-9ee5-4942-8f34-d823cd6d8803)

### Employee Details Screen
![simulator_screenshot_285DF857-C472-40CF-A3BA-78CA30C6D70C](https://github.com/shubhamm69/AC-App/assets/109853624/5373c615-4650-40ac-bbaf-4ad0534f29f4)

### Employee Edit Screen
![simulator_screenshot_92D74DAE-FA0B-4559-B5FB-8D6E4DEA43E1](https://github.com/shubhamm69/AC-App/assets/109853624/e1261174-b879-44ba-b237-43123d2a6616)

### Add New Employee Screen
![simulator_screenshot_BF8FEBA5-34FC-4F42-ACAE-9D4D00A2AB24](https://github.com/shubhamm69/AC-App/assets/109853624/85b0f85c-8784-4083-9cd8-1c8776acda7e)

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.


