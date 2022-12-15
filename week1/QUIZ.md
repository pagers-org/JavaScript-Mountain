## 📝 1주차 퀴즈

### 빈 칸 채우기

ex) 스터디 리더는 (**양아름**) 입니다.

1. var는 (```Global, Function/Local```) Scope, let/const는 (```Script, Function/Local, Block```) Scope를 가진다.
2. 세계 최초의 웹 브라우저는 (```WWW(World Wide Web)```) 이다.
3. JavaScript의 초기 이름은 (```Mocha```) 이며, (```브랜든 아이크```) 가 10일 만에 개발하였다.
4. ES6는 년도를 붙여 (```ES2015```) 라고 부르기도 한다.
5. ECMAScript 문서를 읽게 된다면, (```표준 스크립팅 언어```) 를 알 수 있고, JavaScript 문서를 읽게 된다면, (```스크립팅 언어의 사용법```) 를 알 수 있다.

### O / X 퀴즈 (만약 X라면 이유도 작성하면 좋아요!)

ex) 스터디는 매주 목요일마다 진행됩니다.
X, 매주 금요일마다 진행됩니다.

1. var는 Block Scope를 가진다.  
   **답**: X  
   var는 Global, Function/Local Scope를 가진다.

2. let은 ES6 이전에 만들어져 var와 구분없이 사용됐다.  
   **답**: X  
   let은 ES6 이후 var의 단점을 보안하기 위해 추가된 변수 선언 방식이다.

3. const는 재할당이 가능하며, 재선언은 불가능하다.  
   **답**: X  
   const는 재할당과 재선언, 둘다 불가능하다.

4. ECMAScript는 Netscape에서 자체적으로 만들었다.  
   **답**: X  
   ECMAScript는 Netscape가 Microsoft의 IE 독점을 막기 위해 Ecma International를 불러서 만든 표준화된 스크립트 프로그래밍 언어이다.

5. JScript와 JavaScript는 같은 언어이다.  
   **답**: X  
   JScript는 Microsoft, JavaScript는 Netscape가 개발한 스크립팅 언어이다.

### 코드 퀴즈

1. 아래 `console.log(fruit)`에서는 어떤 값이 출력될까요?

```javascript
let fruit = 'apple';
let fruit = 'orange';
console.log(fruit); // ?
```

**답**: SyntaxError  
let은 재선언이 불가능함으로 SyntaxError가 발생한다.

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

**답**: pineapple, orange  
var는 ```재선언```이 가능하고, ```Function Scope```를 따르기 때문에
if문 안에서 재선언이 되면서 fruit의 값은 ```orange```가 된다.

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

**답**: -10  
var는 Block Scope를 따르지 않기때문에 -10으로 재할당이 된다.  
let은 Block Scope를 따르기 때문에 {}(블럭) 안에서 -20으로 선언을 하더라도  
console.log(b)는 {}(블럭) 밖에서 찍기 때문에 -20은 유효범위를 벗어나 a와 같은 값이 -10이 출력된다.
