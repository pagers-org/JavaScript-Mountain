# 호이스팅 / TDZ

> **Create Date**: 2022/12/09  
> **Update Date**: 2022/12/13
>
> [노션에서 확인하기](https://areumsheep.notion.site/TDZ-49306ff786c448e9aa66e7539ee2be3c)

호이스팅은 무엇일까요?
**변수 선언을 최상단으로 올리는 것입니다.** 라고 하기엔 설명이 부족해보입니다.

호이스팅이라는 단어가 일부러 붙여졌으니 좋은 뜻인걸까요?

## 프로그래밍 언어 개발자가 되어보기

만약 여러분들이 브랜든 아이크(JavaScript 창시자)라고 가정해봅시다.

새로 개발한 언어를 브라우저에서 동작시킬 수 있는 코드 실행기(인터프리터)를 개발해야 하는데 선언된 변수들을 어떻게 관리하는 것이 좋을까요?

```jsx
console.log(b);

var a = 1;
var b;
function test() {
  //...
}
```

코드 실행 전, 변수들을 한 번 스캔한 뒤에 저장소에 잠시 저장, 초기화를 해두고
코드를 실행할 때, 저장소에 담긴 변수를 불러와서 사용하는 **간단한 방법**으로 일단 시작해보는 건 어떨까요?

| a    | var      | 1         |
| ---- | -------- | --------- |
| b    | var      | undefined |
| test | function | //…       |

위 이야기를 듣자마자 ‘**저장소에 값을 미리 넣어놓는다면 코드 실행 후 변수 선언 전에 있는 코드는 문제가 있지 않을까?**’ 하는 생각을 하신 분들 대단하십니다!

이것이 바로 호이스팅입니다.
호이스팅이 되지 않게 막기 위해선 추가적인 기능이 필요합니다.

그렇게 ES6에서 추가적인 기능을 도입하여 let, const에 적용시킨 것입니다.

프로그래밍 언어 개발자가 되어 생각을 해보니 조금 쉽지 않나요?
이제 동작 방식에 대해 이야기를 해보겠습니다.

## 동작 방식

위에서 ES6에 추가적인 기능을 도입하여 let, const에게 적용시켰다고 하였습니다.
그렇다면 let, const는 호이스팅이 되지 않는 걸까요?

```jsx
const hello = 100;

function print1() {
  console.log(hello); // => 100
}

function print2() {
  console.log(hello); // => Cannot access 'hello' before initialization.

  const hello = 200;
}
```

위 코드는 const 선언문의 위치에 따라 에러가 발생하고 있습니다.
에러 문구를 좀 더 자세하게 보겠습니다.

> ⚠️ **ReferenceError: Cannot access 'hello' before initialization.**  
> ’hello’를 초기화하기 전에 접근할 수 없습니다.

const는 전에 재선언, 재할당이 되지 않는다 말씀드렸는데,
위 문구를 보면 **‘초기화 전 접근할 수 없다’**라고 표시되어 있습니다.

이 에러 문구에서 저희는 const, let도 호이스팅이 된다는 것을 확인할 수 있습니다.

위 코드는 이렇게 동작합니다.

1. 코드 실행 전, 선언문들을 **미리 저장소에 ‘이런 변수가 있어~’ 라고 선언**합니다.
2. global에 있는 hello는 `script scope`안에 선언됩니다.
3. print2 안에 있는 hello는 `function local scope`에 선언됩니다.

   ![이 사진은 8번째 줄에 debugger를 걸어 확인한 결과입니다. 
10번째 줄에 도달하지 않아도 undefined로 선언되어있습니다.](images/호이스팅-TDZ/Untitled.png)

   > 이 사진은 8번째 줄에 debugger를 걸어 확인한 결과입니다.  
   > 10번째 줄에 도달하지 않아도 undefined로 선언되어있습니다.

4. **선언문을 모두 저장하였으니 코드를 실행합니다.**
5. print1에서는 `script scope`에 있는 hello 변수값을 가져옵니다.
6. print2에서는 `function local scope`에 선언된 hello 값이 있기 때문에 그 값을 가져오려 시도합니다.
7. **어라…? 접근할 수 있는 권한이 아니네…? 🤔**
8. 접근할 수 없다고 에러를 표출합니다.

ES6에서는 7번의 변수를 사용할 수 없는 기능을 추가했습니다.
이것이 바로 **TDZ**(Temporal Dead Zone)입니다.

### var, let, const 변수 생성 과정

| var        | 선언 및 초기화 → 할당      |
| ---------- | -------------------------- |
| let, const | 선언 → TDZ → 초기화 → 할당 |

7~8번에서 오류가 발생했던 이유는 선언 단계를 거치고 hello 값이 **TDZ 단계에 머물러 있기** 때문입니다.

## TDZ(Temporal Dead Zone)

한 마디로 let, const에서 초기화 전에 변수를 사용할 수 없도록 **죽음의 공간**을 만들었습니다.
여기에 빠지면 모두 **Error**라는 무시무시한 형벌에 처해집니다.

![**출처**: [https://dmitripavlutin.com/javascript-variables-and-temporal-dead-zone/](https://dmitripavlutin.com/javascript-variables-and-temporal-dead-zone/)](images/호이스팅-TDZ/Untitled%201.png)

**출처**: [https://dmitripavlutin.com/javascript-variables-and-temporal-dead-zone/](https://dmitripavlutin.com/javascript-variables-and-temporal-dead-zone/)

## 코드 예시

```jsx
let guess;
console.log(guess); // ??? << 초기화 (빈 값일때는 undefined)

guess = 3;
console.log(guess); // ??? << 3
```

- **위의 ??? 에서는 어떤 값이 출력될까요?**
  undefined, 3

```jsx
let guess = 1;

{
  console.log(guess); // ???
  let guess = 2;
}
```

- **위의 ??? 에서는 어떤 값이 출력될까요?**
  `Cannot access 'guess' before initialization`

## TMI

호이스팅이 일어나는 상황은 총 3가지가 있습니다.

> **mdn의 한국어 문서에는 갱신되지 않은 내용입니다.**
>
> 1. Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
> 2. Being able to reference a variable in its scope before the line it is declared, without throwing a `ReferenceError`, but the value is always `undefined`. ("Declaration hoisting")
> 3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

번역해보면 다음과 같습니다. **(오역 주의)**

1. 변수가 선언되기 전에 해당 범위에서 변수의 값을 사용할 수 있다. (**"값 호이스팅"**)
2. `ReferenceError`를 발생시키지 않고 변수가 선언되기 전에 변수를 사용할 수 있지만 값은 항상 `undefined` 이다. (**"선언 호이스팅"**)
3. 변수를 선언하면 변수가 선언된 줄 앞에서 해당 범위의 동작이 변경된다. (TDZ)

- **저희가 배운 var와 let, const는 몇 번 상황에 해당할까요?**
  var는 2번, let과 const는 3번
  이제 저희는 1번의 상황에 대해 공부해보겠습니다.
  다음은 **표현식** 입니다.

이번 장에서는 여기까지만 알고 있어도 너무나 훌륭합니다!
코드 실행 전 미리 선언문을 저장하는 작업의 자세한 내용은 추후에 다시 이야기를 해보도록 하겠습니다.

스포: Execution Context

## 출처

- [https://developer.mozilla.org/en-US/docs/Glossary/Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [https://www.youtube.com/watch?v=AlcRl4pJd0c](https://www.youtube.com/watch?v=AlcRl4pJd0c)
- [https://www.youtube.com/watch?v=SBTyD_fLZnE](https://www.youtube.com/watch?v=SBTyD_fLZnE)
