// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-database
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var app = require('../../server/server')
module.exports = function(Report) {
	//create path
	Report.remoteMethod(
		'getById',
		{
			description: 'get id  like -> Number',
			accepts: [
				{arg: 'Id', type: 'string'}
			],
			returns: {
				arg: 'res',type: 'object', root: true		
			},
			http: { path: '/getById', verb: 'get'}
		}
	);
//promise untuk menghilangkan asyncronus
//reject, resolve adalah annotation

	Report.getById = function(id, callback){
		new Promise(function(resolve, reject){

			var filter = {
				where : {
					id : {
						like : id
					}
				}
			}
			Report.find(filter, function(err, result){
				if (err) reject (err)
					if (result === null) {
						err = new Error('Cannot find that name')
						err.statusCode = 404
						reject(err)
					}	

					resolve(result)
			})
		}).then(function(res){
			var client = app.models.Client
			
				
			var clientId = res[0].clientId
			
			var filter = {
				where : {
					id : clientId
				}
			}
			// console.log(filter)
			client.find(filter, function(err, resclient){
				if (err) return (err)
				if (resclient === null) {
					err = new Error('Cannot find that name')
					err.statusCode = 404
					return(err)
				}	

				// console.log('2', resclient
				res[0].client = resclient[0]

				return callback(null,res)
			})
		}).catch(function(err){
			callback (err);
		})	
    }
    
    Report.remoteMethod(
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

    Report.getNameDindin = function(firstname, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    nama_pelanggan : {
                        like : firstname
                    }
                }
            }
            Report.find(filter, function(err, result){
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

    Report.remoteMethod(
        'getKodePesanan',
        {
            description: 'get kode like -> T123',
            accepts: [
                { arg: 'kodepesanan', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getKodePesanan', verb: 'get' }
        }
    );

    Report.getKodePesanan = function(kodepesanan, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    kode_pesanan : {
                        like : kodepesanan
                    }
                }
            }
            Report.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Kode Tidak Dapat Ditemukan")
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

    Report.remoteMethod(
        'getNamaBarang',
        {
            description: 'get nama barang like -> Antimo',
            accepts: [
                { arg: 'namabarang', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNamaBarang', verb: 'get' }
        }
    );

    Report.getNamaBarang = function(namabarang, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    nama_barang : {
                        like : namabarang
                    }
                }
            }
            Report.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Kode Tidak Dapat Ditemukan")
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

    Report.remoteMethod(
        'getHargaBarang',
        {
            description: 'get harga barang like -> Harga',
            accepts: [
                { arg: 'harga', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getHargaBarang', verb: 'get' }
        }
    );

    Report.getHargaBarang = function(hargabarang, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    harga : {
                        like : hargabarang
                    }
                }
            }
            Report.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Kode Tidak Dapat Ditemukan")
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
}