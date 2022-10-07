import React from "react";
import Swiper from "react-native-swiper";
import { View, StyleSheet } from "react-native";
import {SlideItem1,SlideItem2,SlideItem3} from "./sliderItem";

const Slider = () => {
  return (
    <Swiper autoplay={true}  autoplayTimeout={4} style={styles.wrapper} showsButtons={false}>
      <SlideItem1 />
      <SlideItem2 />
      <SlideItem3 />
    </Swiper>
  );
};
const styles = StyleSheet.create({
    wrapper:{
        height:140
    }
});
export default Slider;
