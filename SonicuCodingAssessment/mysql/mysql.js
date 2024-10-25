import mysqllib from 'mysql';

class mysql {
    constructor(){
        this.connection = mysqllib.createConnection({
            host: "localhost",
            user: "root",
            password: "pass"
        })
        this.seedTable();
    }

    seedTable(){
        let query = `
        CREATE DATABASE IF NOT EXISTS sonicu;

        USE sonicu;

        CREATE TABLE devices (
            id VARCHAR(255) PRIMARY KEY,
            type VARCHAR(255) NOT NULL,
            radio VARCHAR(255) NOT NULL
        );

        CREATE TABLE gateways (
            id VARCHAR(255) PRIMARY KEY,
            type VARCHAR(255) NOT NULL
        );

        CREATE TABLE lmeis (
            lmei VARCHAR(255) PRIMARY KEY,
            provider VARCHAR(255) NOT NULL
        );

        CREATE TABLE device_gateway (
        
        );
    
        CREATE TABLE device_lmei (
        
        );

        CREATE TABLE gateway_lmei (
        
        );

        `;
        this.connection.query(query, function (err, result) {
            if (err){
                throw err;
                return false;
            } else {
                return true;
            }
        });
    }

    createDevice(id, type, radio){
        console.log("SUBMIT DEVICE");
        let query = `
            INSERT INTO devices (id, type, radio) VALUES (${id}, ${type}, ${radio});
        `;
        this.connection.query(sql, function (err, result) {
            if (err){
                throw err;
                return false;
            } else {
                return true;
            }
        });
    }
}

export default new mysql();