import React, {useContext} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const { user, signOut } = useContext(AuthContext);
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <Header title="Meu Perfil"/>
            <View className="flex flex-col items-center gap-4 mt-10">
                <View className="flex flex-col items-center gap-2">
                    <Text className="text-lg font-bold">Hey, bem vindo de volta!</Text>
                    <Text className="text-2xl" numberOfLines={1}>{user && user.name}</Text>
                </View>
                <View className="flex flex-col items-center w-full gap-4">
                    <TouchableOpacity onPress={ () => navigation.navigate('New')} className="bg-blue-700 rounded-lg p-2 items-center w-[90%]">
                        <Text className="font-bold text-lg color-[#faf9f9]">Fazer Registro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => signOut() } className="rounded-lg border-[1px] items-center w-[90%] p-2 border-red-400">
                        <Text className="italic text-lg font-bold color-red-400">Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};
