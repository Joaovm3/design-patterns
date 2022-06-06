import { Database } from "./Database";
import './instanceA'; 

const db = Database.getInstance();
db.add({ name: 'Matheus', age: 20 });
db.add({ name: 'Ana', age: 9 });
db.add({ name: 'Joaquim', age: 40 });

console.log('show users in instanceB');
db.show();