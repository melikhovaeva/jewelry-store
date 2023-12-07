import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import axios from 'axios';
import './App.css';
import type { ColumnsType } from 'antd/es/table';

const University = () => {
  interface DataType {
    country: string,
    name: string,
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Название школы',
      dataIndex: 'name',
      key: 'name',
    },
  ]

  const [offset, setOffset] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();


  const getUniversity = async (offset: number, limit: number) => {
    const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`)
    setDataSource(response.data);    
  }

  const LIMIT_LIST_SCHOOL = 10

  useEffect(() => {
    getUniversity(offset, LIMIT_LIST_SCHOOL)
  }, [offset])

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false}/>
      <Button onClick={() => setOffset(offset - 1)} disabled={!offset}>Назад</Button>
      <Button onClick={() => setOffset(offset + 1)}>Вперед</Button>
      <p>Текущая страница: {offset + 1}</p>
    </>
  )
}
export default University;
