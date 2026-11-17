import React, { useContext, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, Button, FlatList } from 'react-native'

import { AuthContext } from '../../contexts/auth'

import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

import api from '../../services/api';
import { format, isFirstDayOfMonth } from 'date-fns';

import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItems';

export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);

    const [dateMovements, setDateMovements] = useState(new Date());

    useEffect(() => {
        let isActive = true;

        async function getMovements() {
            let dateFormated = format(dateMovements, 'dd/MM/yyyy')

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })

            if(isActive){
                setListBalance(balance.data);
            }

        }

        getMovements();

        return () => isActive = false;
    }, [isFocused])

    return(
        <SafeAreaView className={Background}>
            <Header title="Minhas movimentações" />

            <FlatList 
                className="max-h-[190px]"
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => item.tag }
                renderItem={ ({ item }) => ( <BalanceItem data={item} /> )}
            />
        </SafeAreaView>
    )
}

const Background = "flex-1 bg-[#f0f4ff]"
