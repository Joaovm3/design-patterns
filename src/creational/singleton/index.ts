class Singleton {
  private static _instance: Singleton | null = null;
 
  private constructor() {} // 'new' not allowed outside the class

  static get instance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}

const instance1 = Singleton.instance; 
const instance2 = Singleton.instance; 

if (instance1 === instance2) {
  console.log('Singleton works. Is the same instance of object');
} else {
  console.log('Singleton failed. Different instances');
}
