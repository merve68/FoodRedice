import React from "react";
import {View,TouchableOpacity, Text,Image} from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";


const CategoryCard =({containerStyle, categoryItem,onPress}) =>{
    return(
    <View>
        <TouchableOpacity style={{
            flexDirection:"row",
            alignItems:"center",
            padding:10,
            marginTop:10,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.gray2,
            ...containerStyle
        }} onPress={onPress}>
            <Image source={categoryItem.image}
            resizeMode= "cover"
            style={{
                height:100,
                width:100,
                borderRadius:SIZES.radius
            }}
            />

            <View style={{
                paddingHorizontal:20,
                width:"65%"
            }}>
                <Text style={{
                    color:COLORS.black,
                    flex:1,
                    ...FONTS.h2
                }}>{categoryItem.name}</Text>
                <Text syle={{
                    color:COLORS.gray,
                    ...FONTS.body4
                }}>
                    {categoryItem.duration} | {categoryItem.serving} Serving
                </Text>

            </View>
        </TouchableOpacity>
    </View>
    )
}

export default CategoryCard;