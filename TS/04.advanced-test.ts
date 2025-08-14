class Person{
    constructor(public name:string, private age:number,
        private readonly addreses:string){
        }
        introduction(){
            console.log(`안녕 난 ${this.name}이라고 해. ${this.addreses}에 살고 나이는 ${this.age}야.`)
        }
}
const mkm:Person = new Person('mkm',14,'서울')
mkm.introduction(); // 안녕 난 mkm이라고해. 서울에 살고 나이는 14야.

// 2
abstract class Pet{
    constructor(public kind:string, public name:string){

    }
    abstract info();
}
class Hamster extends Pet{
    constructor(public kind:string, public name:string, public food?:string){
        super(kind,name);
    }
    info(){
        // 이 햄스터는 페디그리 햄스터종이며, 이름은 햄찌입니다.
        // 주식은 해바라기씨를 먹습니다.
        console.log(`이 햄스터는 ${this.kind}종이며, 이름은 ${this.name}입니다.`);
        this.food && console.log(`주식은 ${this.food}를 먹습니다.`)
    }

}
const hamzzi:Hamster = new Hamster('페디그리 햄스터', '햄찌', '해바라기씨');
hamzzi.info();
// 이 햄스터는 페디그리 햄스터종이며, 이름은 햄찌입니다.
// 주식은 해바라기씨를 먹습니다.

const podong:Hamster = new Hamster('골든 햄스터', '포동');
// 이 햄스터는 골든 햄스터종이며, 이름은 포동입니다.

// 실습문제 3)  다음 함수를 완성하시오
// 매개변수의 item에 전달되는 값은  반드시 length 속성이 존재해야 합니다.
// 매개변수가 전달되지 않을 경우 기본타입은 {length: 0}으로 설정합니다.
// item이 null혹은 undefined인 경우 value에는 기본타입과 동일한 값을 저장합니다. 
// item이 null혹은 undefined가 아닌 경우 value에는 item값이 그대로 저장됩니다.

// type MustLength = {length:number}
function print<T extends { length: number } = { length: 0 }>(item?: T): void {
    const value = item ?? { length: 0 } as { length: number };
    console.log(value.length);
}
print("hello"); // 5
print([1, 2, 3]); // 3
print({length : 100}); // 100
print(); // 0
//print(123); // 컴파일에러발생.

export default print;