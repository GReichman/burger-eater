const orm = require("../config/orm");



const burgOrm = {
    selectAllBurgers = function(cb){
        orm.selectAll("burgers",cb);
    },
    insertBurger = function(name,cb){
        orm.insertOne("burgers","burger_name",name,cb)
    },
    updateBurger(id,cb){
        orm.updateOne("burgers","devoured",1,"id",id,cb);
    }
}




module.exports = burgOrm;