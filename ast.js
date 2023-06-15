export class SendMessage {
  constructor(receiver, message) {
    this.receiver = receiver;
    this.message = message;
  }
  accept(visitor) {
    return visitor.visitSending(this);
  }
}

export class Message {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
  accept(visitor) {
    return visitor.visitMessage(this);
  }
}

export class Identifier {
  constructor(name) {
    this.name = name;
  }
  accept(visitor) {
    return visitor.visitIdentifier(this);
  }
}

export class NumberLiteral {
  constructor(number) {
    this.number = number;
  }
  accept(visitor) {
    return visitor.visitNumber(this);
  }
}

export class VectorLiteral {
  constructor(vector) {
    this.vector = vector;
  }
}
