import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { formatDate, trimText } from "../utils";
import Poster from "./Poster";

const Container = styled.View`
  padding: 0px 15px;
  margin-bottom: 30px;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 65%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
`;

const Overview = styled.Text`
  color: white;
  margin-top: 5px;
`;

const Horizontal = ({ id, title, releaseDate, poster, overview }) => (
  <Container>
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "flex-start" }}
    >
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 28)}</Title>
        {releaseDate ? (
          <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
        ) : null}
        <Overview>{trimText(overview, 100)}</Overview>
      </Data>
    </TouchableOpacity>
  </Container>
);

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
