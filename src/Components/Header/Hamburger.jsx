import { Fragment, } from "react"

export default function Hamburger(props) {
    

    return (
        <Fragment>
            <button 
                aria-controls="menu"
                className={`flex gap-[4px] flex-col ${props.menuOpen? "opacity-[0.5]" : "opacity-[100]"}`}
                onClick={props.menu}
            >
                <span className="sr-only">Open menu</span>
                <span className={`w-[24px] h-[3px] block bg-white `}></span>
                <span className={`w-[24px] h-[3px] block bg-white `}></span>
                <span className={`w-[24px] h-[3px] block bg-white`}></span>
                
            </button>
        </Fragment>
    )
}