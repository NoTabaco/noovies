import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import ScrollContainer from "../../components/ScrollContainer";
import Slide from "../../components/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";

const { height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 40px;
`;

const Container = styled.View``;

export default ({ refreshFn, loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <SliderContainer>
      <Swiper controlsEnabled={false} loop timeout={3}>
        {nowPlaying.map((movie) => (
          <Slide
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            backgroundImage={movie.backdrop_path}
            votes={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </Swiper>
    </SliderContainer>
    <Container>
      <HorizontalSlider title={"Popular Movies"}>
        {popular.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title={"Coming Soon"}>
        {upcoming.map((movie) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            releaseDate={movie.release_date}
            poster={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
