// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-database
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(Client) {
    Client.remoteMethod(
        'getNameDindin',
        {
            description: 'get name like -> Dindin',
            accepts: [
                { arg: 'firstname', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameDindin', verb: 'get' }
        }
    );

    Client.getNameDindin = function(firstname, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    nama : {
                        like : firstname
                    }
                }
            }
            Client.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    Client.remoteMethod(
        'getAlamat',
        {
            description: 'get addresss like -> Cibinong',
            accepts: [
                { arg: 'alamat', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getAlamat', verb: 'get' }
        }
    );

    Client.getAlamat = function(alamat2, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    alamat : {
                        like : alamat2
                    }
                }
            }
            Client.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    Client.remoteMethod(
        'getTelepon',
        {
            description: 'get addresss like -> Cibinong',
            accepts: [
                { arg: 'nomor telepon', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getTelepon', verb: 'get' }
        }
    );

    Client.getTelepon = function(telepon2, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    telepon : {
                        like : telepon2
                    }
                }
            }
            Client.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    Client.remoteMethod(
        'getStatus',
        {
            description: 'get addresss like -> Cibinong',
            accepts: [
                { arg: 'alamat', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getStatus', verb: 'get' }
        }
    );

    Client.getStatus = function(status2, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    status : {
                        like : status2
                    }
                }
            }
            Client.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

};