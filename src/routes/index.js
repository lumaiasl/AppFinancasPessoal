import React, {useContext} from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth";

function Routes(){
    const { signed, loading } = useContext(AuthContext)

    if(loading){
        return(
            <View className="flex-1 items-center justify-center bg-[#f0f4ff]">
                <ActivityIndicator size="large" color="#131313"/>
            </View>
        )
    }

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes
