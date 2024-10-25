import mysql from '~/mysql/mysql';

class Device {
    constructor(serial, radio, type){
        this.serial = serial; // unique identifier for the device
        this.radio = radio; // type of radio technology used
        this.type = type; // category or type of the device

        try {
            mysql.createDevice(serial, radio, type);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
        
    }
    
}

export default new Device ()