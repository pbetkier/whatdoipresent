import devoxx18pl from './devoxx-pl-2018.txt';
import devoxx18uk from './devoxx-uk-2018.txt';

const lists = [devoxx18pl, devoxx18uk];
const allTalks = [].concat(...lists.map(x => x.split('\n')));

export default new Set(allTalks);
