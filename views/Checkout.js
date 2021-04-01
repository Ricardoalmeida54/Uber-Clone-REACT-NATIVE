import React, {useState,useEffect,useRef} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css';
import config from '../config';
import { WebView } from 'react-native-webview';
import { askAsync } from 'expo-permissions';
export default function Checkout(props) {

    const [url,setUrl] = useState(null);

    useEffect(()=>{
        async function sendServer(){
            let response=await fetch(config.urlRoot,{
               method: 'POST',
               headers:{
                   Accept: 'application/json',
                   'Content-Type':'application/json'
               },
                body: JSON.stringify({
                  price: props.route.params.price,
                  address: props.route.params.address,
                })
            });
            let json=await response.json();
            setUrl(json);
        }
        sendServer();
    },[]);

            //Mudança de estado de navegação
async function stateChange(state)
{
    let url=state.url;
    if(state.canGoBack == true && !url.includes('mercadopago')){
        if(url.includes("approved")){
            props.navigation.navigate('Tracking');
        }else{
            props.navigation.navigate('Home');
        }
    }
}

    
    return (
        <View style ={css.container}>
        {url &&
            <WebView
         originWhitelist={['*']}
         source={{uri: url}}
         style={css.checkoutmp }
         startInLoadingState={true}
         onNavigationStateChange={state=>stateChange(state)}
       />

        }

      </View>
    );
    }
