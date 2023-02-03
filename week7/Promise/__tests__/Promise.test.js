const { MyPromise } = require('../index');

function myPromiseFn() {
  return new MyPromise((resolve, reject) => {
    resolve('Promise 실행');
  });
}

describe('Promise 객체', () => {
  test('then 메서드 확인', () => {
    const testLogic = () => {
      myPromiseFn().then(result => console.log('then'));
    };

    const results = ['then'];

    jest.useFakeTimers();
    console.log = jest.fn();

    testLogic();

    setTimeout(() => {
      results.forEach(result => {
        expect(console.log).toHaveBeenCalledWith(result);
      });
    }, 1);

    jest.runAllTimers();
  });

  test('(종합) Promise가 우선순위에 의해 제대로 실행되는지', () => {
    const testLogic = () => {
      console.log('콜스택 실행 - 1');

      setTimeout(() => console.log('태스크 큐 실행'), 0);

      myPromiseFn()
        .then(result => console.log(result))
        .catch(result => console.log(result));

      console.log('콜스택 실행 - 2');
    };

    const results = ['콜스택 실행 - 1', '콜스택 실행 - 2', 'Promise 실행', '태스크 큐 실행'];

    jest.useFakeTimers();
    console.log = jest.fn();

    testLogic();

    setTimeout(() => {
      results.forEach(result => {
        expect(console.log).toHaveBeenCalledWith(result);
      });
    }, 1);

    jest.runAllTimers();
  });

  test('(종합) 프로미스 체이닝이 제대로 실행되는지 - 비동기로직', () => {
    jest.useFakeTimers();
    console.log = jest.fn();

    new MyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve('첫번째 프로미스');
      }, 1000);
    })
      .then(value => {
        console.log(value); // `첫번째 프로미스`
        return '두번째 프로미스';
      })
      .then(value => {
        console.log(value); // `두번째 프로미스`
      });

    setTimeout(() => {
      expect(console.log).toHaveBeenCalledWith('첫번째 프로미스');
      expect(console.log).toHaveBeenCalledWith('두번째 프로미스');
    }, 1001);

    jest.runAllTimers();
  });
});
