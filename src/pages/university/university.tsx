import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import axios from 'axios';
import './university.css';
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

  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
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
      <Button onClick={() => {
        setOffset(offset - LIMIT_LIST_SCHOOL)
        setPage(page - 1)
      }} disabled={!offset}>Назад</Button>
      <Button onClick={() => {
        setOffset(offset + LIMIT_LIST_SCHOOL)
        setPage(page + 1)
      }
      }>Вперед</Button>
      <p>Текущая страница: {page + 1}</p>
    </>
  )
}
export default University;