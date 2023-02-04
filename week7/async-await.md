# async-await

> **Create Date**: 2023/01/30  
> **Update Date**: 2023/01/30
>
> [자바스크립트 등반 스터디](https://github.com/FECrash/JavaScript-Mountain) 발표 자료입니다.

async-await는 ES2017에 표준으로 정의되었습니다.

- **기존 Promise와 이터레이터/제너레이터는 언제 표준으로 정의되었나요?**
  - ES6, ES2015

## async-await이 만들어진 배경

async-await 이전엔 Promise(이하 프로미스)가 있었습니다.  
프로미스를 사용하여 콜백 지옥은 해결하였으나 사용을 하다보니 문제점이 보였습니다.

```jsx
function fetchAuthorName(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => post.userId)
    .then((userId) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((user) => user1.name); // 8번째 줄
    });
}

fetchAuthorName(1).then((name) => console.log('name:', name));
```

### 디버깅

8번째 줄에서 오타를 작성했습니다.

에러 메세지를 보게 되면 명확하다 느끼실 수 있지만, 아래있는 위치를 통해 에러를 수정하기가 어려워집니다.

```jsx
ReferenceError: user1 is not defined
    at fetch.then.then.then.then.then (<anonymous>:7:29)
```

### 예외 처리

위 코드에서 `catch` 예외 처리가 되지 않은 메서드가 어디있을까요?  
정확하게 찾으신 분도 계시겠지만 코드가 길어지면 파악하기 어려워집니다.

빼먹고 예외 처리를 하지 않은 구문에 예외가 생긴다면… 그 때 상황은 장담할 수 없습니다.

## async-await가 프로미스의 문제를 해결하다.

이런 점을 해결하기 위해 async-await가 추가되었습니다.  
해당 키워드를 사용하면 비동기 코드를 동기 코드처럼 보이게 작성할 수 있습니다.

```jsx
async function fetchAuthorName(postId) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();
  const userId = post.userId;
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await userResponse.json();
  return user.name;
}

fetchAuthorName(1).then((name) => console.log('name:', name));
```

여기에서 한 가지 주의할 점은 `async` 키워드가 붙어있는 함수를 호출하면 Promise 객체를 생성하여 리턴하지 않아도 Promise 객체가 리턴됩니다.

따라서 함수의 호출부에 `then()` 메서드가 사용되는 것을 확인하실 수 있습니다.

### 예외 처리

async-await는 try-catch 구문을 이용해 예외 처리를 할 수 있습니다.

```jsx
async function fetchAuthorName(postId) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();
  const userId = post.userId;

  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await userResponse.json();
    return user.name;
  } catch (err) {
    console.log('Faile to fetch user:', err);
    return 'Unknown';
  }
}

fetchAuthorName(1).then((name) => console.log('name:', name));
```

## async-await의 치명적인 단점?!

async-await는 자바스크립트만의 전유물이 아니라 비동기 로직은 네트워크를 다루는 모든 언어에서 고민해왔습니다.

결과적으로 자바스크립트에는 `promise` , `generator` , `async-await` 가 새로운 스펙으로 추가되었지만 치명적인 단점이 있습니다.

바로 하위 버전의 브라우저에서는 사용할 수 없다는 것입니다.

다행히 Babel 같은 컴파일러(트랜스파일러라고도 부름)를 이용하여 ES5 문법으로 `async-await` 를 구현할 수 있습니다. 여기에서 `generator` 와 `promise` 가 사용됩니다.

> 🙂 바벨은 성서에 나오는 바벨탑의 이름을 따서 지어졌으며 건축자들이 사용하는 많은 언어로 인한 혼란이나 오해를 상징합니다.  
> 이는 서로 다른 언어 버전 간의 격차를 해소하고 개발자가 서로 다른 환경에서 실행할 수 있는 코드를 작성하는 데 도움을 주는 JavaScript 컴파일러로서의 Babel의 역할을 반영합니다.

Babel을 이용하여 변환한 코드입니다.

```jsx
// ES7
async function foo() {
  await bar();
}

// ES5 complied
let foo = (() => {
  var _ref = _asyncToGenerator(function* () {
    yield bar();
  });

  return function foo() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function (value) {
              step('next', value);
            },
            function (err) {
              step('throw', err);
            }
          );
        }
      }
      return step('next');
    });
  };
}
```

정리하자면 generator는 비동기적 패턴을 yield를 통해 동기적인 “모습"으로 바꾸어주고,
promise는 generator로 만든 iterator를 반복해서 실행해주는 역할을 합니다.

## 참고 자료

- [https://medium.com/@la.place/async-await는-어떻게-구현하는가-fa08a3157647](https://medium.com/@la.place/async-await%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94%EA%B0%80-fa08a3157647)
- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)
- [https://www.daleseo.com/js-async-async-await/](https://www.daleseo.com/js-async-async-await/)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
