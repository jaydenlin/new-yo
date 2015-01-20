var Constants = require("../constants/constants");

module.exports = {
    addItem: function (newItemData) {
        this.dispatch(Constants.ADD_ITEM,newItemData);
    }
};