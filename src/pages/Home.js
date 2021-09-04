import React, { Component } from "react";
import AboutDIT from "../components/AboutDIT";
import AboutUs from "../components/AboutUs";
import CommitteeHeadQuotes from "../components/CommitteeHeadQuote";
import Header from "../components/Header";
import OurMission from "../components/OurMission";
import Quote from "../components/Quote";
import QuoteCard from "../components/QuoteCard";
import Testimonies from "../components/Testimonies";
import ThriveIcon from "../components/ThriveIcon";
import { quoteData } from "../datafactory/quoteData.json";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quote/>
        <OurMission/>
        <AboutUs/>
        <AboutDIT/>
        <Testimonies/>
        {/* <CommitteeHeadQuotes/> */}
        </div>
    );
  }
}
