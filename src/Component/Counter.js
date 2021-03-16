import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import {increaseCount, decreaseCount} from '../actions';
import store from '../store';



class Counter extends Component {

   
  

  increment = ()=>{
    store.dispatch(increaseCount())
    // store.subscribe(() =>this.setState({ }) )
  }
  decriment = ()=>{
    store.dispatch(decreaseCount())
    // store.subscribe(() =>this.setState({ }) )
  }

  // componentDidMount(){
  s=  store.subscribe(() =>this.setState({ }) )
  // }
    

 
  render() {
    
    return (
      <View style={{marginVertical:10,marginHorizontal:10}}>
        <Button title="increaseCount" onPress={this.increment}></Button>
        <Text style={{textAlign:'center'}}>{store.getState().count}</Text>
        <Button title="decreaseCount" onPress={this.decriment}></Button>
      </View>
    );
  }
}
export default Counter;
