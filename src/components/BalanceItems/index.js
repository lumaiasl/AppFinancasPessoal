import React, { useMemo } from "react"
import { View, Text } from "react-native"

export default function BalanceItem({ data }){

const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
        return{
            label: 'Saldo atual',
            color: '#3b3dbf'
        }
    } else if(data.tag === 'receita'){
        return{
            label: 'Entradas de hoje',
            color: '#00b94a',
        }
    } else {
        return{
            label: 'Saídas de hoje',
            color: '#EF564A'
        }
    }
}, [data])

    return(
        <View
            className="ml-[14px] mr-[14px] rounded-sm justify-center items-start w-[300px] pl-[14px]"
            style={{ backgroundColor: labelName.color }}
        >
            <Text className="color-white text-2xl font-bold">{labelName.label}</Text>
            <Text className="mt-[5px] text-4xl color-white">R$ {data.saldo}</Text>
        </View>
    )
}

