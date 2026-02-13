import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import {Coins} from './coins.jsx';
import { Tempature } from './tempature.jsx';
import { Cube } from './cube.jsx';
import { Gym } from './gym.jsx';
import { Earthquake } from './earthquake.jsx';
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <Coins nickels={0} dimes={0} quarters={0} loonies={0} toonies={0} />
      <Coins nickels={0} dimes={0} quarters={0} loonies={3} toonies={0} />
      <Coins nickels={2} dimes={1} quarters={1} loonies={1} toonies={1} />
      <Tempature f={32}/>
      <Tempature f={212}/>
      <Tempature f={70}/>
      <Cube height={1} />
      <Cube height={2} />
      <Cube height={3} />
      <Gym cost={100} friends={1} />
      <Gym cost={100} friends={2} />
      <Gym cost={100} friends={3} />
      <Gym cost={100} friends={4} />
      <Earthquake intensity={4.8} />
      <Earthquake intensity={5.2} />
      <Earthquake intensity={6} />
      <Earthquake intensity={7} />
      <Earthquake intensity={8} />
    </View>
  );
}

