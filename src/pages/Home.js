import React, { Component } from "react";
import CommitteeHeadQuotes from "../components/CommitteeHeadQuote";
import Header from "../components/Header";
import Quote from "../components/Quote";
import QuoteCard from "../components/QuoteCard";
import ThriveIcon from "../components/ThriveIcon";
import { quoteData } from "../datafactory/quoteData.json";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quote/>
        {/* <CommitteeHeadQuotes/> */}
        </div>
    );
  }
}
