/**
 * Created by askuznetsov on 2/28/14.
 */

var obj1 = {},
    obj2 = Object.create(Object.prototype),
    obj3 = new Object({
        a: 1,
        b: 2
    });


// define properties
Object.defineProperty(obj2, "someProp" ,{
    value: "test",
    writable:     true,
    enumerable:   true,
    configurable: true
});

Object.defineProperties(obj1, {
    first: {
        value: "first value",
        writable:     true,
        enumerable:   true,
        configurable: true
    },
    second: {
        value: "second value",
        writable:     false,
        enumerable:   false,
        configurable: false
    },
    fx: {
        value: function() {
            var a = 200;
            return a;
        },
        writable:     false,
        enumerable:   false,
        configurable: false
    }
});


/**
 * Person class
 * @param name
 * @param age
 * @param position
 * @constructor Person
 */
function Person(name, age, position) {
    this.name = name || "user";
    this.age = age || 100;
    this.position = position || "intern";

    this.getFullProfie = function() {
        return this.name + " is " + this.age + " years " + this.position
    }
}

Person.prototype.getProfie = function(type) {
    switch (type) {
        case 1: return this.name;
        case 2: return this.age;
        case 3: return this.position;
        default : return this.getProfile();
    }
}

mike = new Person("Mike", 33, 'programmer');
tim  = new Person('Tim', 35, "Senior programmer");