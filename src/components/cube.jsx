import{
    Text,
    View,
}from'react-native';

import {cubeVolume} from '../cube.js';

export function Cube({ height }){

    let volume = cubeVolume(height);

    return(
        <View>
            <Text>
                cubeVolume({height}) returned {volume}
            </Text>
        </View>
    );
}