import { View, Text } from "react-native";
import Feather from "@react-native-vector-icons/feather";

export default function HistoricoList({ data }) {
    return (
        <View>
            <View className="flex flex-col gap-2 ml-[14px] mt-[10px] mb-[10px]">
                <View
                    className="flex flex-row items-center justify-center gap-2 rounded-lg px-4 py-2"
                    style={{
                        alignSelf: 'flex-start',
                        flexGrow: 0,
                        backgroundColor: data?.type === 'receita' ? '#346734' : '#d9534f',
                    }}
                >
                    <Feather name={data?.type === 'receita' ? "arrow-up" : "arrow-down"} size={20} color="#ffffff" />
                    <Text className="text-lg text-white">
                        {data?.type || 'Tipo não informado'}
                    </Text>
                </View>
                {data?.value != null && (
                    <Text className="mt-1 text-2xl text-[#121212]">
                        R$ {data.value}
                    </Text>
                )}
            </View>
        </View>
    );
}
