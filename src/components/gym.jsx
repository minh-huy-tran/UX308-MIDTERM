import{
    Text,
    View,
} from 'react-native';

import {gymMembership} from '../gym.js';

//input
export function Gym({cost, friends}){

    //processing
    let total = gymMembership(cost,friends);

    //output
    return(
        <View>
            <Text>
                gymMembership {cost}, {friends} returned {total}
            </Text>
        </View>
    );
}