# 프로미스 (Promise)

> **Create Date**: 2023/01/31  
> **Update Date**: 2023/01/31
>
> [자바스크립트 등반 스터디](https://github.com/FECrash/JavaScript-Mountain) 발표 자료입니다.

이전 [Render Queue, Microtask Queue, Promise에 대하여](https://www.notion.so/Render-Queue-Microtask-Queue-Promise-54d79ca7f7bd42fc98a33b202a0ce03a) 글에 다뤘던 내용은 작성하지 않았습니다.

## Promise란?

당장은 얻을 수 없지만 가까운 미래에 얻을 수 있는 데이터에 접근하기 위한 방법을 제공합니다.

Promise(이하 프로미스)가 사용되는 경우는 I/O나 Network를 통해 데이터를 얻는 경우가 대표적인데 CPU에 의해 실행되는 코드 입장에서는 네트워크 요청은 엄청나게 긴 작업입니다.

그렇기에 Non-blocking 코드를 지향하는 자바스크립트에서는 비동기 처리가 필수적입니다.

## Promise 생성하기

프로미스를 new 연산자로 생성할 땐 생성자 함수에 `resolve` 와 `reject` 를 받을 수 있습니다.

```jsx
const promise = new Promise((resolve, reject) => { ... });
```

예를 들어 나눗셈 함수를 Promise로 구현하면 아래와 같습니다.

```jsx
const devide = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject(new Error('0으로 나눌 수 없습니다'));
    resolve(a / b);
  });
};

devide(8, 0)
  .then((result) => console.log('성공:', result))
  .catch((error) => console.error(error)); // [Error: 0으로 나눌 수 없습니다]
```

## Promise 관련 문제

### 두 번 resolve를 한다면?

아래 코드의 실행 결과를 예측해보세요.

```jsx
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
```

- **정답**
  1이 출력됩니다.
  첫 번째 `reject/resolve` 호출만 고려 대상이기에 두 번째 `resolve` 는 무시됩니다.

### 프로미스로 지연 만들기

내장 함수 `setTimeout`은 콜백을 사용합니다. 프라미스를 기반으로 하는 동일 기능 함수를 만들어보세요.

함수 `delay(ms)`는 프라미스를 반환해야 합니다.
반환되는 프라미스는 아래와 같이 `.then`을 붙일 수 있도록 `ms` 이후에 이행되어야 합니다.

```jsx
function delay(ms) {
  // 여기에 코드 작성
}

delay(3000).then(() => console.log('3초 후 실행'));
```

- **정답**
  ```jsx
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  delay(3000).then(() => console.log('3초 후 실행'));
  ```

## 참고 자료

- [https://www.daleseo.com/js-async-promise/](https://www.daleseo.com/js-async-promise/)
- [https://ko.javascript.info/promise-basics](https://ko.javascript.info/promise-basics)
