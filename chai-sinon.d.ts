// chai-sinon.d.ts
declare module 'chai' {
    interface Assertion {
        calledWith(...args: any[]): Assertion;
    }
}
