/**
 * Created by askuznetsov on 3/3/14.
 */

/**
 *
 * @constructor
 */
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
    return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
    if( index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex || 0;

    while(i < this.observerList.length) {
        if(this.observerList[i] === obj) {
            return i;
        }
    }
    return -1;
};

ObserverList.prototype.removeAt = function(index) {
    this.observerList.splice(index, 1);
};


/**
 *
 * @constructor
 */
function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
    this.observers.removeAt( this.observers.indexOf(observer) )
};

Subject.prototype.notify = function(context) {
    var observerCount = this.observers.count();
    for(var i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }
};


/**
 *
 * @constructor
 */
function Observer() {
    this.update = function(context) {

    };
}


/**
 * Extend obj
 * @param extension
 * @param obj
 */
function extend(extension, obj) {
    for(var key in extension) {
//        debugger;
        obj[key] = extension[key];
    }
}



// Demo script

var controlCheckbox = document.getElementById('mainCheckbox'),
    addBtn = document.getElementById('addNewObserver'),
    container = document.getElementById('observersContainer')

extend(new Subject(), controlCheckbox);

controlCheckbox.onclick = function() {
    controlCheckbox.notify( controlCheckbox.checked );
};

addBtn.onclick = addNewObserver;

function addNewObserver() {
    var check = document.createElement('input');
    check.type = 'checkbox';

    extend(new Observer(), check);

    check.update = function(value) {
        this.checked = value;
    };

    controlCheckbox.addObserver(check);
    container.appendChild(check);
}