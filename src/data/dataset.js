import devoxx15 from './devoxx15.txt'
import devoxx16 from './devoxx16.txt'
import devoxx17 from './devoxx17.txt'

const lists = [devoxx15, devoxx16, devoxx17];
const allTalks = [].concat(...lists.map(x => x.split('\n')));

export default new Set(allTalks);