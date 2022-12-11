## 📝 1주차 퀴즈

### 빈 칸 채우기

ex) 스터디 리더는 (**양아름**) 입니다.

1. var는 (`global, function local scope`) Scope, let/const는 (`block, local, function local`) Scope를 가진다.
2. 세계 최초의 웹 브라우저는 (`WWW(Word Wide Web)`) 이다.
3. JavaScript의 초기 이름은 (`Moch`) 이며, (`브랜든 아이크`) 가 10일 만에 개발하였다.
4. ES6는 년도를 붙여 (`ES2015`) 라고 부르기도 한다.
5. ECMAScript 문서를 읽게 된다면, (`스크립팅 언어 개발`) 를 알 수 있고, JavaScript 문서를 읽게 된다면, (`JavaScript의 활용법`) 를 알 수 있다.

### O / X 퀴즈 (만약 X라면 이유도 작성하면 좋아요!)

ex) 스터디는 매주 목요일마다 진행됩니다.
X, 매주 금요일마다 진행됩니다.

1. var는 Block Scope를 가진다.  
   **답**: O

2. let은 ES6 이전에 만들어져 var와 구분없이 사용됐다.  
   **답**: X, ES6이전에는 var만 존재했으며 ES6부터 const와 let이 만들어졌다

3. const는 재할당이 가능하며, 재선언은 불가능하다.  
   **답**: X, const는 재할당이 불가하다. <br/>
   의문점: 브라우저의 콘솔창에서는 재선언이 가능한데 runJS에서는 재선언이 불가합니다. 혹시 이에 대해서 아시는 것이 있나요?<br/>
   ![스크린샷 2022-12-11 오후 1 15 06](https://user-images.githubusercontent.com/48895268/206887332-c7e360bb-795d-4bf9-b77d-996b4779a920.png)


4. ECMAScript는 Netscape에서 자체적으로 만들었다.  
   **답**: X, ECMAScript는 ECMA의 주도 하에 만들어진 스크립팅 언의 표준이다. ECMAScript의 규격에 따라 만들어진 것이 JS이다.

5. JScript와 JavaScript는 같은 언어이다.  
   **답**: X, JScript는 MS가 개발한 스크립팅 언어이며 JS는 Netscape가 개발한 스크립팅 언어이다.

### 코드 퀴즈

1. 아래 `console.log(fruit)`에서는 어떤 값이 출력될까요?

```javascript
let fruit = "apple";
let fruit = "orange";
console.log(fruit); // ?
```

**답**: SyntaxError: Identifier 'fruit' has already been declared. 또는 orange출력 ???? **위 OX퀴즈 3번의 의문점과 같습니다.**

2. 아래 `console.log(fruit)`에서는 어떤 값이 출력될까요?

```javascript
function printFruit() {
  var fruit = "pineapple";
  console.log(fruit); // ?

  if (true) {
    var fruit = "orange";
  }
  console.log(fruit); // ?
}
printFruit();
```

**답**: pineapple그리고 orange. Var는 function local scope를 가지고 있어서 처음에는 'pineapple'이 출력되지만 뒤 조건문에서 var는 재선언이 가능하고 block에서는 선언이 불가능하니 그 윗단계인 function local에 있는 var furit를 대체하여 출력하게 된다.

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

**답**: -10. 왜냐하면 두 번쨰 var에서 block은 안 되니 그 상위 scope에 접근하여 재선언 및 재할당으로 -10으로 되고, b는 a의 값을 복사. 그러나 block안에서 할당된 `let b = -20`는 상위 scope에 영향을 주지 않기에 -10이 출력됨.
