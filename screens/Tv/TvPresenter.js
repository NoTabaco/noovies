import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Tv/Slide";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

const { height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;

const Container = styled.View`
  margin-top: 25px;
`;

export default ({ loading, popular, topRated, today, thisWeek }) => (
  <ScrollContainer loading={loading}>
    <Container>
      <HorizontalSlider title={"Popular Shows"}>
        {popular.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {thisWeek.map((show) => (
            <Slide
              key={show.id}
              id={show.id}
              title={show.original_name}
              poster={show.poster_path}
              backgroundImage={show.backdrop_path}
              votes={show.vote_average}
              overview={show.overview}
              firstAirDate={show.first_air_date}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <HorizontalSlider title={"Top Rated Shows"}>
        {topRated.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title={"Airing Today"}>
        {today.map((show) => (
          <Horizontal
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            votes={show.vote_average}
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
