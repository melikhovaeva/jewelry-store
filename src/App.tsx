import React from 'react';
import { Table } from 'antd';
import './App.css';

function App() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      job: 'Developer',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      job: 'Engineer',
    },
    {
      key: '3',
      name: 'Alice',
      age: 28,
      address: '5th Avenue',
      job: 'Designer',
    },
    {
      key: '4',
      name: 'Bob',
      age: 35,
      address: 'Sunset Boulevard',
      job: 'Manager',
    },
    {
      key: '5',
      name: 'Eve',
      age: 29,
      address: 'Broadway',
      job: 'Analyst',
    },
    {
      key: '6',
      name: 'Charlie',
      age: 45,
      address: 'Main Street',
      job: 'Consultant',
    },
    {
      key: '7',
      name: 'Grace',
      age: 31,
      address: 'Elm Street',
      job: 'Teacher',
    },
    {
      key: '8',
      name: 'David',
      age: 39,
      address: 'Maple Avenue',
      job: 'Doctor',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Job',
      dataIndex: 'job',
      key: 'job',
    },
  ];
  
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default App;
