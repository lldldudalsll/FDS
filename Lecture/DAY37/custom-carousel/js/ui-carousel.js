/*! ui-carousel.js © yamoo9.net, 2016 */

// 자바스크립트가 지원되는 환경 임을 식별할 수 있는 모듈
(function(global){
  'use strict';

  // <html> 요소를 찾아서 class 속성에서 'no-js' 값을 'js'로 변경
  global.html = query('html');

  if ( html.classList ) {
    // 신형 방식 IE 10+
    html.classList.remove('no-js');
    html.classList.add('js');
  } else {
    // 구형 방식
    var html_class_attr = html.getAttribute('class');
    // 설정
    html.setAttribute('class', html_class_attr.replace(/no-js/,'js'));
  }

}(this));

// UI Carousel 컴포넌트(Component) 제작
(function(global){
  'use strict';

  // -----------------------------------------------------
  // 1. [절차 지향] 함수 형 방식으로 진행
  // -----------------------------------------------------
  // 1.1 컴퍼넌트 분석
  // 애플리케이션 초기화
  //  해당 요소를 컴포넌트 화
  //  요소의 클래스 설정
  //  버튼을 동적으로 생성
  //  버튼 이벤트 핸들링
  // 핸들러 작성
  //  콘텐츠 래퍼를 이동 기능
  // 1.2 기능 설계
  // 1.3 기능 구현
  // 1.4 테스트
  // 1.5 빌드(배포)

  // 애플리케이션 초기화
  function init(selector) {
    // 캐로셀 컴포넌트로 설정할 요소에 스타일 식별자 class 속성 설정
    var carousel = query(selector);
    // var carousel = query('article');
    // 기존 carousel 참조 문서 객체의 class 속성 값을 메모리
    // 객체.속성 방식을 사용하여 메모리
    carousel.origin_class = carousel.getAttribute('class') || '';
    carousel.setAttribute('class', (carousel.origin_class + ' ui-carousel').trim() );
    // WAI-ARIA 설정
    carousel.setAttribute('role', 'application');
    carousel.setAttribute('aria-label', 'Demonstration UI Carousel Component');

    // ------------------------------------------------------------------------------
    // 래핑 요소를 생성
    var carousel_contents_wrapper = createNode('div');
    // 래핑 요소에 클래스 속성 설정
    carousel_contents_wrapper.setAttribute('class', 'ui-carousel--content__wrapper');
    // 래핑 요소에 WAI-ARIA 속성 설정
    carousel_contents_wrapper.setAttribute('role', 'group');
    // 캐로셀 콘텐츠 래핑
    var carousel_contents = makeArray( queryAll(selector + '> *') );
    carousel_contents.forEach(function(content, index) {
      // 자식 요소에 class 속성 설정
      content.setAttribute('class', 'ui-carousel--content');
      // 자식 요소의 내부에서 제목 요소를 찾아 class 속성 설정
      var headline = query('h2', content);
      headline.setAttribute('class', 'ui-carousel--content__headline');
      // 래핑 요소에 자식 요소로 삽입
      carousel_contents_wrapper.appendChild(content);
    });
    // 캐로셀 컴포넌트의 첫번째 자식 요소로 삽입
    prependChild(carousel, carousel_contents_wrapper);

    // ------------------------------------------------------------------------------
    // 버튼 그룹과 버튼 요소들을 동적으로 생성
    var button_group = createNode('div');
    // 버튼 그룹에 class 식별자 설정
    button_group.setAttribute('class', 'ui-carousel--navigation__buttons');
    button_group.setAttribute('role', 'group');
    // 버튼 생성
    var prev_button = createNode('button');
    prev_button.setAttribute('type', 'button');
    var next_button = prev_button.cloneNode();
    console.log(prev_button, next_button);

  }

  // 초기화 실행
  init('.main-ad-area');

})(this);




(function(global){
  'use strict';

  // -----------------------------------------------------
  // 2. [객체 지향] 커스텀 객체 형태로 변경
  // -----------------------------------------------------
  // 2.1 객체 생성자 (ES 2015. class 제작)
  // 2.2 객체 생성자의 프로토타입 객체를 통해 공유할 수 있는 기능 정의
  // 2.3 정의된 기능 구현
  // 2.4 테스트
  // 2.5 빌드(배포)

})(this);