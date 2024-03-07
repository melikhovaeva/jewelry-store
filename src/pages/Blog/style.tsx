import { PDFDownloadLink } from "@react-pdf/renderer";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 30px;
  gap: 15px;
  max-width: 320px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border: 1px solid #A18A78;
  border-radius: 10px;
  width:100%;
`;

export const Button = styled.button`
  padding: 15px 20px;
  background-color: #A18A78;
  color: #fff;
  border: none;
  width:100%;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #000000;
  }
`;

export const DownloadLink = styled(PDFDownloadLink)`
  text-decoration: none;
  color: #A18A68;
  font-weight: bold;
  padding: 15px;
  border: 1px solid #A18A78;
  border-radius: 10px;
  margin: 50 auto;
  cursor: pointer;
  display: block;
  max-width: 150px;

  &:hover {
    background-color: #A18A78;
    color: #fff;
  }
`;
