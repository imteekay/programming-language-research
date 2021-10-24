// The syntax T1 & T2 means "an object with all of the properties from both T1 and T2."
// The syntax T1 | T2 means "an object with at least one of the properties from T1 or T2."

type HasEmail = {
  email: string;
};

type CanBeAdmin = {
  admin: boolean;
};

type User = HasEmail & CanBeAdmin;
type EmailOrAdmin = HasEmail | CanBeAdmin;

let a: User = { email: 'test', admin: true };
let b: EmailOrAdmin = { email: 'test', admin: true };
let c: EmailOrAdmin = { email: 'test' };
let d: EmailOrAdmin = { admin: true };

// @ts-expect-error Type '{ admin: true; }' is not assignable to type 'User'.
// Property 'email' is missing in type '{ admin: true; }' but required in type 'HasEmail'.
let e: User = { admin: true };

// @ts-expect-error Type '{ email: string; }' is not assignable to type 'User'.
// Property 'admin' is missing in type '{ email: string; }' but required in type 'CanBeAdmin'.
let f: User = { email: 'test' };

// @ts-expect-error Type '{ bla: string; }' is not assignable to type 'EmailOrAdmin'.
// Object literal may only specify known properties, and 'bla' does not exist in type 'EmailOrAdmin'.
let g: EmailOrAdmin = { bla: 'test' };

// type intersection
let tk: User = {
  email: 'tk@example.com',
  admin: true,
};

function extractEmail({ email }: HasEmail): string {
  return email;
}

extractEmail(tk); // 'tk@example.com'

const numbers: number[] = [1, 2, 3];
const n: number = numbers[3];

// @ts-expect-error Type Type '{ email: string; }' is not assignable to type 'User'.
// Property 'admin' is missing in type '{ email: string; }' but required in type 'CanBeAdmin'
let amir: User = {
  email: 'amir@example.com',
};

amir.email;
