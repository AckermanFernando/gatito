import React, { Children } from 'react'
import estilosGlobal from '../../estilos'
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
export default function TelaPadrao({children}){
    return <SafeAreaView style = {estilosGlobal.preencer}>
        <StatusBar/>
            <KeyboardAvoidingView
                behavior = {Platform.OS == "ios" ? "padding" : "height"}
                style = {estilosGlobal.preencer}
                >
                    {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
}