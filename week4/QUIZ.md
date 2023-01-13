## 📝 4주차 퀴즈

### 빈 칸 채우기

ex) 스터디 리더는 (양아름) 입니다.

1. 객체를 생성하게 되면 자신만의 프로퍼티를 가지는 것 외 ()라고 불리는 다른 객체에서 프로퍼티를 상속하기도 한다.
2. 선언 당시의 환경(스코프)에 대한 정보를 담은 객체를 ()라고 한다.
3. 한 번 정의하면 몇 번이고 호출할 수 있는 자바스크립트 코드 블록을 ()이라 한다.
4. 자신이 생성될 때의 환경(스코프)를 기억하는 함수를 ()라고 한다.
5. 함수 안에 함수를 적용하는 방식을 ()라고 한다.
6. 화살표 함수는 자신이 정의된 환경의 ()키워드 값을 상속한다는 특징을 가지고 있다.
7. 이전에 계산된 결과를 캐시하여 동일한 상황에 같은 계산을 반복하지 않고 이전 값을 사용하는 것을 ()이라 한다.
8. new Date()를 선언하면 Date.prototype, Object.prototype 순으로 연결되어 있는데 이것처럼 프로토타입 객체 사이의 연결을 ()이라 한다.

### O / X 퀴즈 (만약 X라면 이유도 작성하면 좋아요!)

ex) 스터디는 매주 목요일마다 진행됩니다.
X, 매주 금요일마다 진행됩니다.

1. 화살표 함수는 함수 선언문이다.
   **답**:

2. 자바스크립트의 일부 함수만 클로저이다.
   **답**:

3. 프로토타입 객체와 `__proto__`는 같은 단어이다.
   **답**:

4. constructor와 `__proto__`는 같은 단어이다.
   **답**:

5. 클로저를 사용하면 변수를 비공개 상태로 사용할 수 있는데 함수 호출 시점의 로컬 변수를 캡처하기 때문이다.
   **답**:

### 코드 퀴즈

1. 객체를 생성하는 3가지 방법을 모두 이용해 간단히 코드로 구현해보세요!

```javascript
// 1) 객체 리터럴

// 2) new

// 3) Object.create()
```

2. subject 변수를 매개변수로 받은 math, english 값으로 변경하려 합니다. 주석으로 표현한 빈칸을 직접 채워보세요!

```javascript
let subject = {
  math: 80,
  english: 90,
};

const setSubject = (math, english) => {
  // 여기에는 어떤 코드가 들어갈까요?
  // 힌트: 객체에서 다룬 TMI를 확인해보세요!
};

setSubject(40, 99);
```

3. 아래 코드에서 출력될 답안을 작성해보세요!

```javascript
const today = new Date();
console.log(today.__proto__); //답:
console.log(today.constructor); //답:

const copy = today;
console.log(typeof copy); //답:

console.log(copy.prototype === Date().prototype); //답:
```

4. 클로저를 이용하여 private method를 만드려 합니다. 주석으로 표현한 빈칸을 채워보세요!

```javascript
function counter() {
  let privateTarget = 0;
  const changeBy = (value) => {
    privateTarget += value;
  };

  return {
    increment: function () {
      // 여기에는 어떤 코드가 들어갈까요?
    },
    decrement: function () {
      // 여기에는 어떤 코드가 들어갈까요?
    },
    value: function () {
      return privateTarget;
    },
  };
}

const countTest = counter();
console.log(countTest.value()); // => 0
countTest.increment();
countTest.increment();
console.log(countTest.value()); // => 2
countTest.decrement();
console.log(countTest.value()); // => 1
```
