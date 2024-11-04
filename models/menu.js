const mongoose = require('mongoose');


const menuSchemaItems = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type: Number,
        required : true,
    },
    taste : {
        type : String,
        enum : ['sweet','spicy','sour'],
        required : true,
    },
    is_Drink : {
        type : Boolean,
        default : false,
    },
    ingrediants : {
        type : [String],
        default : [],
    },
    num_sales : {
        type : Number,
        default : 0,
    }

});

const menuItem = mongoose.model('menuItem',menuSchemaItems);
module.exports = menuItem;