import { User } from "../dto";

export class Database {
  private static _instance: Database | null = null;
  private users: User[] = [];

  private constructor() {} // 'new' not allowed outside the class

  static getInstance(): Database {
    if (!Database._instance) {
      Database._instance = new Database();
    }

    return Database._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
