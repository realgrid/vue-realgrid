# vue-realgrid

`vue-realgrid`는 RealGrid Js 라이브러리를 Vue.js에서 사용하기 위한 Helper 패키지 입니다.

## RealGridJS 객체

리얼그리드 도움말의 [RealGridJS 설치하기](http://help.realgrid.com/tutorial/a1/) 에 보면 RealGrid를 설치하는 방법이 정리되어 있습니다.

Vue.js 에서 RealGrid를 사용하기 위해 동일한 방법으로 페이지에 `<script>` 태그를 사용하여 RealGrid 라이브러리 파일을 import 합니다.

**sample index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="./realgridjs-lic.js"></script>
    <script type="text/javascript" src="./lib/realgridjs_eval.1.1.29.min.js"></script>
    <script type="text/javascript" src="./lib/realgridjs-api.1.1.29.js"></script>
    <title>sample1</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/dist/build.js"></script>
  </body>
</html>
```

위와 같이 RealGrid 파일들이 모두 import 되면 전역적 컨텍스트에 `RealGridJS` 라는 이름의 객체가 정의됩니다. 그러므로 JavaScript 코드의 어떤 부분에서든 RealGrid 객체를 생성 할 수 있습니다.

하지만 편의를 위해 Vue.js 에서 사용할 수 있는 컴포넌트를 설치 하여 사용할 수도 있습니다.

## vue-realgrid 설치

`npm install --save @realgrid/vue-realgrid`