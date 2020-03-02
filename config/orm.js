const connection = require("./connection.js");



const orm = {
    selectAll: function (table, cb) {
        const queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table,col,values,cb) {
        const queryString = "INSERT INTO ??(?) VALUES ?";
        connection.query(queryString, [table,col,values], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table,newCol,newVal,idCol,idVal,cb) {
        const queryString = "UPDATE ?? SET ?=? WHERE ?=?";
        connection.query(queryString, [table,newCol,newVal,idCol,idVal], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}



module.exports = orm;