import { Fragment } from "react";
import Hamburger from "./Hamburger";

export default function NavigationBar(props) {
    return(
        <nav className="flex justify-between md:flex-col lg:flex-row border-b-[1px] border-[#979797] px-[3.2rem] items-center ">
            <h2 className="text-[2.8rem] uppercase ">the planets</h2>
            <div>
            <Hamburger menuIsOpen={props.menuIsOpen} setMenu={props.setMenu}/>
            <ul className=" gap-[33px] uppercase opacity-[0.5] hidden md:visible md:flex">
                <li> <h4>mercury</h4> </li>
                <li> <h4>venus</h4> </li>
                <li> <h4>earth</h4> </li>
                <li> <h4>mars</h4> </li>
                <li> <h4>jupiter</h4> </li>
                <li> <h4>saturn</h4> </li>
                <li> <h4>uranus</h4> </li>
                <li> <h4>neptune</h4> </li>
            </ul>
            </div>
        </nav>
    )
}