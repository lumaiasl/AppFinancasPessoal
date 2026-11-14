import React, { useContext } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, useColorScheme, } from 'react-native';
import { Container, Background, SubmitText, SubmitButton, InputArea, InputText  } from '../SignIn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){

    const { user } = useContext(AuthContext)

    function handleSignUp(){
        console.log(user);
    }

    return(
        <SafeAreaView className={Background}>
            <KeyboardAvoidingView className={Container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
            
                <View className={InputArea}>
                    <TextInput className={InputText} placeholder='Nome'/>
                </View>

                <View className={InputArea}>
                    <TextInput className={InputText} placeholder='Seu email'/>
                </View>

                <View className={InputArea}>
                    <TextInput className={InputText} placeholder='Sua senha'/>
                </View>

                <TouchableOpacity className={SubmitButton} onPress={handleSignUp}>
                    <Text className={SubmitText}>Cadastrar</Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}