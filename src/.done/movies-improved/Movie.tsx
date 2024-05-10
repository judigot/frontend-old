import React from "react";

import styled from "styled-components";

const Movie = styled.div`
  text-align: center;
  margin: 5px;
  border: 1px solid black;

  padding: 10px;

  cursor: pointer;
`;

const Overview = styled.span`
  // display: none;
`;

const VoteAverage = styled.span`
  float: right;
`;

interface Props {
  movies: object;
  isOverviewVisible: boolean;
  toggleVisibility: Function;
}

const MovieComponent = ({
  movies,
  isOverviewVisible,
  toggleVisibility,
}: Props) => {
  const row: any = movies;
  return (
    <Movie
      onClick={() => {
        toggleVisibility(row.id);
      }}
    >
      <h4>{row.original_title}</h4>
      {isOverviewVisible && <Overview>{row.overview}</Overview>}
      <VoteAverage>{row.vote_average}</VoteAverage>
    </Movie>
  );
};

export default MovieComponent;
