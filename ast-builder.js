import { Identifier, Message, NumberLiteral, SendMessage } from "./ast.js";
import { Key, Sending } from "./data.js";

export function build(data) {
  if (data instanceof Sending) {
    return buildSendMessage(data);
  } else if (data instanceof Key) {
    return new Identifier(data.name);
  } else if (typeof data === 'number') {
    return new NumberLiteral(data);
  }
}

function buildSendMessage(sending) {
  const receiver = build(sending.pair.first);
  const message = buildMessage(sending.pair.second);
  return new SendMessage(receiver, message);
}

function buildMessage(pair) {
  const title = build(pair.first);
  const content = build(pair.second);
  return new Message(title, content);
}
