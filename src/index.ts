import { User } from './User';
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const customMap = new CustomMap('map');

const user = new User();
customMap.addMarker(user);

const company = new Company();
customMap.addMarker(company);

console.log(user);
console.log(company);

// run by: $parcel index.html






