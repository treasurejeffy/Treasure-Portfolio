import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom" ;
import Home from '../src/Home/Home';
import AboutMe from '../src/Home/AboutMe/AboutMe';
import ContactMe from "./Home/contactMe/contactMe";

export default function RouterSwitch() {
    

    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/AboutMe" element={<AboutMe/>}/>
                    <Route path="/contactMe" element={<ContactMe/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}