import linkIcon from '../../assets/icon-source.svg'
import { Link } from 'react-router-dom'

export default function Main(props) {
    return(
        <main>
            <div className="grid grid-cols-2">
                <img src={props.image} alt="Hello"/>
                <div>
                    <div>
                        <h1>{props.data.name}</h1>
                        <p>{props.content}</p>
                        <span>Source: </span><a href={props.data.overview.source } target="_blank" rel='noreferrer'>Wikipedia <span><img src={linkIcon} alt="" /></span></a>
                    </div>
                    <div>
                        <button className={`btn gap-4 flex`}><span className='hidden md:inline-block font-normal text-[0.9rem] opacity-[0.5]'>01</span>overview</button>
                        <button className={`btn`}> <span>02</span>internal structure</button>
                        <button className={`btn`}><span>03</span> surface geology</button>
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <p>rotation time</p>
                    <p>{props.data.rotation}</p>
                </div>
                <div>
                    <p>revolution time</p>
                    <p>{props.data.revolution}</p>
                </div>
                <div>
                    <p>radius</p>
                    <p>{props.data.radius}</p>
                </div>
                <div>
                    <p>average temp.</p>
                    <p>{props.data.temperature}</p>
                </div>
            </footer>
        </main>
    )
}