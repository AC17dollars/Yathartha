import { _EventDetails } from '../assets/data/Yathartha';
import Logo from "../assets/logo.jpg";
import Stats from '../components/stats';

const About : React.FC = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-evenly items-center bg-theme-black-alt w-[100%]">
        <div className="flex flex-col w-[100%] justify-evenly items-center">
            <h1 className="text-theme text-4xl font-bold">{"About " + _EventDetails.name + " TechFest"} </h1>
            <hr className="w-[20rem] border-2 border-theme-green rounded-xl m-8"/>
        </div>
        <div className="flex flex-row justify-evenly items-center w-[100%]">
            <p className="text-theme-white w-[30%] text-justify">{_EventDetails.about}</p>
            <div className="w-[25rem] h-[25rem] m-2 bg-theme-white rounded-xl overflow-hidden"><img src={Logo} className="h-[100%]" /></div>
        </div>
        <div className="flex flex-col w-[100%]">
            <Stats/>
        </div>
    </section>
  )
}

export default About