import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native"
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "bd3bb9c238f822b8ac4cfebe0bb3ba70"

export default class extends React.Component{
  state = {
    isLoading : true
  }
  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(
      // ` <- 백틱을 사용한다
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      this.setState({isLoading:false, temp: data.main.temp})
  }
  getLocation = async() =>{
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)}></Weather>;
  }
}



// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Zmzmzm</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // 기본적으로 flex direction이 row가 아닌 column이다.
//     // flex값에 따라 화면에서 비율을 차지한다.
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// app.json은 expo가 읽기 위한 파일이다.