import React from "react";
import {View,Text, TouchableOpacity, ImageBackground,StatusBar,Image} from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import LinearGradient from "react-native-linear-gradient";
import { TextInput } from "react-native-gesture-handler";


const First = ({navigation}) =>{
    function renderHeader(){
        return(
            <View style={{
                height:SIZES.height > 700 ? "65%" : "35%"
            }}>
                <ImageBackground style={{
                    flex:1,
                    justifyContent:"flex-end"
                }}
                resizeMode="cover"
                source={images.Login2}
                >
                    <TouchableOpacity style={{
                        height:40,
                        width:40,
                        alignItems:"center",
                        

                        justifyContent:"center"
                    }}onPress={()=>navigation.goBack()}>
                        <Image source={icons.goBack} style={{
                            height:20,
                            width:20,
                            tintColor:"white"
                        }} />
                        </TouchableOpacity>
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
                    <Text style={{
                        color:COLORS.white,
                        ...FONTS.h1,
                        
                    }}>Welcome!</Text>
                </LinearGradient>

                </ImageBackground>

            </View>
        )
    }
    function renderTextInput(){
        return(
            <View style={{
                marginTop:SIZES.padding
            }}>
                <View style={{
                    marginTop:SIZES.padding
                }}>
                    <Text style={{
                        color:COLORS.gray2,...FONTS.body5,marginLeft:10
                    }}>Full Name</Text>
                    <TextInput style={{
                        borderBottomWidth:1,
                        borderBottomColor:"white",
                        height:40,
                        marginVertical:SIZES.padding,
                        
                    }} 
                    placeholder="Enter Full Name"
                    placeholderTextColor={COLORS.gray}
                    selectionColor={COLORS.white}
                     />

                </View>
                <View style={{
                    marginTop:SIZES.padding
                }}>
                    <Text style={{
                        color:COLORS.gray2
                    }}>Password</Text>
                    <TextInput style={{
                        borderBottomColor:"white",
                        borderBottomWidth:1,
                        marginVertical:SIZES.padding,
                        height:40
                    }} placeholder="Enter Password"
                    placeholderTextColor={COLORS.gray}
                    selectionColor={COLORS.white}
                    >
                     

                    </TextInput>

                </View>

            </View>
        )
    }
    function renderButton(){
        return(
            <View style={{
                marginTop:SIZES.padding
            }}>
                <TouchableOpacity style={{
                    height:60,
                    borderRadius:25,
                    borderColor:"white",
                    backgroundColor:COLORS.darkGreen,
                    alignItems:"center",
                    justifyContent:"center"
                }} onPress={()=>navigation.navigate("Home")}>
                    <Text style={{
                        color:COLORS.black,
                        ...FONTS.h3
                   
                    }}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <View style={{
            flex:1,
            backgroundColor:"black"
        }}> 
         <StatusBar
        animated={true}
        backgroundColor="black"


        />
            {renderHeader()}
            {renderTextInput()}
            {renderButton()}
            
            
        </View>
    )
}

export default First;