import devoxx15pl from './devoxx-pl-2015.txt'
import devoxx16pl from './devoxx-pl-2016.txt'
import devoxx16be from './devoxx-be-2016.txt'
import devoxx17pl from './devoxx-pl-2017.txt'
import devoxx17be from './devoxx-be-2017.txt'
import qconlondon16 from './qcon-london-2016.txt';
import qconlondon17 from './qcon-london-2017.txt';

const lists = [devoxx15pl, devoxx16pl, devoxx16be, devoxx17pl, devoxx17be, qconlondon16, qconlondon17];
const allTalks = [].concat(...lists.map(x => x.split('\n')));

export default new Set(allTalks);

/*  One time utility to convert the data source from txt to JSON 
*/
// function convertTxtToJSON() {
//     var finalJSON = [];
//     function converter(lists, confCode, confName) {
//         var titles = [].concat(...lists.map(x => x.split('\n')));
//         console.log(titles.length);
//         titles.forEach(title => {
//             var tempObj = { "title" : title, "description" : "Sample description", "confCode" : confCode, "confName" : confName };
//             finalJSON.push(tempObj);
//         });
//     };
//     converter([devoxx15pl], "devoxx-pl-2015", "Devoxx Poland, 2015");
//     converter([devoxx16pl], "devoxx-pl-2016", "Devoxx Poland, 2016");
//     converter([devoxx16be], "devoxx-be-2016", "Devoxx Belgium, 2016");
//     converter([devoxx17pl], "devoxx-pl-2017", "Devoxx Poland, 2017");
//     converter([devoxx17be], "devoxx-be-2017", "Devoxx Belgium, 2017");
//     converter([qconlondon16], "qcon-london-2016", "QCon London, 2016");
//     converter([qconlondon17], "qcon-london-2017", "QCon London, 2017");
//     console.log(JSON.stringify(finalJSON));
// };
// convertTxtToJSON();