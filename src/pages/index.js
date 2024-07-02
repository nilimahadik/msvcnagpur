import React, { useEffect, useState } from 'react';
import BecomeVolunteer from '@/components/BecomeVolunteer/BecomeVolunteer';
import BrandOne from '@/components/BrandOne/BrandOne';
import Charity from '@/components/Charity/Charity';
import Counters from '@/components/Counters/Counters';
import GalleryOne from '@/components/GalleryOne/GalleryOne';
import HelpingOne from '@/components/HelpingOne/HelpingOne';
import HelpThem from '@/components/HelpThem/HelpThem';
import JoinOne from '@/components/JoinOne/JoinOne';
import Layout from '@/components/Layout/Layout';
import MainSlider from '@/components/MainSlider/MainSlider';
import NewsOne from '@/components/NewsOne/NewsOne';
import TeamOne from '@/components/TeamOne/TeamOne';
import TestimonialOne from '@/components/TestimonialOne/TestimonialOne';
import ThreeBoxes from '@/components/ThreeBoxes/ThreeBoxes';

const Home = () => {
  

  return (
    <Layout pageTitle="Home One">
      
      <MainSlider  />
      <Charity />
      <Counters className="about-page-counter"  />
      <TeamOne />
      <JoinOne />
      <ThreeBoxes  />
      <br/>
      <br/>
      <GalleryOne />
    
      <NewsOne  />
    </Layout>
  );
};



export default Home;
