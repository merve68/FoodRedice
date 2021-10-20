import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,Image,
    ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CustomButton } from '../components';
import {COLORS, FONTS, images, SIZES} from "../constants"

const Login = ({ navigation }) => {

    function renderHeader(){
        return(
            <View style={{
                height:SIZES.height < 700 ? SIZES.height *0.6 : SIZES.height*0.7
            }}>
                <ImageBackground
                source={images.loginBackground}
                resizeMode="cover"
                style={{
                    flex:1,
                    justifyContent:"flex-end",
                    
                    
                }}
                >
                <LinearGradient
                start={{x:0,y:0}}
                end={{x:0,y:1}}
                colors={[
                    "transparent" , "#000"
                ]}
                style={{
                    width:"100%",
                   height:200,
                    justifyContent:"flex-end",
                    
                    alignItems:"center"
                }}
                >
                    <Text 
                    style={{
                        width:"80%",
                        color:COLORS.white,
                        ...FONTS.largeTitle,
                        lineHeight:40
                    }}
                    >Cooking a Delicious Food Easliy</Text>

                </LinearGradient>
                </ImageBackground>

            </View>
        )
    }
function renderDetail(){
    return(
        <View style={{
            flex:1,
            paddingHorizontal:SIZES.padding
        }}>
            <Text style={{
                marginTop:SIZES.radius,
                color:COLORS.gray,
                width:"60%",
                ...FONTS.body3
            }}>
                Discover more than 1200 food recipes in your hands and cooking it easliy
            </Text>

            <CustomButton
            buttonContainerStyle={{
                paddingVertical:18,borderRadius:20,
                marginTop:SIZES.radius
            }}
            buttonText="Login"
            colors={[COLORS.darkGreen,COLORS.lime]}
            onPress={()=>navigation.navigate("First")}
            />

<CustomButton
            buttonText="Sign Up"
            colors={[]}
            buttonContainerStyle={{
                paddingVertical:18,borderRadius:20,
                marginTop:SIZES.radius,
                borderColor:COLORS.darkLime,
                borderWidth:1
            }}
            onPress={()=>navigation.navigate("Register")}
            />

        </View>
    )
}
    return (
        <View
           style={{flex:1,
        backgroundColor:COLORS.black
        }}
        
        >
                <StatusBar
        animated={true}
        backgroundColor="black"


        />
            
            {renderHeader()}
            {renderDetail()}
            
        </View>
    )
}

export default Login;