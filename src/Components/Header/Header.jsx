import { Fragment, useState } from "react";
import NavigationBar from "./NavigationBar";

export default function Header () {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return(
        <Fragment>
            
            <NavigationBar menuIsOpen={menuIsOpen} setMenu={openMenu} />
        </Fragment>
    )
}