import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { apiImage } from "../../api";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 5px;
`;

const Data = styled.View`
  margin-top: 70px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: bold;
  margin-bottom: 5px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ backgroundImage, title, votes, overview, poster }) => (
  <ScrollContainer loading={false}>
    <Header>
      <BG source={{ uri: apiImage(backgroundImage, "-") }} />
      <Container>
        <Poster url={poster} />
        <Info>
          <Title>{title}</Title>
          {votes > 0 && <Votes votes={votes} />}
        </Info>
      </Container>
    </Header>
    <Data>
      {overview !== "" && (
        <>
          <DataName>Overview</DataName>
          <DataValue>{overview}</DataValue>
        </>
      )}
    </Data>
  </ScrollContainer>
);
