import React, {useState} from 'react';
import { Keyboard, TextInput, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';

import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function New() {
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
            <SafeAreaView>
                <Header title="Registrando" />
                <SafeAreaView className={InputArea}>
                    <TextInput
                        placeholder='Descrição desse registro'
                        className={InputText}
                        onChangeText={ (text) => setLabelInput(text) }
                    />
                    <TextInput
                        placeholder='Valor desejado'
                        keyboardType='numeric'
                        className={InputText}
                        onChangeText={ (text) => setValueInput(text) }
                    />
                    <TouchableOpacity className={SubmitButton}>
                        <Text className={SubmitText}>Registrar</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
};


const InputArea = "flex flex-col items-center w-[90%] bg-color-wwhite text-lg p-2 mb-[14px] rounded-sm"
const InputText = "h-[50px] w-[90%] bg-color-white text-lg p-2 mb-[14px] rounded-1"
const SubmitButton = "flex w-[90%] h-[50px] items-center justify-center bg-[#00b94a] rounded-2"
const SubmitText = "color-white text-2xl font-bold"
