## 📝 2차 1주차 퀴즈

### 빈 칸 채우기

**아래는 브라우저 동작 과정 순서를 설명하고 있습니다.  
빈 칸 안에 들어갈 단어를 고민하여 적어보세요!**

ex) 스터디 리더는 (양아름) 입니다.

1. Chrome의 주소창에 검색어를 입력하면 () Process의 () Thread가 검색어인지 URL인지 판단해준다.
2. Network Thread가 HTML 파일을 응답받으면 () Process에게 넘기고, zip 파일인 경우 [= 앞에 명시된 process가 다룰 수 없는 데이터 형식인 경우] ()에게 바로 데이터를 넘긴다.
3. Renderer Process는 받은 HTML 파일을 분석하여 ()로 변환하기 시작한다.
4. ()은 페이지 내부를 표현한 것이며 JavaScript를 이용하여 상호 작용할 수 있도록 하는 데이터 구조이자 API 이다.
5. Main Thread는 HTML파일을 파싱하는 동안 리소스를 로드하는데 속도를 빠르게 하기 위해 ()가 동시에 실행된다.
6. Main Thread는 CSS를 파싱하여 DOM 트리와 비슷한 ()를 그린다.
7. Main Thread는 요소의 크기, 위치, 모양 등을 갖는 () 단계에서 () 트리를 그린다.
8. [DOM과 CSSOM을 렌더링 트리로 결합](https://web.dev/critical-rendering-path-render-tree-construction/)한다.
9. ()은 요소의 기하학적 속성(geometry)를 찾는 과정이다.
10. ()은 그리는 순서를 결정하는 과정이다. 레이아웃 트리를 기반으로 ()를 만든다.

### O / X 퀴즈 (만약 X라면 이유도 작성하면 좋아요!)

ex) 스터디는 매주 목요일마다 진행됩니다.
X, 매주 금요일마다 진행됩니다.

1. Network Process에는 UI Thread가 있다.  
   **답**:
2. Renderer Process에는 총 4개의 Thread가 있다.  
   **답**:
3. Chrome이 다중 프로세스 아키텍처를 사용하는 이유는 웹 브라우저 표준 사양이 있기 때문이다.  
   **답**:
4. HTML에 이상한 태그(ex: `<h1>Hello</p>`)를 작성해도 정상적으로 DOM이 그려지는 건 표준 사양이 있기 때문이다.  
   **답**:
5. 레이아웃 트리는 페인트 레코드를 사용하여 만들어진다.  
   **답**:
6. `visibility: hidden`은 레이아웃 트리에 그려지지 않는다.  
   **답**:
