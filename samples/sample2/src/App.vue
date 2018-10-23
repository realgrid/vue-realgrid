<template>
  <div id="app">
    <div class="button-group">
      <button @click="setFields">Set Fields</button>
      <button @click="setColumns">Set Columns</button>
      <button @click="addRow">Add Row</button>
    </div>
      
    <RealGrid grid-id="realgrid1"
      grid-root="/lib"
      @rendered="gridRendered"
      class="grid">
    </RealGrid>

    <div v-show="messages.length > 0" class="message-box">
      <h3>Event Messages</h3>
      <p v-for="(msg, index) in messages" :key="index">
        {{ msg }}
      </p>
    </div>
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
            this.messages.push(`${msg}`);
        },
        // 행 추가 이벤트 처리
        onRowInserted(provider, row) {
            const values = provider.getRows(row);
            this.addMessage(`[EVENT] onRowInserted <${values}>`);
        },
        // 셀 클릭 이벤트 처리
        onDataCellClicked(grid, index) {
            this.addMessage(`[EVENT] onDataCellClicked <${JSON.stringify(index)}>`)
        },
        // 그리드가 마운트 될때 매핑
        gridRendered(provider, view) {
            RealGridJS.setRootContext("/");

            this.dataProvider = provider;
            this.gridView = view;

            // 이벤트 처리
            this.dataProvider.onRowInserted = this.onRowInserted;
            this.gridView.onDataCellClicked = this.onDataCellClicked;
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
.grid {
  margin-top: 10px;
}

.button-group {
  margin: 10px 0;
}

.message-box {
  line-height: 0.3em;
}
</style>
