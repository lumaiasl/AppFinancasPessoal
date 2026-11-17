import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@react-native-vector-icons/feather';

export default function Header({ title }){

    const navigation = useNavigation();

    return(
        <View className="w-full flex-row items-center px-4 py-3">
            <TouchableOpacity
                className="h-11 w-11 shrink-0 items-center justify-center"
                onPress={() => navigation.openDrawer()}
            >
                <Feather name="menu" size={28} color="#1f1f1f" />
            </TouchableOpacity>

            { title && (
                <Text className="ml-2 flex-1 text-[22px]" numberOfLines={1}>
                    {title}
                </Text>
            )}
        </View>
    )
}
