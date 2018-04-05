import 'react-rangeslider/lib/index.css'
import './sliders.css'

import React, { Component } from 'react';

import Slider from 'react-rangeslider';

export default class MacroSliders extends Component{  
    render(){
      let {proteinConsumption, carbConsumption, fatConsumption} = this.props;
      return(
        <div>
          <div style={{display: "inline-block"}} className="protein-slider">
            <Slider
              orientation='vertical'
              value={proteinConsumption}
              onChange={this.props.updateProteinConsumption}
              tooltip={false}/>
          </div>
          <div style={{display: "inline-block"}} className="carb-slider">
            <Slider
              orientation='vertical'
              value={carbConsumption}
              onChange={this.props.updateCarbConsumption}
              tooltip={false}/>
          </div>
          <div style={{display: "inline-block"}} className="fat-slider">
            <Slider
              orientation='vertical'
              value={fatConsumption}
              onChange={this.props.updateFatConsumption}
              tooltip={false}/>
          </div>
        </div>
      )
    }
}
