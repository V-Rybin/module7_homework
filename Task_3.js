function ElectricalDevice (name){
    this.typeOfPowerSupply = 'electric',
    this.name = name
    
  }
  
  ElectricalDevice.prototype.getPower = function(power){
      console.log(`Power is ${power} W`)
    }
  
  ElectricalDevice.prototype.deviceTurnOnOf = function(deviceTurnOnOf){
      console.log(`Device is ${deviceTurnOnOf}`)
    }
  
  function HiTechDevice (name, processor){
    this.name = name,
    this.processor = processor
    
  }
    
  HiTechDevice.prototype = new ElectricalDevice ()
    
  HiTechDevice.prototype.usbC = function(usbC){
      console.log(`USB-C ${usbC}`)
  
  }
  
  function Lamps (name, material){
    this.name = name,
    this.material = material
    
  }
    
  Lamps.prototype.lamp = function(lamp){
     
      console.log(`Type of lamp is ${lamp}`)
  }
  
  Lamps.prototype = new ElectricalDevice ()
  
  
  function Fans (name, material){
    this.name = name,
    this.material = material
    
  }
  
  Fans.prototype = new ElectricalDevice ()
  Fans.prototype = new Lamps ()
    
  Fans.prototype.coldAir = function(coldAir){
     
      console.log(`Function "Cold air" - ${coldAir}`)
  }
  
  
  const computer = new HiTechDevice ('computer', 'i9', 'yes');
  const tableLamp = new Lamps ('table lamp', 'metal', 'LED');
  const fan = new Fans ('fan', 'plastic', 'yes');
  
  computer.getPower(80)
  computer.deviceTurnOnOf('Turn On')
  console.log(computer)
  
  tableLamp.getPower(40)
  tableLamp.deviceTurnOnOf('Turn off')
  console.log(tableLamp)
  
  fan.getPower(20)
  fan.deviceTurnOnOf('Turn off')
  console.log(fan)