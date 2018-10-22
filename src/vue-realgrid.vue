<script>
/* eslint-disable */

export default {
  name: 'RealGrid',
  props: {
    gridId: {
      type: String,
      required: true,
    },
    gridRoot: {
        type: String,
        required: true,
        default: '/'
    }
  },
  data() {
    return {
      dataProvider: null,
      gridView: null,
    }
  },
  mounted() {
    RealGridJS.setRootContext(this.gridRoot);

    this.dataProvider = new RealGridJS.LocalDataProvider();
    this.gridView = new RealGridJS.GridView(this.gridId);
    this.gridView.setDataSource(this.dataProvider);

    this.$emit('rendered', this.dataProvider, this.gridView);
  },
}
</script>

<template>
  <div :id="gridId" class="grid" ></div>
</template>

<style>
.grid {
  width: 100%;
  height: 200px;
}
</style>