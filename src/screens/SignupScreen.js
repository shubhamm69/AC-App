import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View className=" flex-1">
            <View className="">
                <Text className="m-4">Enter Name</Text>
                <View className="flex-row space-x-2 mx-4">
                    <View className="flex-row space-x-2 bg-white p-3 flex-1 rounded-[15px]">
                        <View >
                            <TextInput
                                placeholder='Name'
                                keyboardType='default'
                                className="text-[14px]"
                                onChangeText={setEmail}
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View className="">
                <Text className="m-4">Enter Email</Text>
                <View className="flex-row space-x-2 mx-4">
                    <View className="flex-row space-x-2 bg-white p-3 flex-1 rounded-[15px]">
                        <View >
                            <TextInput
                                placeholder='example@gmail.com'
                                keyboardType='default'
                                className="text-[14px]"
                                onChangeText={setEmail}
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View className="">
                <Text className="m-4">Enter Password</Text>
                <View className="flex-row space-x-2 mx-4">
                    <View className="flex-row space-x-2 bg-white p-3 flex-1 rounded-[15px]">
                        <View>
                            <TextInput
                                placeholder='Password'
                                keyboardType='default'
                                className=" text-[14px]"
                                onChangeText={setPassword}
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View className="">
                <Text className="m-4">Confirm Password</Text>
                <View className="flex-row space-x-2 mx-4">
                    <View className="flex-row space-x-2 bg-white p-3 flex-1 rounded-[15px]">
                        <View >
                            <TextInput
                                placeholder='Password'
                                keyboardType='default'
                                className=" text-[14px]"
                                onChangeText={setPassword}
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity 
                className=" mt-8 mx-4 flex justify-center h-[60px] rounded-[15px] bg-blue-500" 
                onPress={() => navigation.navigate('Home')}>
                <Text className="text-white text-center text-xl">Sign In</Text>
            </TouchableOpacity >
        </View>
    );
}


SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};


export default SignupScreen;
