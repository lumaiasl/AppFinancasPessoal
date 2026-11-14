import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Image, Text, TextInput, View, TouchableOpacity, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function SignIn(){
    const navigation = useNavigation();

    return(
        <SafeAreaView className={Background}>
            <KeyboardAvoidingView className={Container} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <Image 
            className="mb-24"
            source={require('../../assets/Logo.png')}
        />

        <View className={InputArea}>
            <TextInput 
                className={InputText}
                placeholder='Seu email'
            />
        </View>

        <View className={InputArea}>
            <TextInput 
                className={InputText}
                placeholder='Sua senha'
            />
        </View>

        <TouchableOpacity className={SubmitButton} activeOpacity={0.8}>
            <Text className={SubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-[10px] mb-[10px]" onPress={() => navigation.navigate('SignUp')}>
            <Text className="color-[#171717]">Criar uma conta!</Text>
        </TouchableOpacity>


    </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export const SubmitText = 'text-[20px] color-white'
export const SubmitButton = 'w-[90%] h-[45px] rounded-lg bg-[#3b3dbf] mt-[10px] justify-center items-center'
export const Container = 'flex-1 justify-center items-center gap-2'
export const Background = 'flex-1 bg-[#f0f4ff]'
export const InputText = 'bg-white w-[90%] text-[17px] p-[10px] mb-[15px] rounded-lg text-[#121212]'
export const InputArea = 'flex flex-row'