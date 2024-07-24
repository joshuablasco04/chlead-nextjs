import Image from "next/image";
import valves from '@/Assets/valve.png'
import electrical from '@/Assets/electrical-supplies.png'
import industrial from '@/Assets/industrial-supplies.png'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";


export default function Home() {

  return (
    <div>
      <div className="text-white grid md:grid-cols-3 gap-5 max-w-screen-xl m-auto my-10 text-xs md:text-base">
        <div className="grid grid-cols-3 bg-[#111111] mx-5 text-center p-5 justify-items-center md:grid-cols-1 place-items-center">
          <Image src={valves} className="bg-slate-100 md:w-[300px] md:h-[250px] w-[250px]"/>
          <h2 className="text-xl my-2">Valves</h2>
          <div>
            <p>Mechanical Devices that control the flow and pressure of liquids, gasses and slurries within a system.</p>
            <button className="bg-blue-900 w-auto rounded p-1 mt-2 hover:bg-blue-950 ">View Products</button>
          </div>
        </div>
        <div className="grid grid-cols-3 bg-[#111111] mx-5 text-center p-5 justify-items-center md:grid-cols-1 place-items-center">
          <Image src={electrical} className="bg-slate-100 md:w-[300px] md:h-[250px] w-[250px]"/>
          <h2 className="text-xl my-2">Electrical Supplies</h2>
          <div >
            <p>Condustors used to transmit electric energy and their necessary supporting or containing  structures.</p>
            <button className="bg-blue-900 w-w-auto rounded p-1 mt-2 hover:bg-blue-950">View Products</button>
          </div>
        </div>
        <div className="grid grid-cols-3 bg-[#111111] mx-5 text-center p-5 justify-items-center md:grid-cols-1 place-items-center">
          <Image src={industrial} className="bg-slate-100 md:w-[300px] md:h-[250px] w-[250px]" />
          <h2 className="text-xl my-2">Industrial Supplies</h2>
          <div>
            <p>Components, spare parts, accessories and equipments.</p>
            <button className="bg-blue-900 w-w-auto rounded p-1 mt-2 hover:bg-blue-950">View Products</button>
          </div>
        </div>
       
      </div>
       <div className='md:flex m-auto justify-around max-w-screen-xl text-white grid'>
          <div className=" bg-[#111111] my-10">
            <h2 className="text-center mt-2 text-3xl font-bold">Connect with us</h2>
            <form action="" className="text-black grid grid-cols-1 gap-2 p-1 m-5">
              <input type="text" placeholder="Your Name" className="p-1"/>
              <input type="email" placeholder="Your Email" className="p-1"/>
              <select name="" id="" className="border-2 p-1" >
                <option value="select">--Select Options--</option>
                <option value="concern">Concern</option>
                <option value="quote">Get a quote</option>
                <option value="others">Others</option>
              </select>
              <textarea name="" id="" cols="30" rows="10" placeholder="Type your message here..." className="p-1"></textarea>
              <button className="bg-blue-900 w-[200px] rounded p-1 mt-2 hover:bg-blue-950 text-white m-auto">Send message</button>
            </form>
          </div>
          <div className=" bg-[#111111] w-[350px] my-10 grid p-5">
            <div className=" grid grid-cols-2 h-52">
              <FaFacebook/><span className="-ml-32">https://www.facebook.com/chlead</span>
              <FaInstagram /><span className="-ml-32">@chleadphils</span>
              <FaTiktok /><span className="-ml-32">@chleadphils</span>
            </div>
            <div className="text-center"> 
              <h2 className="text-center mt-2 text-3xl font-bold">Careers</h2>
              <p>You can reach us at <span className="text-blue-500">hr@chlead.com</span></p>
            </div>
          </div>
        </div>
    </div>
  );
}
