import React, { Component } from 'react';

import MacroSliders from './MacroSliders'

class MacroCalculator extends Component {
    constructor(){
      super();
      this.state = {
        dailyCalorieConsumption: 3000,
        proteinPercentage: 33,
        carbsPercentage: 33,
        fatPercentage: 33,
        proteinConsumption: 0,
        carbConsumption: 0,
        fatConsumption: 0
      }
      this.updateDailyCalorieConsumption = this.updateDailyCalorieConsumption.bind(this);
      this.updateProteinConsumption = this.updateProteinConsumption.bind(this);
      this.updateCarbConsumption = this.updateCarbConsumption.bind(this);
      this.updateFatConsumption = this.updateFatConsumption.bind(this);
    }
  
    updateDailyCalorieConsumption(dailyCalorieConsumption){
      this.setState({
        dailyCalorieConsumption: dailyCalorieConsumption
      })
    }
  
    updateProteinConsumption = (value) => {
        let proteinConsumption = (this.state.dailyCalorieConsumption/100) * value;
        this.setState({
            proteinPercentage: value,
            proteinConsumption: proteinConsumption
        })
    }
  
    updateCarbConsumption = (value) => {
        let carbConsumption = (this.state.dailyCalorieConsumption/100) * value;        
        this.setState({
            carbsPercentage: value,
            carbConsumption: carbConsumption
        })
    }
  
    updateFatConsumption = (value) => {
        let fatConsumption = (this.state.dailyCalorieConsumption/100) * value;
        this.setState({
            fatPercentage: value,
            fatConsumption: fatConsumption
        })
    }
  
    render(){
      return(
        <div style={{marginLeft: 30}}>
            <div>
                <h1 style={{display:"inline-block"}}>I want to eat</h1>
                
                <input 
                    value={this.state.dailyCalorieConsumption}
                    onChange={(event) => this.updateDailyCalorieConsumption(event.target.value)} 
                    style={{marginLeft: 15, border: "none", borderBottom: "1px solid #000000", background:"transparent", outline: "none", fontFamily:"sans-serif", fontSize: "2em", width: 110, fontWeight:"bold"}}/>
    
                <h1 style={{display:"inline-block", marginLeft: 15}}>kcals</h1>
            </div>
            <div style={{display:"inline-block"}}>
                <MacroSliders
                    updateProteinConsumption={this.updateProteinConsumption}
                    updateCarbConsumption={this.updateCarbConsumption}
                    updateFatConsumption={this.updateFatConsumption}
                    proteinConsumption={this.state.proteinPercentage}
                    carbConsumption={this.state.carbsPercentage}
                    fatConsumption={this.state.fatPercentage}/>
            </div>
            <div style={{display:"inline-block", verticalAlign:"top", marginLeft:45}}>
                <MacroFigures
                    proteinCaloriePercentage={this.state.proteinPercentage}
                    carbCaloriePercentage={this.state.carbsPercentage}
                    fatCaloriePercentage={this.state.fatPercentage}
                    proteinConsumption={this.state.proteinConsumption}
                    carbConsumption={this.state.carbConsumption}
                    fatConsumption={this.state.fatConsumption}/>
            </div>
        </div>
      )
    }
}

class MacroFigures extends Component{
    totalUnder100 = () => {
        let total = this.props.proteinCaloriePercentage
            + this.carbCaloriePercentage
            + this.fatCaloriePercentage;

        if(total < 100){
            return true;
        }

        return false;
    }
    
    totalOver100 = () => {
        let total = this.props.proteinCaloriePercentage
            + this.carbCaloriePercentage
            + this.fatCaloriePercentage;

        if(total > 100){
            return true;
        }

        return false;
    }
    
    render(){
        return(
            <div>
                <h1 style={{margin:0, color:"#EC4D2A"}}>Protein: {this.props.proteinCaloriePercentage}% = {this.props.proteinConsumption}kcals</h1>
                <h1 style={{margin:0, color:"#366AF9"}}>Carb: {this.props.carbCaloriePercentage}% = {this.props.carbConsumption}kcals</h1>
                <h1 style={{margin:0, color:"#F9E436"}}>Fat: {this.props.fatCaloriePercentage}% = {this.props.fatConsumption}kcals</h1>                
            </div>
        )        
    }
}

export default MacroCalculator;