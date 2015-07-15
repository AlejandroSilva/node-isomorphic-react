'use strict';

var React = require('react');
var FixedDataTable = require('fixed-data-table');
var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

module.exports = React.createClass({

    getInitialState: function(){
        return {
            rows: [
                ['a1', 'b1', 'c1'],
                ['a2', 'b3', 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3'],
                ['a3', 'b3', 'c3']
            ]
        }
    },


    _rowGetter: function(rowIndex){
        //return this.state[rowIndex]
        return this.state.rows[rowIndex];
    },

    _footerGetter: function (rowIndex) {
        return 'adasd';
    },
    _renderFooter: function(a,b,c,d){
        return (
            <p>Footer :D {a}/{b}/{c}/{d}</p>
        )
    },

    _renderAdminCell: function(cellData, cellDataKey, rowData, rowIndex){
        return(
            <div>
                <button className="btn btn-small">Ver</button>
                <button className="btn btn-small primary">Modificar</button>
                <button className="btn btn-small danger">Eliminar</button>
            </div>
        )
    },
    _showColumnAdmin: function(){
        return (
            <Column
            label="Col 3"
            width={200}
            dataKey={2}
            flexGrow =  {2}
            cellRenderer = {this._renderAdminCell}
            />
        );
    },

    render: function () {
        return (
            <section className="spa-section">
                <div className="well clearfix">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci impedit nisi porro quas ratione sunt voluptates. Ab assumenda dolorem ipsa ipsum neque officiis perferendis qui quia, sed vel voluptatibus, voluptatum.</p>
                </div>

                <Table
                    rowHeight = {40}
                    rowGetter = {this._rowGetter}
                    rowsCount = {this.state.rows.length}
                    width = {800}
                    height = {600}
                    headerHeight = {30}
                    footerHeight = {30}
                    footerDataGetter = {this._footerGetter}
                    >
                    <Column
                        label="Col 1"
                        width={100}
                        dataKey={0}
                        footerRenderer = {this._renderFooter}
                        flexGrow =  {1}
                        />
                    <Column
                        label="Col 2"
                        width={100}
                        dataKey={1}
                        footerRenderer = {this._renderFooter}
                        flexGrow =  {1}
                        />
                    {this._showColumnAdmin()}
                </Table>,
            </section>
        )
    }
});

/*
    Elementos que no tiene vs DataTables

    Resisable Columns
    isResizable = {true}
    https://github.com/facebook/fixed-data-table/blob/master/site/examples/ResizeExample.js
    mantener en state un arreglo con los anchos de las columnas

    General Filter
    1 metodo filter general, recorriendo cada columna

    Filter by Column
    use render footer to make filters
    1 metodo filter por cada columna (no me gusta)

    Sort By Column
    https://github.com/facebook/fixed-data-table/blob/master/site/examples/SortExample.js
    modificar los label de los headers a mano

    Paginacion


    Resulados por pagina
*/