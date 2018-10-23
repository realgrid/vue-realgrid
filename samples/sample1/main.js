Vue.component('realgrid', {
    template: `
    <div>
        <div id="realgrid" style="width: 100%; height: 200px;"></div>
    </div>
    `,
    mounted() {
        RealGridJS.setRootContext("/lib");
        this.dataProvider = new RealGridJS.LocalDataProvider();
        this.gridView = new RealGridJS.GridView("realgrid");
        this.gridView.setDataSource(this.dataProvider);
    },
    data() {
        return {
            dataProvider: null,
            gridView: null,
        }
    }
})

var app = new Vue({
    el: '#app',
});
