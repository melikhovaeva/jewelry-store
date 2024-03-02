import {FC, useEffect, useState} from "react";
import {IUniversity} from "./university.interface";
import CardUniversity from "../CardUniversity";
import axios from "axios";

const LIMIT_UNIVERSITIES = 10;

const DynamicPagination: FC = () => {
    const [universities, setUniversities] = useState<Array<IUniversity>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchUniversities = async () => {
        try {
            const offset = (currentPage - 1) * LIMIT_UNIVERSITIES
            const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`)
            setUniversities((prev) => [...prev, ...response.data])
        } catch (error) {
            console.log('Error fetching univer...', error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => { fetchUniversities() }, [currentPage])

    return (
        <>
            <h1>List Universities</h1>
            {
                universities.map((university) => (
                    <CardUniversity data={university} key={university.name}></CardUniversity>
                ))
            }
        </>
    )
}

export default DynamicPagination;
