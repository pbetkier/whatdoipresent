import devoxx19pl from './devoxx-pl-2019.txt';

const lists = [devoxx19pl];
const allTalks = [].concat(...lists.map(x => x.split('\n')));

export default new Set(allTalks);
