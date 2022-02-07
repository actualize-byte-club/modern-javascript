/* global moment, dayjs */

import moment from "moment";
import dayjs from "dayjs";
import { sqrt } from "mathjs";
console.log(moment().format());
console.log(dayjs().format());
console.log(sqrt(-4).toString());

let name = "Bob";
let day = "Monday";

console.log(`Hello ${name}, how are you doing this ${day}?`);
