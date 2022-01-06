//Modules
/** A TypeScript module can contain both declarations and code. A module executes within its own scope,
 not in the global scope. It means that when you declare variables, functions, classes, interfaces,
 etc., in a module, they are not visible outside the module unless you explicitly export them using export statement.

 On the other hand, if you want to access variables, functions, classes, etc., from a module, you need to import them using the import statement.

 Like ES6, when TypeScript file contains a top-level import or export, it is treated as a module.
 */

//first import EmailValidator1
import {EmailValidator1} from './emailValidator';

let email1 = 'john.doe@typescripttutorial1.net';
let validator1 = new EmailValidator1();
let result1 = validator1.isValid(email1) + ', ' + 1+email1;

console.log(result1);

//second import EmailValidator2
import {EmailValidator2} from './emailValidator';

let email2 = 2 + email1;
let validator2 = new EmailValidator2();
let result2 = validator2.isValid(email2) + ', ' + email2;

console.log(result2);

//third import EmailValidator3
import {EmailValidator3} from './emailValidator';

let email3 = 3 + email1;
let validator3 = new EmailValidator3();
let result3 = validator3.isValid(email3) + ', ' + email3;

console.log(result3);

//import types from Types.ts
import type {alphanumeric} from './types';
import {alphanumeric as alphanumeric1} from './types';

/** Importing everything from a module

    To import everything from a module, you use the following syntax:

    import * from 'module_name';
    */

//Re-exports
export * from "./emailValidator";
export * from "./zipCodeValidator";

//Default Exports
import ZipCodeValidator4 from './zipCodeValidator';

let validator4 = new ZipCodeValidator4();
let result4 = validator4.isValid('95134') + ', ' + email1;

console.log(result4);