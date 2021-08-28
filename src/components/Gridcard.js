import React, { Component } from "react";
import {motion} from "framer-motion";

export default class Gridcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverlay: false,
    };
    this.handleOverlayOver = this.handleOverlayOver.bind(this);
    this.handleOverlayDown = this.handleOverlayDown.bind(this);
  }
  handleOverlayOver() {
    this.setState((prevState) => {
      return {
        isOverlay: !prevState.isOverlay,
      };
    });
  }
  handleOverlayDown() {
    this.setState((prevState) => {
      return {
        isOverlay: !prevState.isOverlay,
      };
    });
  }
  render() {
      
    return (
      <div
        className="overflow-hidden rounded-md"
        onMouseOver={this.handleOverlayOver}
        onMouseOut={this.handleOverlayDown}
      >
        <img src={this.props.item.url} />
        {
            this.state.isOverlay &&
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.1}}} className="absolute -mt-20 px-2 transition gradient-t-top bg-white py-2">
                <h1 className="text-black font-bold text-sm " >{this.props.item.name}</h1>
                <h1 className="text-black font-semibold text-sm uppercase">{this.props.item.designation}</h1>
            </motion.div>
        }
      </div>
    );
  }
}
