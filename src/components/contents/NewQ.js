import React from "react";
import nq from "./NewQ.module.css"

export const NewQ = () => {
    return <form>
        <div className={nq.questiontext}>
            <label htmlFor="newquestion">
                Write the new question</label>
            <textarea className="form-control" id="newquestion"></textarea>
        </div>

        <div className="row ">

            <div className="col px-md-5">
                <label htmlFor="gametype">
                    Game type:</label>
                <select className="form-control" id="gametype">
                    <option>
                        select the option
                    </option>
                    <option>A game</option>
                    <option>B game</option>
                    <option>C game</option>
                </select>
            </div>

            <div className="col px-md-5">
                <label htmlFor="gamecomplexity">
                    Game complexity:</label>
                <select className="form-control" id="gamecomplexity">
                    <option>
                        select the option
                    </option>
                    <option>easy</option>
                    <option>medium</option>
                    <option>complex</option>
                </select>
            </div>
        </div>
        <div className={nq.btn}>
            <input className="btn btn-primary" type="submit" value="Add question"/>

        </div>
    </form>


}
