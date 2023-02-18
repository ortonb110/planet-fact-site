import { Fragment, } from "react"

export default function Hamburger(props) {
    

    return (
        <Fragment >
            <button 
                aria-controls="menu"
                className={`  flex gap-[4px] flex-col ${props.menuIsOpen? "opacity-[0.5] transition-all ease-in-out duration-300" : "opacity-[100] transition-all ease-in-out duration-300"} md:hidden`}
                onClick={props.setMenu}
            >
                <span className="sr-only">Open menu</span>
                <span className={`w-[24px] h-[3px] block bg-white `}></span>
                <span className={`w-[24px] h-[3px] block bg-white ${props.menuIsOpen? "translate-x-[10px] transition-all ease-in-out duration-300" : "translate-x-0 transition-all ease-in-out duration-300"}`}></span>
                <span className={`w-[24px] h-[3px] block bg-white`}></span>
                
            </button>
        </Fragment>
    )
}