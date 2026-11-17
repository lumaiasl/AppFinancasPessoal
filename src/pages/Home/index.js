import React, { useContext, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native'

import { AuthContext } from '../../contexts/auth'

import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

import api from '../../services/api';
import { format } from 'date-fns';

import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItems';
import HistoricoList from '../../components/HistoricoList';

import { Feather } from '@react-native-vector-icons/feather';
import CalendarModal from '../../components/CalendarModal';

export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [movements, setMovements] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [dateMovements, setDateMovements] = useState(new Date());

    useEffect(() => {
        let isActive = true;

        async function getMovements() {     
            let date = new Date(dateMovements)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dateFormated = format(onlyDate, 'dd/MM/yyyy')

            console.log(dateFormated);

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

    function filterDateMovements(dateSelected){
        setDateMovements(dateSelected);
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
                <TouchableOpacity onPress={() => setModalVisible(true)} className="flex flex-row items-center gap-2">
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

                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent
                    onRequestClose={() => setModalVisible(false)}
                >
                    <CalendarModal 
                        setVisible={ () => setModalVisible(false) } 
                        handleFilter={filterDateMovements}
                    />
                </Modal>
            </View>
        </SafeAreaView>
    )
}

const Background = "flex-1 bg-[#f0f4ff]"
