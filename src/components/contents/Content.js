import React from "react";
import {Route} from "react-router-dom"
import {About} from "./About";
import c from "./Content.module.css"
import {Profile} from "./Profile";
import {NewQ} from "./NewQ";
import {Qlist} from "./Qlist";

export const Content = () => {
    return <div className={c.content}>
        <Route path="/profile" render={() => <Profile/>}/>
        <Route path="/newquestion" render={() => <NewQ/>}/>
        <Route path="/questionslist" render={() => <Qlist/>}/>
        <Route path="/about" render={() => <About/>}/>


    </div>

}
