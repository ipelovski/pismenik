export class Compiler {
  constructor() {
  }
  visitSending(sending) {
    const receiver = sending.receiver.accept(this);
    const message = sending.message.accept(this);
    return `${receiver}.receive(${message})`;
  }
  visitMessage(message) {
    const title = message.title.accept(this);
    const content = message.content.accept(this);
    return `${title},${content}`;
  }
  visitIdentifier(identifier) {
    return `Symbol.for('${identifier.name}')`;
  }
  visitNumber(number) {
    return number.number.toString();
  }
}
