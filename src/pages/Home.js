import React, { Component } from "react";
import AboutDIT from "../components/AboutDIT";
import AboutUs from "../components/AboutUs";
import CommitteeHeadQuotes from "../components/CommitteeHeadQuote";
import Header from "../components/Header";
import Quote from "../components/Quote";
import QuoteCard from "../components/QuoteCard";
import Testimonies from "../components/Testimonies";
import ThriveIcon from "../components/ThriveIcon";
import VideoContent from "../components/VideoContent";
<<<<<<< HEAD
import Testimonies from "../components/Testimonies";

=======
>>>>>>> 878a62477d642d9422093ddfa61cd2b04f90c00c
import { quoteData } from "../datafactory/quoteData.json";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quote/>
        <VideoContent/>
<<<<<<< HEAD
=======
        <AboutUs/>
        <AboutDIT/>
>>>>>>> 878a62477d642d9422093ddfa61cd2b04f90c00c
        <Testimonies/>
        {/* <CommitteeHeadQuotes/> */}
        </div>
    );
  }
}
