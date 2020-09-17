'use strict';

module.exports = function(app) {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/tampil')
        .get(myjson.tampilmahasiswa);
    
        app.route('/tampil/:id')
        .get(myjson.tampilsesuaiid);
}