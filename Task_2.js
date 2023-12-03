const object = {
    superHero: "Batman",
  };
  
  function initObj(object){
    for (const name in object) {
      if (object.hasOwnProperty(name)) {
        return true;
      } else {
        return false;
      }
    }
  }
  console.log(initObj(object))