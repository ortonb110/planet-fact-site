import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import style from "../../Styles/styles";

export default function NavigationBar(props) {
    

    return(
        <nav className="flex justify-between md:flex-col lg:flex-row border-b-[1px] border-[#979797] px-[2.4rem] md:px-[3.2rem] items-center ">
            
            <h2 className="text-[2.8rem] uppercase ">the planets</h2>
            <div className="">
            <Hamburger menuIsOpen={props.menuIsOpen} setMenu={props.setMenu}/>
            <ul className={`${props.menuIsOpen? "left-[0] " : ""} px-[4.4rem] md:px-0 gap-[20px] md:gap-[33px] uppercase ${style.transition} ${style.navMobile} ${style.navDesktop} flex flex-col md:flex-row md:left-0 md:static fixed left-[-100%] md:translate-x-0 md:flex md:w-fit md:h-fit w-screen bg-primary h-screen text-[1.5rem] md:text-[1.1rem]`}>
                <li onClick={props.setMenu}><Link to={"/"}><h4 className="items-center  flex  pt-[4.4rem]  md:pt-0 md:opacity-[0.5] pb-[15px]  md:pb-0  border-b md:border-b-0 border-[#979797] md:hover:border-t-2 md:border-lightBlue  transition-all ease-in-out duration-100"><span className="md:hidden inline-block rounded-full w-[2rem] h-[2rem] bg-[#979797] mr-[2.5rem]"></span> mercury</h4></Link></li>
                <li onClick={props.setMenu}><Link to={"/venus"}><h4 className="items-center  flex md:opacity-[0.5] pb-[15px] md:pb-0  border-b md:border-b-0 border-[#979797] md:hover:border-t-2 md:border-lightBlue  transition-all ease-in-out duration-100"><span className="md:hidden inline-block rounded-full w-[2rem] h-[2rem] bg-[#F7CC7F] mr-[2.5rem]"></span> venus</h4></Link></li>
                <li onClick={props.setMenu}><Link to={"/earth"}><h4 className="items-center  flex md:opacity-[0.5] pb-[15px] md:pb-0  border-b md:border-b-0 border-[#979797] md:hover:border-t-2 md:border-lightBlue  transition-all ease-in-out duration-100"><span className="md:hidden inline-block rounded-full w-[2rem] h-[2rem] bg-[#545BFE] mr-[2.5rem]"></span> earth</h4></Link></li>
                <li onClick={props.setMenu}><Link to={"/mars"}><h4 className="items-center  flex md:opacity-[0.5] pb-[15px] md:pb-0  border-b md:border-b-0 border-[#979797] md:hover:border-t-2 md:border-lightBlue  transition-all ease-in-out duration-100"><span className="md:hidden inline-block rounded-full w-[2rem] h-[2rem] bg-[#FF6A45] mr-[2.5rem]"></span> mars</h4></Link></li>
                <li onClick={props.setMenu}><Link to={"/jupiter"}><h4 className="items-center  flex md:opacity-[0.5] pb-[15px] md:pb-0  border-b md:border-b-0 border-[#979797] md:hover:border-t-2 md:border-lightBlue  transition-all ease-in-out duration-100"><span className="md:hidden inline-block rounded-full w-[2rem] h-[2rem] bg-[#ECAD7A] mr-[2.5rem]"></span> jupiter</h4></Link></li>
                <li onClick={props.setMenu}><Link to={"/saturn"}><h4 className="items-center  flex md:opacity-[0.5] pb-[15px] md:pb-0  border-b md:border-b-0 border-[#979797] md:hover:border-t-2 md:border-lightBlue  transition-all ease-in-out duration-100"><span className="md:hidden inline-block rounded-full w-[2rem] h-[2rem] bg-[#FCCB6B] mr-[2.5rem]"></span> saturn</h4></Link></li>
                <li onClick={props.setMenu}><Link to={"/uranus"}><h4 className="items-center  flex md:opacity-[0.5] pb-[15px] md:pb-0  border-b md:border-b-0 border-[#979797] md:hover:border-t-2 md:border-lightBlue  transition-all ease-in-out duration-100"><span className="md:hidden inline-block rounded-full w-[2rem] h-[2rem] bg-[#65F0D5] mr-[2.5rem]"></span> uranus</h4></Link></li>
                <li onClick={props.setMenu}><Link to={"/neptune"}><h4 className="items-center  flex md:opacity-[0.5] pb-[15px] md:pb-0  border-b md:border-b-0 border-[#979797] md:hover:border-t-2 md:border-lightBlue  transition-all ease-in-out duration-100"><span className="md:hidden inline-block rounded-full w-[2rem] h-[2rem] bg-[#497EFA] mr-[2.5rem]"></span> neptune</h4></Link></li>
                
            </ul>
            </div>
        </nav>
    )
}