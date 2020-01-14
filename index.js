// Write your solution in this file!

// Write your solution in this file!
let driver={name:'Sura',filedStudy:'computer science'};
let newDriver={};

function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key, value){
  driver[key] = value;

  return driver;

}

function deleteFromDriverByKey(driver,key){

  newDriver=Object.assign({},driver);
  delete newDriver[key];
  return newDriver;

}

function destructivelyDeleteFromDriverByKey(driver,key){

  delete driver[key];
  return driver;

}
