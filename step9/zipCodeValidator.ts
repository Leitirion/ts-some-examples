//first import Validator1
import { Validator1 } from './validator';

class ZipCodeValidator1 implements Validator1 {
    isValid(s1: string): boolean {
        const numberRegexp1 = /^[0-9]+$/;
        return s1.length === 5 && numberRegexp1.test(s1);
    }
}

export { ZipCodeValidator1 };

//second import Validator2
import { Validator2 } from './validator';

class ZipCodeValidator2 implements Validator2 {
    isValid(s2: string): boolean {
        const numberRegexp2 = /^[0-9]+$/;
        return s2.length === 5 && numberRegexp2.test(s2);
    }
}

export { ZipCodeValidator2 };

//third import StringValidator3
import { StringValidator3 } from './validator';

class ZipCodeValidator3 implements StringValidator3 {
    isValid(s3: string): boolean {
        const numberRegexp3 = /^[0-9]+$/;
        return s3.length === 5 && numberRegexp3.test(s3);
    }
}

export { ZipCodeValidator3 };

//fourth import Validator1
import { Validator1 as Validator4 } from './validator';

export default class ZipCodeValidator4 implements Validator4 {
    isValid(s1: string): boolean {
        const numberRegexp4 = /^[0-9]+$/;
        return s1.length === 5 && numberRegexp4.test(s1);
    }
}