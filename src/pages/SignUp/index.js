import React, { useContext, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, } from 'react-native';
import { Container, Background, SubmitText, SubmitButton, InputArea, InputText  } from '../SignIn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){

    const { signUp } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSignUp(){
        signUp(email, password, nome);
    }

    return(
        <SafeAreaView className={Background}>
            <KeyboardAvoidingView className={Container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
            
                <View className={InputArea}>
                    <TextInput 
                        className={InputText} 
                        placeholder='Nome'
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <View className={InputArea}>
                    <TextInput 
                        className={InputText} 
                        placeholder='Seu email'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View className={InputArea}>
                    <TextInput 
                        className={InputText} 
                        placeholder='Sua senha'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity className={SubmitButton} onPress={handleSignUp}>
                    <Text className={SubmitText}>Cadastrar</Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
