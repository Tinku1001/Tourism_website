import React,{useEffect} from 'react'
import './footer.css' 
import video from "../../Assets/video1.mp4"
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
          <small >KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
          </div>

          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder="Enter email address" />

            <button className="btn flex" type="submit">SEND
            <FiSend className="icon" />

            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
              <MdOutlineTravelExplore className="icon"/>Travel.</a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Travel and tourism offer exploration, adventure, and relaxation, enriching lives through cultural exchange and new experiences. They boost economies and foster global connections, providing a break from routine and a chance to see the world’s wonders.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter className='icon' />
            <AiFillYoutube className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon"/>        

            </div>
          </div>

          <div className="footerLinks grid">
            {/*Group One*/}

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
              <FiChevronRight className="icon" />Services
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />Insurance
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />Agency
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />Tourism
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />Payment
              </li>

            </div>
              {/*group two */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
              <FiChevronRight className="icon" />Bookings
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />RentCars
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />HostelWorld
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />Trivago
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />TripAdvisor
              </li>

            </div>

            {/*third*/}

            <div data-aos="fade-up" data-aos-duration="6000"  className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
              <FiChevronRight className="icon" />London
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />California
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />Indonesia
              </li>

              <li className="footerList flex">
              <FiChevronRight className="icon" />Europe
              </li>
 
              <li className="footerList flex">
              <FiChevronRight className="icon" />Oceania
              </li>

            </div>


          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - TK</small>
          </div>
        </div>
      </div>  

    </section>
  )
}

export default Footer
