/**
 * Simple namespace
 * @type {}
 */
var simpleNamespace = {
    property : "someProperty",
    method: function() {
        return "some method";
    }
};

simpleNamespace.additionalProperty = "some additional property";

/**
 *
 */
var simpleModule = (function() {

    var counter  = 0;

    function testThis() {
        return this
    }
    var private = {
        testThis: function() {
            return this
        }
    }

    return {
        testThis: function() {
            console.log(this);
            console.log(testThis());
            console.log(private.testThis());
        },
        increment : function() {
            return counter++
        },
        reset: function() {
            console.log('counter was ' + counter + ' before reset');
            counter = 0;
        }
    }
})();

/**
 * Revealing module
 */
var revealingModule = (function() {
    var public =  {
           // ...
        },
        private = {
           // ...
        }
    function someFx1() {
        console.log("I'm fx #1"); return;
    }
    function someFx2() {
        console.log("I'm fx #2"); return;
    }
    function someFx3() {
        console.log("I'm fx #3"); return;
    }

    return {
        fx1: someFx1,
        fx2: someFx2,
        fx3: someFx3
    }
})();