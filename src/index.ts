import { Observer } from "./classes/Observer.js";
import { Subject } from "./classes/Subject.js";

const subject = new Subject();

const observer1 = new Observer("Jeral");
const observer2 = new Observer("Silmi");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.setState(8);
// Jeral received data: 8
// Silmi received data: 8