import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { apiImage } from "../../api";
import { formatDate } from "../../utils";

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
  margin-top: 40px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  margin-top: 20px;
  color: white;
  opacity: 0.8;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ result, loading }) => (
  <ScrollContainer loading={false}>
    <Header>
      <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
      <Container>
        <Poster url={result.poster} />
        <Info>
          <Title>{result.title}</Title>
          {result.votes > 0 && <Votes votes={result.votes} />}
        </Info>
      </Container>
    </Header>
    <Data>
      {result.overview !== "" && (
        <>
          <DataName>Overview</DataName>
          <DataValue>{result.overview}</DataValue>
        </>
      )}
      {loading && (
        <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
      )}
      {result.spoken_languages && (
        <>
          <DataName>Language(s)</DataName>
          <DataValue>
            {result.spoken_languages.map((l, index) =>
              index !== result.spoken_languages.length - 1
                ? `${l.name}\n`
                : l.name
            )}
          </DataValue>
        </>
      )}
      {result.release_date && (
        <>
          <DataName>Release Date</DataName>
          <DataValue>{formatDate(result.release_date)}</DataValue>
        </>
      )}
    </Data>
  </ScrollContainer>
);
