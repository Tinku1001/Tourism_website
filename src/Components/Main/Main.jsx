import React,{useEffect} from 'react'
import './main.css'
import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
// import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'




const Data=[ 
  {
    id:1,
    imgSrc:img,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventourous acctivities.'
  },

  {
    id:2,
    imgSrc:img2,
    destTitle:'Machu Pichhu',
    location:'peru',
    grade:'CULTURAL RELAX',
    fees:'$600',
    description:'Hauyan Pichhu is a mountain i  peru, risting pichhu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
  },

  {
    id:3,
    imgSrc:img3,
    destTitle:'Great barrier Reef',
    location:'Australis',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'One of the most remarkable Australian natural gifts is the Great barrier Reef.The hallmark of this place is "lavish" and "beauty" .Always interesting to be in this place.'
  },

  // {
  //   id:4,
  //   imgSrc:img4,
  //   destTitle:'Cappadocia',
  //   location:'Turkey',
  //   grade:'CULTURAL RELAX',
  //   fees:'$800',
  //   description:'According to the world Tourism Ranking, 4 Million people visit Turkey each year, and from that 2 million come to visit Cappadocia. This place is known for its luxurious stays and adeventurous activities.'
  // },

  {
    id:5,
    imgSrc:img5,
    destTitle:'Gunajuato',
    location:'Mexico',
    grade:'CULTURAL RELAX',
    fees:'$1100',
    description:'A city in central Mexico, gunajuato is known for its history of silver mining and colonial architecture. This houses in the city are very attractively painted with the most bright colors available. Always welcome.'
  },

  {
    id:6,
    imgSrc:img6,
    destTitle:'Cinque Terre',
    location:'Italy',
    grade:'CULTURAL RELAX',
    fees:'$840',
    description:'Te vibrant hues of the houses are its bechmark and explain the beauty of this place. Also, if you are a foodie and love seafiid , you will be exhilarated with the choice you are about to get here. happy exploring great food! '
  },

  // {
  //   id:7,
  //   imgSrc:img7,
  //   destTitle:'Angkor wat',
  //   location:'Combodia',
  //   grade:'CULTURAL RELAX',
  //   fees:'$790',
  //   description:'Angot wat represent the entire range of khmer art from 9th to the 15th century. This temple is considered the heart and soul of combodia. This place is known for its luxurious style and adventourous activities. '
  // },

  // {
  //   id:8,
  //   imgSrc:img8,
  //   destTitle:'The Taj Mahal',
  //   location:'India',
  //   grade:'CULTURAL RELAX',
  //   fees:'$900',
  //   description:'An immense mausoleum of the white marble, built-in Agra by mughal emperor Shah Jahan in memory of his wife Mumtaj, the monument is breathtakingly beautiful. The place is known for its luxurious stays and adventurous activities.'
  // },

  // {
  //   id:9,
  //   imgSrc:img9,
  //   destTitle:'Bali Island',
  //   location:'Indonesia',
  //   grade:'CULTURAL RELAX',
  //   fees:'$500',
  //   description:'ball is an indonesia Island and one of thr best holiday destination in thr indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples, and beutiful sandy beaches.'
  // },
]

const Main = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
        Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        { 
          // here we are going to use high order array method to do waht we hall use a list of object in one array . i am going to create an array named and from that we shall .map() array to fetch each destination at once. i hope this will make sense to you!
        }
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">

              <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className='continent flex'>
                <HiOutlineLocationMarker className='icon'/>

                <span className="name">{location}</span> 
                </span>

                <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>

                <div className="price">
                <h5>{fees}</h5>
                </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">DETAILS <FaClipboardCheck className="icon" />
                </button>

              </div>

              </div>
            )
          })
        }


      </div>
    
    </section>
  )
}

export default Main
