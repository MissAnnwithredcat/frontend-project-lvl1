#!/usr/bin/env node
import askNameUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const nameUser = askNameUser();

console.log(`Hello, ${nameUser}`);
