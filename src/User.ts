import faker from 'faker'
import { Mappable } from './CustomMap';

// we write ts, we doesn't use default export in these ts 
// but in reactjs use default export

// Optional implements clause
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>User Name: ${this.name}</h1>
      </div>
    `
  }
}