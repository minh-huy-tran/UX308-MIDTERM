import{
    Text,
    View,
}from 'react-native';

import { fahrenheitToCelcius } from '../tempature.js';

//input
export function Tempature({f}){
    

    //processing
    let c=fahrenheitToCelcius(f);

    //output
    return(
        <View>
            <Text>
                fahrenheitToCelcius({f}) returned {c}
            </Text>
        </View>
    )
}