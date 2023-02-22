import linkIcon from '../../assets/icon-source.svg'
import { Link } from 'react-router-dom'

export default function Main(props) {
    return(
        <main>
            <div className="grid grid-cols-5 h-[65vh] mb-[8.7rem]">
                <img src={props.image} alt="Hello" className='mx-auto my-auto col-span-3'/>
                <div className='w-[35rem] mt-[6rem] col-span-2 '>
                    <div>
                        <h1 className='text-[8rem] mb-[2.3rem] uppercase'>{props.data.name}</h1>
                        <p className='font-normal mb-[2.4rem] text-[1.9rem]'>{props.data.overview.content}</p>
                        <div className='flex gap-1 mb-[3.9rem]'><span className='flex'>Source: </span><a href={props.data.overview.source }  target="_blank" rel='noreferrer'>Wikipedia <img src={linkIcon} alt=""  className='inline-block ml-[8px]'/></a></div>
                    </div>
                    <div>
                        <button className={`btn gap-4 flex px-[2.8rem] bg-[#419EBB]`}><span className='hidden md:inline-block font-bold text-[1.2rem] opacity-[0.5]'>01</span>overview</button>
                        <button className={`btn gap-4 flex px-[2.8rem] bg-primaryLight`}><span className='hidden md:inline-block font-bold text-[1.2rem] opacity-[0.5]'>02</span>internal structure</button>
                        <button className={`btn gap-4 flex px-[2.8rem] bg-inherit`}><span className='hidden md:inline-block font-bold text-[1.2rem] opacity-[0.5]'>03</span>surface geology</button>
                        
                    </div>
                </div>
            </div>
            <footer className='flex gap-[3rem] justify-center'>
                <div className='border-[1px] border-primaryLight py-[2rem] px-[2.3rem] font-bold w-[25.5rem] h-[12.8rem]'>
                    <p className='uppercase text-[1.1rem] text-primaryLight mb-[0.4rem]'>rotation time</p>
                    <p className='text-[4rem] tracking-[-1.5px] uppercase font-antonio'>{props.data.rotation}</p>
                </div>
                <div className='border-[1px] border-primaryLight py-[2rem] px-[2.3rem] font-bold w-[25.5rem] h-[12.8rem]'>
                    <p className='uppercase text-[1.1rem] text-primaryLight mb-[0.4rem]'>rotation revolution</p>
                    <p className='text-[4rem] tracking-[-1.5px] uppercase font-antonio'>{props.data.revolution}</p>
                </div>
                <div className='border-[1px] border-primaryLight py-[2rem] px-[2.3rem] font-bold w-[25.5rem] h-[12.8rem]'>
                    <p className='uppercase text-[1.1rem] text-primaryLight mb-[0.4rem]'>rotation radius</p>
                    <p className='text-[4rem] tracking-[-1.5px] uppercase font-antonio'>{props.data.radius}</p>
                </div>
                <div className='border-[1px] border-primaryLight py-[2rem] px-[2.3rem] font-bold w-[25.5rem] h-[12.8rem]'>
                    <p className='uppercase text-[1.1rem] text-primaryLight mb-[0.4rem]'>rotation temp</p>
                    <p className='text-[4rem] tracking-[-1.5px] uppercase font-antonio'>{props.data.temperature}</p>
                </div>
                {/* <div>
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
                </div> */}
            </footer>
        </main>
    )
}