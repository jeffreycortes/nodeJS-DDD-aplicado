class Device {
  constructor(obj = {}) {
    this.IMEI =  obj.IMEI || null;
    this.IP =  obj.IP || null;
    this.Screen_Resolution =  obj.Screen_Resolution || null;
    this.Client_Timestamp =  obj.Client_Timestamp || null;
    this.OperativeSystem =  obj.OperativeSystem || null;
    this.AppAction =  obj.AppAction || null;
    this.DeviceID =  obj.DeviceID || null;
  }
}

module.exports = Device;
