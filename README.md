# spring-boot-goohae

## 프로젝트명 : 1인 가구를 위한 가구 쇼핑몰
### 팀원 : 경진우, 유정현, 이해선, 하영권

<br/>
<br/>

### 개발 환경
* OS
  * window10, Mac OS
* Editor
  * Intellij, VScode

<br/>
  
### 형상관리
  * Git ( SourceTree 사용 )
  
<br/>

### front-end
  * Language - HTML5, CSS3, JavaScript(es6)
  * Framework - JQuery

### Back-end
  * Language - Java(8), MySQL
  * Framework - Spring-Boot(2.7.9), MyBatis

<br/>

### 역할분담

* 경진우
  * 관리자 기능
    * 로그인, 상품(등록, 삭제), 회원관리(조회, 삭제)
    * 게시글(조회, 등록, 수정, 삭제))
  * 사이트 메인
    * 메인페이지(홈), 서브페이지(카테고리별), 디테일 페이지(상품상세), 결제관련 페이지
  * DB
    * DB설계
    * DB구현

* 유정현
  * 회원
    * 등록, 삭제, 수정, 목록 조회, ID/PW찾기 및 수정
    * 위시리스트(추가, 등록, 삭제)
    * Q&A(등록, 삭제, 조회)
  * DB
    * DB설계
    * DB구현

* 이해선
  * 마이페이지
    * 장바구니(조회), 위시리스트(조회), 회원정보 수정, 리뷰(조회), 주문목록(조회)
  * 회원
    * 로그인, 회원가입, ID & PW찾기

* 하영권
  * 고객센터
    * 공지사항, Q&A(등록, 조회)
    
    
<br/>
<br/>
<br/>


### 프로젝트 회고 및 향후 계획

* 경진우
  * 느낀점
    * 원래 계획은 Front를 하고 싶어하는 사람과 Back을 하고싶어하는 사람으로 나뉘어서 React와 SpringBoot로 서버를 나누어 RestAPI를 구현하고자 했지만 React쪽의 진행이 
    많이 더뎌서 프로젝트 기간내에 완료가 힘들꺼 같다하여 일주일남은 상황에 급히 분리하지 않는 형태로 바꾸어 타임리프를 적용해서 하였는데 사실 이 모든게 핑계일수도 있지만
    아쉬운 부분이 너무 많았다. 계속 React를 고집해봤으면 어땠을까 하는 궁금증도 있고 Front쪽 사람들이 고생을 많이 한것도 알고 있어서 너무 아쉬움이 큰 프로젝트였다.
    모두가 처음 웹개발을 접하고 프로젝트를 진행하는거라 많이 버벅거린 부분이 많아서 시간도 많이 지연되고 계획했던 부분대로 진행하지 못하고 눈앞에 있는 것만 보면서
    진행을 하다보니 계획, 설계에 대한 중요성도 뼈저리게 느낀 프로젝트였다.
  * 향후 계획
    * 많은 기능을 구현하지 못했는데 쇼핑몰 프로젝트를 처음부터 다시 진행하면서 구현하지 못한 기능과 DB에 대한 공부도 다시 하면서 전에 놓쳤던 부분이나 개선할 수 있는 부분들을
    찾으며 공부할 계획이다.
<br/>

* 유정현
  * 느낀점
    * 프론트와 백엔드를 나눠서 진행하는 것은 처음이라 협업이라는 것이 어떤건지 느꼈고, 그 외 필요한 사항들이 있음을 알게되었습니다. 첫번째로 일정관리와 목표설정에 대한 문제였습니다.
    FE와 BE가 공유하고 함께하는 최종목표에 대한 기한, 조건들을 서로 잘 확인했어햐 했던 것 같습니다. 두번째로는 원할한 의사소통입니다. 소통을 많이 했지만, 기록을 빼먹을 때면 해당
    질문을 다시 또 하면서 시간로스가 많이 발생했습니다. 이런일이 발생하지 않도록 프로젝트 관련사항을 기록하는 페이지 등이 있으면 어땠을까 하는 아쉬움이 남습니다. 
    세번째로는 몰입입니다. 마지막 처음에 진행하던 리액트 적용을 포기하고 남은 6일의 기간동안 html/css/js를 이용해서 프로젝트를 진행하였는데 개인적으로 몰입해서 
    일을 했던것 같습니다. 단순히 결과물이 좋아서 몰입을 했다기 보다는 스스로 평소에 못 했던 양을 그 시간안에 쳐내면서 몰입하는 기분을 많이 느꼈고, 일을 진행할 수 있었습니다.  
  * 향후 계획
    * 온전히 구현하지 못한부분들 리팩토링 작업을 진행하고, 각 코드 마다 주석을 달 예정입니다.
<br/>

* 이해선
  * 느낀점
    * 이전 1,2차 프로젝트에서는 페이지별로 분류하여 역할을 분담하였으나 최종프로젝트에서는 백과 프론트를 기준으로 분담하였습니다. 모든 프로젝트가 그렇겠지만 팀협업에서 의사소통이
      중요하다는 것을 다시금 느끼게 되는 계기가 되었습니다. 자신이 잘못 이해하고 있는건지 확인하고 기록하는 것이 팀협업의 기본임을 깨달았습니다. 또한 프론트에서의 문제를 해결하지 
      못한채로 시간을 지체하여 백앤드작업으로 빠르게 진입하지 못하고 경로를 틀게 된 것에 대해 많은 안타까움이 있었습니다. 보다 기본을 충실하게 쌓아 프로젝트에 임하는 사람이 되어야       한다고 느꼈습니다.
  * 향후 계획
    * 프론트와 백앤드의 전체적인 이해도를 높이기위해 전체적을 다시 코드르 작성해보고 미처 적용하지 못한 기능들을 추가하도록 하겠습니다 
<br/>


* 하영권
