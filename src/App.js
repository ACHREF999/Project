
import './App.css';
import House from './components/House';
import Header from './components/Header';
import Footer from './components/Footer';
import {useState} from 'react'
// import House from './components/House'
import MediumCard from './components/MediumCard'
import InfoCard from './components/InfoCard';
import SmallCard from './components/SmallCard';
import LargeCard from './components/LargeCard'



function App() {
  const [travelLightData ,setTraveLightData] = useState([1,2,3,4,5,6])
  const [cardsData ,setcardsData] = useState([1,2,3,4,5])
  return (
    <div className="">

 
    <div className="">

    
   <Header  />
   
     <div className='grid grid-cols-3 bg-white '>
      <div className='flex justify-center items-center'>

          <div className='my-auto'> 
            <p className='text-sm sm:text-lg text-[#141850] font-extrabold font-mono px-5 py-12'>ImoSpace , Biggest algerian platform for selling real estate, Where u can get all the information you need so u can find the </p>
            <button className='text-blue-800 bg-white px-10 py-4 rounded-full font-mono font-black text-xl shadow-md m-3 hover:shadow-2xl active:scale-[80%] transition duration-[350ms] pl-8'>Quick Look UP</button>
          </div>

        </div>
        <div className=' border-y-[24px] border-white shadow-4xl'>
      <House/>
      </div>
    </div>
    <main className=' mx-auto  px-8 sm:px-16 my-13 max-w-[90%] bg-white text-[#24216d] shadow-md py-16'>
      <section className='p-8'>
        <h2 className='text-4xl font-semibold pb-5 '> Travel Light</h2>
        <div className='relative grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          travelLightData?.map(item => (
            <SmallCard 
            key={item.img}
            img={item.img} 
            location={item.location} 
            distance = {item.distance} />
          ))
        }
        </div>


      </section>
        <section>
          <h2 className='text-4xl font-semibold py-10 '>Most common cities</h2>
          <div className='flex space-x-3 overflow-x-scroll  p-5 -ml-5 snap-x'>
            {
              cardsData?.map(item => (
                <MediumCard key = {item} img={item} title={item}/>
              ))
            }
          </div>
        </section>

        <section>
          <LargeCard />
        </section>


    </main>
    <div>
      <Footer />
    </div>
    <div className='relative top-0 hidden ${}'></div>
    </div>
  
    </div>
  );
}

export default App;
