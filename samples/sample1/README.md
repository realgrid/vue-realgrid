# Vue RealGrid - sample 1

## 개요

- `script` 태그를 이용해 간단하게 설치하고 생성하는 방법을 테스트 해 본다.
- [http-server](https://www.npmjs.com/package/http-server)와 같은 간단한 테스트용 웹서버를 이용해 실행한다.

## vue 설치

vue 설치도 cdn을 통해 script 태그로 import 한다.

``` html
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## RealGrid 설치

realgrid는 도움말의 [RealGridJS 설치하기](http://help.realgrid.com/tutorial/a1/) 를 보면서 설치한다.

RealGrid 관련 파일들은 `/lib`폴더에 복사한다.

``` html
    <script type="text/javascript" src="./lib/realgridjs-lic.js"></script>
    <script type="text/javascript" src="./lib/realgridjs_eval.1.1.29.min.js"></script>
    <script type="text/javascript" src="./lib/realgridjs-api.1.1.29.js"></script>
```

## RealGrid 생성

Vue instance의 lifecycle hooks 중에서 `mounted()`에서 생성하는 것이 좋다.

``` js
    mounted() {
        RealGridJS.setRootContext("/lib");
        this.dataProvider = new RealGridJS.LocalDataProvider();
        this.gridView = new RealGridJS.GridView("realgrid");
        this.gridView.setDataSource(this.dataProvider);
    },
```