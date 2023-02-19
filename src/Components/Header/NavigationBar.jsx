import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function NavigationBar(props) {
    

    return(
        <nav className="flex justify-between md:flex-col lg:flex-row border-b-[1px] border-[#979797] px-[2.4rem] md:px-[3.2rem] items-center ">
            
            <h2 className="text-[2.8rem] uppercase ">the planets</h2>
            <div className="">
            <Hamburger menuIsOpen={props.menuIsOpen} setMenu={props.setMenu}/>
            <ul className={`${props.menuIsOpen? "left-[0] " : ""}  gap-[33px] uppercase  transition-all ease-in-out duration-300 mt-[2.5rem] md:mt-0 flex flex-col md:flex-row md:left-0 md:static fixed left-[-100%] md:translate-x-0 md:flex md:w-fit md:h-fit w-screen bg-primary h-screen`}>
                <li><Link to={"/"}><h4 className="md:opacity-[0.5] border-b md:hover:border-t-2 md:border-lightBlue  transition-all ease-in-out duration-100">mercury</h4></Link></li>
                <li><Link to={"/venus"}><h4 className="md:opacity-[0.5] md:hover:border-t-2 md:border-lightBlue transition-all ease-in-out duration-100">venus</h4></Link></li>
                <li><Link to={"/earth"}><h4 className="md:opacity-[0.5] md:hover:border-t-2 md:border-lightBlue transition-all ease-in-out duration-100">earth</h4></Link></li>
                <li> <Link to={"/mars"}><h4 className="md:opacity-[0.5] md:hover:border-t-2 md:border-lightBlue transition-all ease-in-out duration-100">mars</h4></Link> </li>
                <li> <Link to={"/jupiter"}><h4 className="md:opacity-[0.5] md:hover:border-t-2 md:border-lightBlue transition-all ease-in-out duration-100">jupiter</h4></Link> </li>
                <li><Link to={"/saturn"}><h4 className="md:opacity-[0.5] md:hover:border-t-2 md:border-lightBlue transition-all ease-in-out duration-100">saturn</h4></Link></li>
                <li><Link to={"/uranus"}><h4 className="md:opacity-[0.5] md:hover:border-t-2 md:border-lightBlue transition-all ease-in-out duration-100">uranus</h4></Link> </li>
                <li> <Link to={"/neptune"}><h4 className="md:opacity-[0.5] md:hover:border-t-2 md:border-lightBlue transition-all ease-in-out duration-100">neptune</h4></Link> </li>
            </ul>
            </div>
        </nav>
    )
}