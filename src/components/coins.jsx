import{
    Text,
    View,
} from'react-native';

import {totalCoins} from '../coins.js';

//input
export function Coins({nickels, dimes, quarters, loonies, toonies}){

    //processing
    let total = totalCoins(nickels, dimes, quarters, loonies, toonies);

    //output
    return (
        <View>
            <Text>
                totalCoins({nickels}, {dimes}, {quarters}, {loonies}, {toonies}) returned {total}
            </Text>
        </View>
    );
}