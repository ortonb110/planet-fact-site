import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function NavigationBar(props) {
    

    return(
        <nav className="flex justify-between md:flex-col lg:flex-row border-b-[1px] border-[#979797] px-[3.2rem] items-center ">
            
            <h2 className="text-[2.8rem] uppercase ">the planets</h2>
            <div className="">
            <Hamburger menuIsOpen={props.menuIsOpen} setMenu={props.setMenu}/>
            <ul className={`${props.menuIsOpen? "left-0" : ""} gap-[33px] uppercase opacity-[0.5]  flex flex-col md:flex-row md:left-0 md:static fixed left-[-100%] md:translate-x-0 md:flex md:w-fit md:h-fit w-screen bg-red-500 h-screen`}>
                <li><Link to={"/"}><h4>mercury</h4></Link></li>
                <li><Link to={"/venus"}><h4>venus</h4></Link></li>
                <li><Link to={"/earth"}><h4>earth</h4></Link></li>
                <li> <Link to={"/mars"}><h4>mars</h4></Link> </li>
                <li> <Link to={"/jupiter"}><h4>jupiter</h4></Link> </li>
                <li><Link to={"/saturn"}><h4>saturn</h4></Link></li>
                <li><Link to={"/uranus"}><h4>uranus</h4></Link> </li>
                <li> <Link to={"/neptune"}><h4>neptune</h4></Link> </li>
            </ul>
            </div>
        </nav>
    )
}