import devoxx15pl from './devoxx-pl-2015.txt'
import devoxx16pl from './devoxx-pl-2016.txt'
import devoxx16be from './devoxx-be-2016.txt'
import devoxx17pl from './devoxx-pl-2017.txt'
import devoxx17be from './devoxx-be-2017.txt'

const lists = [devoxx15pl, devoxx16pl, devoxx16be, devoxx17pl, devoxx17be];
const allTalks = [].concat(...lists.map(x => x.split('\n')));

export default new Set(allTalks);
