/**
 * Created by askuznetsov on 3/3/14.
 */

var pubSub = {};

(function(someObject) {
    var topics = {};
    var subUid = -1;

    someObject.publish = function(topic, args) {
        if(!topics[topic]) {
            return false;
        }

        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;

        while(len--) {
            subscribers[len].func(topic, args);
        }

        return this
    }

    someObject.subscribe = function(topic, func) {
        if(!topics[topic]) {
            topics[topic] = [];
        }

        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });

        return token;
    };

    someObject.unsubscribe = function(token) {
        for(var m in topics) {
            if(topics[m]) {
                for(var i = 0, j = topics[m].length; i < j; i++) {
                    if(topics[m][i].token === token) {
                        topics[m][i].splice(i,1);
                        return token;
                    }
                }
            }
        }
        return this;
    };
})(pubSub);


var messageLogger = function(topics, data) {
    console.log('logging: ' + topics + ': ' + data);
};

var subscription = pubSub.subscribe("inbox/newMessage");
pubSub.publish("inbox/newMessage", 'test string');
pubSub.publish("inbox/newMessage", {
    sender: 'test@mail.con',
    body: 'New msg'
});

pubSub.unsubscribe(subscription);
pubSub.publish("inbox/newMessage", 'New test string');