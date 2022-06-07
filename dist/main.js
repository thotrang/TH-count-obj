"use strict";
class Application {
    constructor(name) {
        this.name = name;
        Application.count++;
    }
}
Application.count = 0;
console.log(Application.count);
let app1 = new Application('App One');
console.log(Application.count);
let app2 = new Application('App Two');
console.log(Application.count);
