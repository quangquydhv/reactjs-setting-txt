import React, { Component } from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import SizeSetting from './component/SizeSetting';
import Reset from './component/Reset';
import Result from './component/Result';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    }
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
    
  }
  onSetColor(params) {
    this.setState({
      color: params
    })
  }
  onChangeSize(value) {
    console.log(value);
    //8<= size <= 36
    this.setState({
      fontSize: this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36 ? this.state.fontSize + value : this.state.fontSize//+2 -2
    })
  }
  onSettingDefault(value){
    this.setState({
      color: 'red',
      fontSize: 12
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
        </div>
        <div className="row">
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>





    );
  }
}

export default App;
