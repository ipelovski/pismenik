// reuse js Symbol type
// type Record => Object.create(null)

// check - can an object process a message. it goes through patterns of the object. it's another type of a message handling

const currentEnvironment = Symbol("current environment");
export const empty = Symbol("()");

export class Key {
  _name;
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

export class Cell {
  _value;
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
}

export class Pair {
  _first;
  _second;
  constructor(first, second) {
    this._first = first;
    this._second = second;
  }
  get first() {
    return this._first;
  }
  get second() {
    return this._second;
  }
}

export class Sending {
  _pair; // to :: message; message = title :: content
  constructor(pair) {
    this._pair = pair;
  }
  get pair() {
    return this._pair;
  }
}

// class Vector {
//   _elements;
//   constructor(...elements) {
//     this._elements = elements;
//   }
//   at(index) {
//     return this._elements.at(index);
//   }
//   get size() {
//     return this._elements.length;
//   }
// }
// type Vector => Array with fixed length

function toMap(tupleOfPairs) {
  const map = new Map();
  for (let i = 0; i < tupleOfPairs.length; i++) {
    const pair = tupleOfPairs.at(i);
    map.set(pair.first, pair.second);
  }
  return map;
}

function toRecord(tupleOfPairs) {
  const object = Object.create(null);
  for (let i = 0; i < tupleOfPairs.length; i++) {
    const pair = tupleOfPairs.at(i);
    object[pair.first] = pair.second;
  }
  return object;
}

export class Thing {
  _state; // a record or a vector
  _behavior;
  constructor(state, behavior) {
    this._state = state;
    this._behavior = behavior;
  }
  receive(messageTitle, messageContent) {
    this._behavior.call(this._state, messageTitle, messageContent);
  }
}

class Procedure {
  
}

class RecordBehavior {

}

// record behavior or simple behavior => an object with state a record of message title :: list of handlers
// vector behavior or composite behavior => an object with state a vector of record behavior
// handler => pattern :: procedure
// pattern => procedure (message content) => () or a record of bound variables -> variable name :: value (:) is a successfull match too

// state is plain data, behavior gives meaning and purpose of the state
// pass state and attach behavior to it on the other side
// procedure => function (environment, self, input)
