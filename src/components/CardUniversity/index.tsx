import styled from "styled-components";
import {IUniversity} from "../DynamicPagination/university.interface";
import {FC} from "react";

const CardStyled = styled.div`
    height: 50px;
    background-color: #888888;
    color: #bb5a5a;
`

const CardUniversity: FC<{data: IUniversity}> = ({data}) => (
    <>
        <CardStyled>
            {data.country} - {data.name}
        </CardStyled>
    </>
)

export default CardUniversity;