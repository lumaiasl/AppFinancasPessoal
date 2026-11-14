import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Image, Text, TextInput, View, TouchableOpacity, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function SignIn(){
    const navigation = useNavigation();

    return(
        <SafeAreaView className="flex-1 bg-[#f0f4ff]">
            <KeyboardAvoidingView className="flex-1 justify-center items-center gap-2" behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <Image 
            className="mb-24"
            source={require('../../assets/Logo.png')}
        />

        <View className="flex flex-row">
            <TextInput 
                className="bg-white w-[90%] text-[17px] p-[10px] mb-[15px] rounded-lg text-[#121212]"
                placeholder='Seu email'
            />
        </View>

        <View className="flex flex-row">
            <TextInput 
                className="bg-white w-[90%] text-[17px] p-[10px] mb-[15px] rounded-lg text-[#121212]"
                placeholder='Sua senha'
            />
        </View>

        <TouchableOpacity className="w-[90%] h-[45px] rounded-lg bg-[#3b3dbf] mt-[10px] justify-center items-center" activeOpacity={0.8}>
            <Text className="text-[20px] color-white">Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-[10px] mb-[10px]" onPress={() => navigation.navigate('SignUp')}>
            <Text className="color-[#171717]">Criar uma conta!</Text>
        </TouchableOpacity>


    </KeyboardAvoidingView>
        </SafeAreaView>
    )
}