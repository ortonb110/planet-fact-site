import { Fragment } from "react"
import Main from "../Components/Main/Main"
import data from '../data.json';
import image from '../assets/planet-mercury.svg';

export default function Mercury() {
    return (
        <Fragment>
            <Main data={data[0]} image={image}/>
        </Fragment>
    )
}