# Vue RealGrid Sample 2

## 개요

- `vue-realgrid` 패키지를 설치하고 `RealGrid` 컴포넌트를 통해 RealGrid를 사용해 본다.

### Vue 설치

[`vue cli`](https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui) `init` 를 통해 `webpack-simple` 템플릿 생성

``` bash
vue init webpack-simple sample2
```

### RealGrid 설치

realgrid는 도움말의 [RealGridJS 설치하기](http://help.realgrid.com/tutorial/a1/) 를 보면서 설치한다.

RealGrid 관련 파일들은 `/lib`폴더에 복사한다.

``` html
    <script type="text/javascript" src="./lib/realgridjs-lic.js"></script>
    <script type="text/javascript" src="./lib/realgridjs_eval.1.1.29.min.js"></script>
    <script type="text/javascript" src="./lib/realgridjs-api.1.1.29.js"></script>
```

### vue-realgrid 설치

`vue-realgrid` 는 Vue.js에서 RealGrid를 사용하기 위한 npm package로 설치는 아래와 같이 한다.

``` bash
npm install --save @realgrid/vue-realgrid
```

### RealGrid 컴포넌트 사용하기

Vue instance에서 RealGrid 컴포넌트를 사용할 수 있다.

#### template

``` html
<template>
    ...
    <RealGrid grid-id="realgrid1"
      grid-root="/lib"
      @rendered="gridRendered">
    </RealGrid>
    ...
</template>
```

##### props & events

- grid-id: RealGrid 생성 ID, 여러개의 RealGrid를 한 페이지에서 사용할 경우 개별 ID로 구분해야 한다.
- grid-root: `assets`폴더가 있는 경로를 입력해야 한다.
- @rendered: RealGrid가 렌더링된 후 발생하며 `dataProvider` 객체와 `gridView` 객체를 인자로 반환한다.

#### script

RealGrid 컴포넌트가 생성되면 `@rendered` 이벤트가 발생한다. 이 이벤트에서 `dataProvider` 와 `gridView` 객체를 받아서 그리드의 기능을 처리할 수 있습니다. 자세한 내용은 [리얼그리드 도움말 사이트](http://help.realgrid.com)와 [데모사이트](http://demo.realgrid.com)를 참고하세요.

``` js
<script>
    ...
    methods: {
        ...
        gridRendered(provider, view) {
            RealGridJS.setRootContext("/");

            this.dataProvider = provider;
            this.gridView = view;

            // 이벤트 처리
            this.dataProvider.onRowInserted = this.onRowInserted;
            this.gridView.onDataCellClicked = this.onDataCellClicked;
        },
        ...
    }
    ...
</script>
```