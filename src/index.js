import doSlot from './slot';
import doDrunkard from './drunkard';
import insert2Body from './utils';

const result = doSlot();
const winner = doDrunkard();
// insert2Body('Slot game result:');
// insert2Body(result ? 'You win' : 'You lose');
// console.log(result ? 'You win' : 'You lose');

insert2Body(`Drunkard game result:${winner}`);

console.log('The winner is: ', winner);
