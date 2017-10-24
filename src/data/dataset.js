import devoxx_bl_16 from './devoxx-bl-16';
import devoxx_bl_17 from './devoxx-bl-17';
import devoxx_pl_15 from './devoxx-pl-15.js';
import devoxx_pl_16 from './devoxx-pl-16.js';
import devoxx_pl_17 from './devoxx-pl-17.js';
import devoxx_us_17 from './devoxx-us-17.js';
import qcon_lon_16 from './qcon-lon-16.js';
import qcon_lon_17 from './qcon-lon-17.js';

const lists = [devoxx_bl_16, devoxx_bl_17, devoxx_pl_15, devoxx_pl_16, devoxx_pl_17, devoxx_us_17, devoxx_us_17, qcon_lon_16, qcon_lon_17];
const data = [].concat.apply([], lists);
console.log(data);

export default new Set(data);