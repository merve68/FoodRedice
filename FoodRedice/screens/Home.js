import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,Image
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { CategoryCard, TrendingCard } from '../components';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from "../constants"

function renderHeader(){
    return(
        <View style={{
            marginHorizontal:SIZES.padding,
            height:80,flexDirection:"row",
            alignItems:"center"
        }}>
            {/* Header */}
            <View style={{
                flex:1,
                
            }}>
                <Text style={{
                    color:COLORS.darkGreen,
                    ...FONTS.h2
                }}>Hello Merve!</Text>
                <Text style={{
                    marginTop:3,
                    color:COLORS.gray,
                    ...FONTS.body3
                }}>What you want to cook today?</Text>

            </View>
            <TouchableOpacity onPress={()=>console.log("Profile")}>
                <Image source={images.profile} style={{
                    height:40,
                    width:40,
                    borderRadius:20
                }} />

            </TouchableOpacity>
            </View>
    )
}

function renderSerachBar(){
    return(
        <View style={{
            flexDirection:"row",
            alignItems:"center",
            marginHorizontal:SIZES.padding,
            paddingHorizontal:SIZES.radius,
            height:50,
            backgroundColor:COLORS.lightGray,
            borderRadius:10
        }}>
            <Image source={icons.search} style={{
                height:20,
                width:20,
                tintColor:COLORS.gray
            }} />
            <TextInput style={{
                marginLeft:SIZES.radius,
                ...FONTS.body3
            }} placeholder="Search Recipes"
            placeholderTextColor={COLORS.gray}>

            </TextInput>

        </View>
    )
}

function renderSeeRecipeCard(){
    return(
        <View style={{
            marginHorizontal:SIZES.padding,
            marginTop:SIZES.padding,
            flexDirection:"row",
            borderRadius:10,
            backgroundColor:COLORS.lightGreen

        }}>
            <View style={{
                alignItems:"center",
                justifyContent:"center",
                width:100
            }}>
                <Image source={images.recipe}  style={{
                    height:80,
                    width:80
                }}/>

            </View>
            <View style={{
                flex:1,
                paddingVertical:SIZES.radius
            }}>
                <Text style={{
                    ...FONTS.body4,
                    width:"70%"
                }}>
                    You have 12 recipes that you haven't tries yet
                </Text>
                <TouchableOpacity style={{marginTop:10}} onPress={()=>console.log("See Recipes")}>
                    <Text style={{
                        color:COLORS.darkGreen,
                        textDecorationLine:"underline",
                        ...FONTS.h4
                    }}>See Recipes</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

function renderTreningSection(){
    return(
        <View style={{
            marginTop:SIZES.padding
        }}>
            <Text style={{
                marginHorizontal:SIZES.padding,
                ...FONTS.h2
            }}>
                Trending Recipe
            </Text>
            <FlatList
            data={dummyData.trendingRecipes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item=>`${item.id}`}
            renderItem={({item,index})=>{
                return(
                   <TrendingCard recipeItem={item} 
                   containerStyle={{
                       marginTop:10
                   }}
                   onPress={()=>navigation.navigate("Recipe",{recipe:item})} />
                )
            }}
            />

        </View>
    )
}
const Home = ({ navigation }) => {
    return (
        <View style={{
            flex:1,
            backgroundColor:"white"
        }}>
            <FlatList 
            data={dummyData.categories}
            keyExtractor={item=>`${item.id}`}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View>
                  {renderHeader()}

                   {/* Search Bar */}
                   {renderSerachBar()}
                   {/* See Recipe Card */}
                   {renderSeeRecipeCard()}
                   {/* Trening Section */}
                   {renderTreningSection()}
                   {/* Category Header */}
               </View>
            }
            renderItem={({item})=>{
                return(
                    // <View></View>
                    <CategoryCard 
                    containerStyle={{
                        marginHorizontal:SIZES.padding
                    }}
                    onPress={()=>navigation.navigate("Recipe",{recipe:item})}
                    categoryItem={item}/>
                )
            }}
            ListFooterComponent={
                <View
                
                style={{
                    marginBottom:100
                }}></View>
            }
            />
         

        </View>
    )
}

export default Home;