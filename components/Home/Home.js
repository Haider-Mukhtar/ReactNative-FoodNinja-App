import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="#0D0D0D"
                barStyle="light-content"
            />
            <View style={{ backgroundColor: '#0D0D0D', flex: 1 }}>
                {/* header */}
                <View style={{ flexDirection: 'row', marginLeft: 31, marginRight: 40, gap: 27, alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                    <View style={{}}>
                        <Text style={{ color: '#fff', fontSize: 48, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 48 }}>
                            Find Your
                        </Text>
                        <Text style={{ color: '#fff', fontSize: 48, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 48 }}>
                            Favorite Food
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{ height: 45, width: 45, backgroundColor: '#4d4d4d', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                    >
                        <Image
                            source={require('./assets/NotifiactionIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* search bar and filter */}
                <View style={{ flexDirection: 'row', marginHorizontal: 25, gap: 10, marginTop: 20 }}>
                    <View style={{ backgroundColor: '#4d4d4d', flex: 1, borderRadius: 15, flexDirection: 'row' }}>
                        <Image
                            style={{ marginVertical: 13, marginLeft: 18, }}
                            source={require('./assets/SearchIcon.png')}
                        />
                        <TextInput
                            style={{ backgroundColor: '#4d4d4d', paddingHorizontal: 14, fontSize: 16, fontWeight: 'normal', fontStyle: 'normal', letterSpacing: 0.5, color: '#fff', flex: 1, borderRadius: 15 }}
                            placeholder='What do you want to order?'
                            placeholderTextColor='#fff'
                        />
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#4d4d4d', borderRadius: 15 }}>
                        <Image
                            style={{ margin: 13, }}
                            source={require('./assets/FilterIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* search bar and filter */}
                <View style={{ marginHorizontal: 25, marginTop: 20 }}>
                    <Image
                        style={{ width: '100%', borderRadius: 15 }}
                        source={require('./assets/AdvertisingBanner.png')}
                    />
                    <View style={{ position: 'absolute', alignSelf: 'flex-end', top: 16, right: 12 }}>
                        <Text style={{ color: '#0D0D0D', fontSize: 26, fontWeight: 'bold', fontStyle: 'normal', }}>
                            Special Deal for
                        </Text>
                        <Text style={{ color: '#0D0D0D', fontSize: 26, fontWeight: 'bold', fontStyle: 'normal', }}>
                            October
                        </Text>
                        <TouchableOpacity
                            style={{ backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 8, alignSelf: 'flex-start', marginTop: 12, borderRadius: 6 }}
                        >
                            <Text style={{ color: '#53E88B', fontSize: 18, fontWeight: 'bold', fontStyle: 'normal', }}>
                                Buy Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Nearest Restaurant */}
                <View style={{marginVertical:20, marginHorizontal:25, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold', fontStyle: 'normal', }}>
                        Nearest Restaurant
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#FF8E4C', fontSize: 20, fontWeight: 'normal', fontStyle: 'normal', }}>
                            View More
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Nearest Restaurant list */}
                
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})