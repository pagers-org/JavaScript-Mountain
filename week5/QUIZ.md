## 📝 2차 1주차 퀴즈

### 빈 칸 채우기

**아래는 브라우저 동작 과정 순서를 설명하고 있습니다.  
빈 칸 안에 들어갈 단어를 고민하여 적어보세요!**

ex) 스터디 리더는 (양아름) 입니다.

1. Chrome의 주소창에 검색어를 입력하면 (Browser) Process의 (UI) Thread가 검색어인지 URL인지 판단해준다.
2. Network Thread가 HTML 파일을 응답받으면 (renderer) Process에게 넘기고, zip 파일인 경우 [= 앞에 명시된 process가 다룰 수 없는 데이터 형식인 경우] (download manager)에게 바로 데이터를 넘긴다.
3. Renderer Process는 받은 HTML 파일을 분석하여 (DOM으)로 변환하기 시작한다.
4. (DOM)은 페이지 내부를 표현한 것이며 JavaScript를 이용하여 상호 작용할 수 있도록 하는 데이터 구조이자 API 이다.
5. Main Thread는 HTML파일을 파싱하는 동안 리소스를 로드하는데 속도를 빠르게 하기 위해 (preload scanner)가 동시에 실행된다.
6. Main Thread는 CSS를 파싱하여 DOM 트리와 비슷한 (레이아웃 트리)를 그린다.
7. Main Thread는 요소의 크기, 위치, 모양 등을 갖는 (레이아웃) 단계에서 (레이아웃) 트리를 그린다.
8. DOM과 CSSOM을 렌더링 트리로 결합한다.
9. (레이아웃)은 요소의 기하학적 속성(geometry)를 찾는 과정이다.
10. (페인트단계)은 그리는 순서를 결정하는 과정이다. 레이아웃 트리를 기반으로 (페인트 레코드)를 만든다.

### O / X 퀴즈 (만약 X라면 이유도 작성하면 좋아요!)

ex) 스터디는 매주 목요일마다 진행됩니다.
X, 매주 금요일마다 진행됩니다.

1. Network Process에는 UI Thread가 있다.  
   **답**: X
   이유: UI Thread는 Browser Process에 속해있습니다.
   추가적으로, Browser Process는 주소 표시줄, 북마크 막대, 앞/뒤버튼등의 애플리케이션의 'chrome'부분을 제어합니다. 
   네트워크 요청이나 파일접근과 같이 눈에 보이지 않지만 권한이 필요한 부분도 처리합니다.
   Browser Process의 구성요소는 다음과 같습니다.
   - 브라우저의 버튼과 입력 창을 그리는 UI thread 
   - 인터넷에서 데이터를 받기 위해 네트워크 스택을 처리하는 network thread
   - 파일에 대한 접근을 제어하는 storage thread
    
2. Renderer Process에는 총 4개의 Thread가 있다.  
   **답**: O
   Renderer Process의 구성요소는 다음과 같습니다.
   - Main Thread : 브라우저로 전송된 대부분의 코드를 처리합니다.
   - Worker Thread : 웹 브라우저상의 javascript는 single thread이기 때문에, 한번에 하나의 일 밖에 처리하지못한다.
   그래서, 웹페이지에서 script가 실행되면, 해당 웹 페이지는 실행 중인 script가 종료될 때까지 응답 불가 상태, 즉 다른일을 처리할 수 없다.
   이대, web Worker를 사용하면 script의 multi thread가 가능하게되어 사용자의 UI를 방해하지않고 script처리가 가능해진다.
   - Compositor thread : 웹 페이지의 각 부분을 레이어로 분리해 별도로 래스터화하여 웹페이지로 합성을 담당하는 thread
   - Raster thread : 병렬적으로 이미지를 해석하고 공유되는 메모리에 적재

3. Chrome이 다중 프로세스 아키텍처를 사용하는 이유는 웹 브라우저 표준 사양이 있기 때문이다.  
   **답**: X
   Chrome이 다중 프로세스 아키텍처를 사용하는 이유는 다음과 같습니다.
   랜더러 프로세스를 하나 사용하는 경우 탭이 여러개 열려있다면, 각 탭은 하나의 프로세스를 바라보고 있어 한 탭이 응답하지않는다면 다른 탭도 응답하지않게된다.
   다중 프로세스는 모든 탭을 독립적인 랜더러 프로세스에 의해 실행되기때문에 다른탭에 영향을 받지않는다.
  
4. HTML에 이상한 태그(ex: `<h1>Hello</p>`)를 작성해도 정상적으로 DOM이 그려지는 건 표준 사양이 있기 때문이다.  
   **답**:O
   HTML Standard에서 오류를 정상적으로 처리되도록 설계하였기 때문입니다.
   
5. 레이아웃 트리는 페인트 레코드를 사용하여 만들어진다.  
   **답**: O
6. `visibility: hidden`은 레이아웃 트리에 그려지지 않는다.  
   **답**: X
   display: none 이 적용된 요소는 레이아웃 트리에 그려지지 않게 됩니다.
   visibility: hidden 은 레이아웃 트리에 그려집니다.
