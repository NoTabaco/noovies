import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import TvPresenter from "./TvPresenter";

export default () => {
  const [shows, setShows] = useState({
    loading: true,
    popular: [],
    thisWeek: [],
    topRated: [],
    today: [],
    popularError: null,
    thisWeekError: null,
    topRatedError: null,
    todayError: null,
  });
  const getData = async () => {
    const [popular, popularError] = await tvApi.popular();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [today, todayError] = await tvApi.today();
    setShows({
      loading: false,
      popular,
      thisWeek,
      topRated,
      today,
      popularError,
      thisWeekError,
      topRatedError,
      todayError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TvPresenter {...shows} />;
};
