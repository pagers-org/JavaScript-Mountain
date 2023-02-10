## 📝 2차 3주차 퀴즈

### 빈 칸 채우기

ex) 스터디 리더는 (양아름) 입니다.

1. 이터레이터와 제너레이터는 ES(6)에 새로 생긴 문법이다.
2. 열거 가능한 객체는 자바스크립트의 배열, (문자열), (Map, Set, DOM Collection) 등 순회할 수 있는 객체이다.
3. 이터러블 객체의 특징은 (next(() 메서드를 실행하기 전까지 다른 것을 실행하지 않는것)이다.
4. 제너레이터는 (실행 도중에 잠시 멈췄다 다시 실행할 수 있는 독특한 ) 함수이다.
5. async-await는 ES(7)에 새로 생긴 문법이다.

### O / X 퀴즈 (만약 X라면 이유도 작성하면 좋아요!)

ex) 스터디는 매주 목요일마다 진행됩니다.  
X, 매주 금요일마다 진행됩니다.

1. for-of는 이터러블 객체를 순회할 수 있다.  
   **답**: O
2. 이터러블 객체와 이터레이터 객체는 동일하다.  
   **답**: X
3. 이터러블 객체를 생성하기 위해선 `next()` 메서드와 done, value 프로퍼티가 있어야 한다.  
   **답**:O
4. async 함수는 버전에 관계 없이 모든 브라우저에서 사용할 수 있다.  
   **답**:X
5. 제너레이터는 화살표 함수로도 구현할 수 있다.  
   **답**:O
6. for-in을 사용하게 되면 인덱스를 숫자 타입이 아닌 문자열 타입으로 가져오게 된다.  
   **답**:O

### 코드 퀴즈

1. 다음 코드가 실행되면 콘솔창에 적힐 값을 예상해보세요.  
   **답**:
Listener1 -> MicroTask 1 -> Listener 3 -> MicroTask 2 -> Listener4

```javascript
const button = document.getElementById('run');

button.addEventListener('click', () => {
  console.log('Listener 1');
  Promise.resolve().then(() => {
    console.log('MicroTask 1');
  });
  console.log('Listener 2');
});
button.addEventListener('click', () => {
  console.log('Listener 3');
  Promise.resolve().then(() => {
    console.log('MicroTask 2');
  });
  console.log('Listener 4');
});

button.click(); // 해당 함수를 통해 클릭 이벤트를 실행할 수 있다 가정
```

2. 다음 코드의 실행 결과를 예측해보세요.  
   **답**:
1  2
```javascript
let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});

promise.then((value) => console.log(value));
```

3. 빈 칸에 코드를 작성하여 해당 함수가 정상적으로 작동되도록 만들어주세요.
   > **요구 사항**  
   > delay 함수에 작성한 숫자만큼 **Promise 객체를 이용**하여 시간을 지연한 후 `5초 후 실행` 문구를 콘솔에 출력해주세요.

```javascript
function delay(ms) {
  // 여기에 코드 작성
  let promise = new Promise(function (resolve) {
    resolve()
  })
  return promise
}
delay(5000).then(() => console.log('5초 후 실행'));
```
