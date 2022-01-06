//first import Validator1 and export EmailValidator1
import {Validator1} from './validator';

class EmailValidator1 implements Validator1 {
    isValid(s1: string): boolean {
        const emailRegex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex1.test(s1);
    }
}

export {EmailValidator1};

//second import Validator2, rename as StringValidator2 and export StringValidator2
import {Validator2 as StringValidator2} from './validator';

class EmailValidator2 implements StringValidator2 {
    isValid(s2: string): boolean {
        const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex2.test(s2);
    }
}

export {EmailValidator2};

//third import Validator3 and export EmailValidator3
import {StringValidator3} from './validator';

class EmailValidator3 implements StringValidator3 {
    isValid(s3: string): boolean {
        const emailRegex3 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex3.test(s3);
    }
}
export {EmailValidator3};