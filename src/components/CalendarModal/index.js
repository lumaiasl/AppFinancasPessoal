import React, { useState } from "react";
import { TouchableWithoutFeedback, View, TouchableOpacity, Text } from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "./localeCalendar";

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }) {
    const [dateNow, setDateNow] = useState(new Date())
    const [markedDates, setMarkedDates] = useState({});

    function handleOnDayPress(date){
        //console.log(date.dateString);
        setDateNow(new Date(date.dateString));

        let markedDay = {}

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#fff'
        }

        setMarkedDates(markedDay)
    }

    function handleFilterDate(){
        handleFilter(dateNow);
        setVisible();
    }

    return(
        <View style={{ backgroundColor: 'rgba(34, 34, 34, 0.4)', flex: 1}}>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex: 1}}></View>
            </TouchableWithoutFeedback>

            <View className="flex bg-white justify-center p-[14px]" style={{flex: 2}}>

                <Calendar 
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                            todayTextColor: '#ff0000',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#fff'
                    }}
                />
                
                <TouchableOpacity onPress={handleFilterDate} className="rounded-2 bg-[#3b3dbf] h-[45px] items-center justify-center">
                    <Text className="text-xl color-white font-bold">
                        Filtrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
