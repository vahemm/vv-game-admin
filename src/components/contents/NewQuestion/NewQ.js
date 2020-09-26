import React from "react";
import { GameType } from "./GameType";
import nq from "./NewQ.module.css";

export const NewQ = () => {
  return (
    <form>
      <div className={nq.questiontext}>
        <label htmlFor="newquestion">Write the new question</label>
        <textarea className="form-control" id="newquestion"></textarea>
      </div>

      <div className="row ">
        <GameType />
        <div className="col px-md-5">
          <label htmlFor="gamecomplexity">Question complexity:</label>
          <select className="form-control" id="gamecomplexity">
            <option>select the option</option>
            <option>easy</option>
            <option>medium</option>
            <option>complex</option>
          </select>
        </div>
      </div>
      <div className={nq.btn}>
        <input className="btn btn-primary" type="submit" value="Add question" />
      </div>
    </form>
  );
};
