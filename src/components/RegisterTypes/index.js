import { TouchableOpacity, View, Text } from "react-native";
import Feather from "@react-native-vector-icons/feather";
import React, { useState } from 'react';

export default function RegisterTypes({ type, sendTypeChanged }) {
    const receitaSelecionada = type === 'receita';
    const despesaSelecionada = type === 'despesa';

    const [typeChecked, setTypeChecked] = useState(type)

    function changeType(nome){
        if(nome === 'receita'){
            setTypeChecked('receita');
            sendTypeChanged('receita');
        }else{
            setTypeChecked('despesa');
            sendTypeChanged('despesa');
        }
    }

    return(
        <View className="flex flex-row w-full gap-4">
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={{ selected: receitaSelecionada }}
                onPress={() => changeType('receita')}
                className={`${inputArea} ${receitaSelecionada ? 'bg-[#383d8f]' : 'bg-transparent'}`}
            >
                <Feather name="arrow-up" size={25} color={receitaSelecionada ? '#ffffff' : '#121212'} />
                <Text className={receitaSelecionada ? 'text-white' : 'text-[#121212]'}>
                    Receita
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={{ selected: despesaSelecionada }}
                onPress={() => changeType('despesa')}
                className={`${inputArea} ${despesaSelecionada ? 'bg-[#383d8f]' : 'bg-transparent'}`}
            >
                <Feather name="arrow-down" size={25} color={despesaSelecionada ? '#ffffff' : '#121212'} />
                <Text className={despesaSelecionada ? 'text-white' : 'text-[#121212]'}>
                    Despesa
                </Text>
            </TouchableOpacity>
        </View>
    )
    
};

const inputArea = "flex flex-row w-[48%] justify-center items-center h-[45px] rounded-2 border-2 border-[#383d8f]"
