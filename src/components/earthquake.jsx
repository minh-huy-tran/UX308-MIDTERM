import{
    Text,
    View,
}from 'react-native';

import {earthquakeDamage} from '../earthquake.js';

//input
export function Earthquake ({ intensity }) {

    //processing 
    let result = earthquakeDamage(intensity);

    //output
    return (
        <View>
            <Text>
                earthquakeDamage({intensity}) returned {result}
            </Text>
        </View>
    )
}