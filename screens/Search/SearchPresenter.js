import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";

const Container = styled.ScrollView`
  background-color: black;
`;

export default ({ keyword, onChange, onSubmit }) => (
  <Container>
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  </Container>
);
