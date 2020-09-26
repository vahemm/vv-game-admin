import React from "react";

export const GameType = () => {
  return (
    <div className="col px-md-5">
      <label htmlFor="gametype">Game type:</label>
      <div className="form-control" id="gametype">
        <label for="one">
          <input id="one" type="checkbox" className="ml-3 mr-1" />A game
        </label>
        <label for="two">
          <input id="two" type="checkbox" className="ml-3 mr-1" />B game
        </label>
        <label for="tree">
          <input id="tree" type="checkbox" className="ml-3 mr-1" />C game
        </label>
      </div>
    </div>
  );
};
