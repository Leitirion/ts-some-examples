//first export
export interface Validator1 {
    isValid(s1: string): boolean
}

//second export
interface Validator2 {
    isValid(s2: string): boolean
}

export {Validator2};

//third export and rename Validator2 as StringValidator
interface Validator3 {
    isValid(s3: string): boolean
}

export {Validator3 as StringValidator3};