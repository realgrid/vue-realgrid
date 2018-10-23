<template>
  <div id="app">
    <RealGrid grid-id="realgrid1"
      grid-root="/lib"
      @rendered="gridRendered"
      class="grid">
    </RealGrid>
  </div>
</template>

<script>
import RealGrid from '@realgrid/vue-realgrid';

export default {
  name: 'app',
  components: {
    RealGrid
  },
    data() {
    return {
        dataProvider: null,
        gridView: null,
        messages: [],
    }
    },
    methods: {
    addMessage(msg) {
        this.messages.push(`[${new Date()}] ${msg}`);
    },
    // 그리드가 마운트 될때 매핑
    gridRendered(provider, view) {
        RealGridJS.setRootContext("/");

        this.dataProvider = provider;
        this.gridView = view;

        // 이벤트 처리
        this.dataProvider.onRowInserted = (pv, row) => {
        const values = pv.getRows(row);
        this.addMessage(`ADD ROW <${values}>`);
        }
    },
    setFields() {
        const fields = [
        {
            fieldName: "field1"
        },
        {
            fieldName: "field2"
        }
        ];
        this.dataProvider.setFields(fields);
    },
    setColumns() {
        const columns = [
        {
            name: "col1",
            fieldName: "field1",
            header : {
            text: "컬럼1"
            },
            width: 200
        },
        {
            name: "col2",
            fieldName: "field2",
            header : {
            text: "컬럼2"
            },
            width: 200
        }
        ];
        this.gridView.setColumns(columns);
    },
    addRow() {
        const rowCount = this.dataProvider.getRowCount();
        this.dataProvider.addRow({
        field1: `Field1 Value:${rowCount}`,
        field2: `Field2 Value:${rowCount}`,
        });
    },
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
