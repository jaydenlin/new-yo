var React = require("React"),
    Fluxxor = require("fluxxor"),
    Constants = require("../constants/constants");

var DataStores = Fluxxor.createStore({
    initialize: function (options) {

        this.bindActions(
            Constants.ADD_ITEM, this.addItemHandler
        );
    },
    addItemHandler:function(){
    
    
    
    }
});