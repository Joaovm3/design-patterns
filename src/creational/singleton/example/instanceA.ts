import { Database } from "./Database";

const db = Database.getInstance();
db.add({ name: 'João', age: 21 });
db.add({ name: 'Maria', age: 18 });
db.add({ name: 'José', age: 35 });

db.remove(0);
console.log('João removed in instanceA');
