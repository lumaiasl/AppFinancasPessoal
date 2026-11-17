import React, { useContext, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import { AuthContext } from '../../contexts/auth'

import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

import api from '../../services/api';
import { format } from 'date-fns';

import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItems';
import HistoricoList from '../../components/HistoricoList';

import { Feather } from '@react-native-vector-icons/feather';

export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [movements, setMovements] = useState([]);

    const [dateMovements, setDateMovements] = useState(new Date());

    useEffect(() => {
        let isActive = true;

        async function getMovements() {
            let dateFormated = format(dateMovements, 'dd/MM/yyyy')

            const receives = await api.get('/receives', {
                params:{
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })

            if(isActive){
                setMovements(receives.data)
                setListBalance(balance.data);
            }

        }

        getMovements();

        return () => isActive = false;
    }, [isFocused, dateMovements])

    async function handleDelete(id){
        try {
            await api.delete('/receives/delete', {
                params:{
                    item_id: id
                }
            })

            setDateMovements(new Date())
        } catch (error) {
            console.log(error)
        }
    }

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

            <View className="mt-8 mx-2">
                <TouchableOpacity className="flex flex-row items-center gap-2">
                    <Feather name="calendar" color="#121212" size={24} />
                    <Text className="color-[#121212] text-xl font-bold">Ultimas movimentações</Text>
                </TouchableOpacity>

                <FlatList 
                    data={movements}
                    keyExtractor={item => item.id}
                    renderItem={ ({ item }) => <HistoricoList data={item} deleteItem={handleDelete}/>}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>
        </SafeAreaView>
    )
}

const Background = "flex-1 bg-[#f0f4ff]"
