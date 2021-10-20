import { View ,TouchableOpacity, Text,Image} from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';


const TrendingCard =({containerStyle,recipeItem,onPress,navigation}) =>{
    return(
        <TouchableOpacity style={{
            height:350,
            width:250,
            marginTop:SIZES.radius,
            marginRight:20,
            borderRadius:SIZES.radius,
            ...containerStyle
        }} onPress={onPress}
        >
         <Image source={recipeItem.image} resizeMode="cover" style={{
             height:350,
             width:250,
             borderRadius:SIZES.radius,
             marginHorizontal:SIZES.padding
         }} />   
         <View style={{
             position:"absolute",
             paddingHorizontal:SIZES.radius,
             
             top:20,
             left:35,
             paddingVertical:5,
             backgroundColor:COLORS.transparentGray,
             borderRadius:SIZES.radius
         }}>
             <Text style={{
                 color:COLORS.white,
                 ...FONTS.h4
             }}>{recipeItem.category}</Text>

         </View>
        </TouchableOpacity>
    )
}
export default TrendingCard;
