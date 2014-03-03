/**
 * Singleton
 */
var singleton = (function() {

    var instance;

    function init() {
        // Singleton body
        function privateMethod() {
            console.log('from private');
        }
        var privateVar = 'private var text';
        var privateRandom = Math.random();
        return {
            publicMethid: function() {
                console.log("from public");
            },
            publicProperty: "public prop test",
            getRandom: function() {
                return privateRandom;
            }

        }
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = init()
            }
            return instance;
        }
    };
})();

var singleA = singleton.getInstance();
var singleB = singleton.getInstance();

// TODO: one more example;