/**
 * Created by askuznetsov on 3/5/14.
 */

/**
 * w/ Object.create ECMAscript 5
 * @type {{name: string, doTmthg: doTmthg, doRun: doRun}}
 */
var human = {
    name: "Artem",

    doTmthg : function() {
        console.log("I'm doing something");
    },

    doRun: function() {
        console.log("I'm running");
    }
};

var artem = Object.create(human, {
    surname: {
        value: 'test'
    }
});

artem.doWalk = function() {
    console.log('ok')
};


/**
 * w/ F function
 * @type {{init: init, getModel: getModel}}
 */
var vehiclePrototype = {
    init: function(carModel) {
        this.model = carModel;
    },
    getModel: function() {
        console.log("The model of this vehicle is: "+ this.model);
    }
};

function vehicle(model) {

    function F() {};
    F.prototype = vehiclePrototype;

    var f = new F();

    f.init(model);
    return f;
}

var car = vehicle("Ford Mustang");
car.getModel();


/**
 * 3rd variant
 * @type {Function}
 */
var thrdVar = (function() {
    function F() {};
    return function(proto) {
        F.prototype = proto;
        return new F();
    }
})();