## 📝 1주차 퀴즈

### 빈 칸 채우기

ex) 스터디 리더는 (양아름) 입니다.

1. var는 () Scope, let/const는 () Scope를 가진다.
2. 세계 최초의 웹 브라우저는 () 이다.
3. JavaScript의 초기 이름은 () 이며, () 가 10일 만에 개발하였다.
4. ES6는 년도를 붙여 () 라고 부르기도 한다.
5. ECMAScript 문서를 읽게 된다면, () 를 알 수 있고, JavaScript 문서를 읽게 된다면, () 를 알 수 있다.

### O / X 퀴즈 (만약 X라면 이유도 작성하면 좋아요!)

ex) 스터디는 매주 목요일마다 진행됩니다.
X, 매주 금요일마다 진행됩니다.

1. var는 Block Scope를 가진다.  
   **답**:

2. let은 ES6 이전에 만들어져 var와 구분없이 사용됐다.  
   **답**:

3. const는 재할당이 가능하며, 재선언은 불가능하다.  
   **답**:

4. ECMAScript는 Netscape에서 자체적으로 만들었다.  
   **답**:

5. JScript와 JavaScript는 같은 언어이다.  
   **답**:

### 코드 퀴즈

1. 아래 `console.log(fruit)`에서는 어떤 값이 출력될까요?

```javascript
let fruit = 'apple';
let fruit = 'orange';
console.log(fruit); // ?
```

**답**:

2. 아래 `console.log(fruit)`에서는 어떤 값이 출력될까요?

```javascript
function printFruit() {
  var fruit = 'pineapple';
  console.log(fruit); // ?

  if (true) {
    var fruit = 'orange';
  }
  console.log(fruit); // ?
}
printFruit();
```

**답**:

3. 아래 `console.log(b)`에서는 어떤 값이 출력될까요?

```javascript
var a = 10;
{
  var a = -10;
}

let b = a;
{
  let b = -20;
}

console.log(b); // ?
```

**답**:
