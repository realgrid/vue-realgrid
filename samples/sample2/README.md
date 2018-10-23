# Vue RealGrid Sample 2

## 개요

- `vue-realgrid` 패키지를 설치하고 `RealGrid` 컴포넌트를 통해 RealGrid를 사용해 본다.

## Vue 설치

[`vue cli`](https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui) `init` 를 통해 `webpack-simple` 템플릿 생성

## RealGrid 설치

realgrid는 도움말의 [RealGridJS 설치하기](http://help.realgrid.com/tutorial/a1/) 를 보면서 설치한다.

RealGrid 관련 파일들은 `/lib`폴더에 복사한다.

``` html
    <script type="text/javascript" src="./lib/realgridjs-lic.js"></script>
    <script type="text/javascript" src="./lib/realgridjs_eval.1.1.29.min.js"></script>
    <script type="text/javascript" src="./lib/realgridjs-api.1.1.29.js"></script>
```

## vue-realgrid 설치

`vue-realgrid` 는 Vue.js에서 RealGrid를 사용하기 위한 npm package로 설치는 아래와 같이 한다.

``` bash
npm install --save @realgrid/vue-realgrid
```

## RealGrid 컴포넌트 사용하기

Vue instance에서 RealGrid 컴포넌트를 사용할 수 있다.

### template

``` html
<template>
    ...
    <RealGrid grid-id="realgrid1"
      grid-root="/lib"
      @rendered="gridRendered"
      class="grid">
    </RealGrid>
    ...
</template>
```