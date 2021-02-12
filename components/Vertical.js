import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";

const Container = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 7px 0px 3px 0px;
`;

const Vertical = ({ id, poster, title, votes }) => (
  <Container>
    <TouchableOpacity>
      <Poster url={apiImage(poster)} />
      <Title>{title.length >= 10 ? `${title.slice(0, 10)}...` : title}</Title>
      <Votes votes={votes} />
    </TouchableOpacity>
  </Container>
);

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
