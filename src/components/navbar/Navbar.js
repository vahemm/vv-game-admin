import React from "react";
import {NavLink} from "react-router-dom"
import n from "./Navbar.module.css"

export const Navbar = () => {
    return <div className={n.nav}>
        <div className="row">
            <div className="col-lg-10">
                <div className="nav flex-column nav-pills" aria-orientation="vertical">
                    <NavLink className="nav-link " data-toggle="pill" to="profile"
                             aria-controls="v-pills-home" aria-selected="true">Profile </NavLink>
                    <NavLink className="nav-link" data-toggle="pill" to="newquestion"
                             aria-controls="v-pills-profile" aria-selected="false">New question</NavLink>
                    <NavLink className="nav-link" data-toggle="pill" to="questionslist"
                             aria-controls="v-pills-messages" aria-selected="false">Questions list</NavLink>
                    <NavLink className="nav-link" data-toggle="pill" to="about"
                             aria-controls="v-pills-settings" aria-selected="false">About</NavLink>
                </div>
            </div>
        </div>
    </div>

}
