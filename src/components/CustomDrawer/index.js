import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import React, {useContext} from 'react';
import { Text, View, Image } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {
    const { user, signOut } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props}>
            <View className="px-4 py-3 items-center gap-6 mb-2">
                <Image 
                    source={require('../../assets/Logo.png')} 
                    style={{ width: 90, height: 90}}
                    resizeMode='contain'
                />
                <View className="flex flex-col items-center">
                    <Text numberOfLines={1} className="text-lg">Bem vindo</Text>
                    <Text className="text-xl font-bold">{user && user.name}</Text>
                </View>
            </View>
            <DrawerItemList {...props} />

            <DrawerItem 
                {...props}
                label="Sair do app"
                onPress={ () => signOut() }
            /> 
        </DrawerContentScrollView>
    );
}
