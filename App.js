import axios from 'axios';
import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import ItemList from './src/Component/ItemsList';


export default class App extends Component {
   constructor(props){
     super(props)
     this.state = {
      isLoading:true,
     data:'',
     page:1
    };
    console.disableYellowBox=true
   }
   componentDidMount(){
     this.makeRequest()
   }
   makeRequest = ()=>{
     axios.get(`https://api.instantwebtools.net/v1/passenger?page=0&size=${this.state.page}`)
     .then(res=>{
       this.setState({
         data:res.data.data
       })
     
     })
   }

   spaceView=()=>{
     return(
       <View style={{height:25}}>
       </View>
     )
   }
   LoadMoreItems =()=>{
     const{page}=this.state
     
    this.setState({
     page:page+1
   },()=>{
    this.makeRequest();
   })
   }

   renderFooter =()=>{
     if(this.state.isLoading){
   return(
   <View>
     <ActivityIndicator  size='large'color='green' />
   </View>)
    
   }else {
    return <></>;
  }
  }
  


  render() {
    const {data}=this.state;
  
    return (
      <View>
       <FlatList 
       data={data}
       showsVerticalScrollIndicator={false}
       keyExtractor = {(item)=> item.id}
       onEndReached={this.LoadMoreItems}
       ListFooterComponent={this.renderFooter}
       ItemSeparatorComponent={this.spaceView}
       onEndReachedThreshold={200}
       renderItem = {({item,index})=>{
         return(
          <ItemList data={item} />
         )
       }}
       
       
       
       />
      </View>
    );
  }
}
