// 상속(Inheritance)
// Class => 유산으로 내려주는 주요 기능
// 부모 <-> 자식


// 동물 전체에 대한 클래스
class Animal {
    // 생성자
    constructor (name) {
        this.name = name;
    }

    // 메서드
    speak () {
        console.log(`${this.name} says!`);
    }
}

class Dog extends Animal {
    // 부모에게서 내려받은 메서드를 재정의할 수 있음
    // = overriding
    speak() {
        console.log(`${this.name} barks!`)
    }
}

const cutyPuppy01 = new Dog('덤보');
cutyPuppy01.speak();
