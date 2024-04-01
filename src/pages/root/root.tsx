import { FC, useState } from "react";
import { Typography as antdTypography } from "antd";
import styled from "styled-components";
const { Title, Paragraph } = antdTypography;

const Typography = styled(antdTypography)`
  text-align: center;
`;

const Root: FC = () => {
  const [count, setCount] = useState("пустота");
  const [value, setValue] = useState<string>("");

  return (
    <div className="container">
      <div>Count: {count}</div>
      <input
        data-testid={"input-update"}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button
        data-testid={"button-update"}
        onClick={() => {
          setCount("button-update");
        }}
      >
        update
      </button>
      <Typography>
        <Title>Welcome to Filmix</Title>
        <Paragraph>Online cinema without ads</Paragraph>
      </Typography>
    </div>
  );
};

export default Root;
