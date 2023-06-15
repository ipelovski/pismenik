import { build } from "./ast-builder.js";
import { Compiler } from "./compilerjs.js";
import { Key, Pair, Sending } from "./data.js";

const data = new Sending(new Pair(new Key('hello there'), new Pair(new Key('General Kenobi'), 5)));
const tree = build(data);
const text = new Compiler().visitSending(tree);
console.log('text', text);
