import React, {useState} from 'react';
import { Keyboard, TextInput, TouchableOpacity, Text, TouchableWithoutFeedback, Alert } from 'react-native';

import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterTypes from '../../components/RegisterTypes';

import api from '../../services/api';
import { format } from 'date-fns';

import { useNavigation } from '@react-navigation/native';

export default function New() {
    const navigation = useNavigation();

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    function handleSubmit(){
        Keyboard.dismiss();

        if(isNaN(parseFloat(valueInput)) || type == null){
            alert('preencha todos os campos')
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    async function handleAdd(){
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home')
    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
            <SafeAreaView className="flex flex-col items-center gap-2">
                <Header title="Registrando" />
                <SafeAreaView className={InputArea}>
                    <TextInput
                        placeholder='Descrição desse registro'
                        className={InputText}
                        onChangeText={ (text) => setLabelInput(text) }
                        value={labelInput}
                    />
                    <TextInput
                        placeholder='Valor desejado'
                        keyboardType='numeric'
                        className={InputText}
                        onChangeText={ (text) => setValueInput(text) }
                        value={valueInput}
                    />

                    <RegisterTypes type={type} sendTypeChanged={ (item) => setType(item) }/>

                    <TouchableOpacity className={SubmitButton} onPress={handleSubmit}>
                        <Text className={SubmitText}>Registrar</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
};


const InputArea = "flex flex-col items-center w-[90%] bg-color-wwhite text-lg p-2 mb-[14px] gap-4 rounded-sm"
const InputText = "h-[50px] w-[90%] bg-color-white text-lg p-2 mb-[14px] rounded-1"
const SubmitButton = "flex w-[90%] h-[50px] items-center justify-center bg-[#00b94a] rounded-2"
const SubmitText = "color-white text-2xl font-bold"
