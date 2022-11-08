#!/usr/bin/env node

import { askNameUser, askEvenNumber } from '../src/game-even.js';

console.log('Welcome to the Brain Games!');

const nameUser = askNameUser();

console.log(`Hello, ${nameUser}`);

console.log(askEvenNumber());
