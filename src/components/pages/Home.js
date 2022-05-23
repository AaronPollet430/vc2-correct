import React, { Fragment } from 'react';
import TopListing from '../layout/TopListing';
import Searchbar from '../layout/Searchbar';
import DienstenHome from '../layout/DienstenHome';
import VerhuurderVragen from '../layout/home/VerhuurderVragen';
import Activiteiten from '../layout/home/Activiteiten';
import '../CSS/home/Home.css';
// import MediumCard from '../layout/MediumCard';
// import accommodatieData from '../../mock-data';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = ({ location }) => {
  return (
    <Fragment>
      <main className='home-main'>
        {/* section searchbar */}
        <section>
          <div className='container'>
            <Searchbar />
          </div>
        </section>
        {/* section toplisting */}
        <section>
          <div className='card-container'>
            <TopListing />
          </div>
        </section>
        {/* </FilterProvider> */}
        <section>
          <div className='activities-container'>
            <Activiteiten />
          </div>
        </section>
        {/* section diensten */}
        <section>
          <div className='container'>
            <DienstenHome />
          </div>
        </section>
        <section>
          <div className='verhuurder-vragen-container'>
            <VerhuurderVragen />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
