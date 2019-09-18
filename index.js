// Write your solution in this file!
const driver = { name: '11 Broadway' };

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = Object.assign({}, driver);
  newObj.address= '11 Broadway';
  newObj.name='Sam';
  return newObj;
}



function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   
  driver.address= '12 Broadway';
  driver.name='Sam';
  return driver;
}

function deleteFromDriverByKey(driver, key, value){
    const newObj = Object.assign({}, driver);
    delete newObj['name'];
    delete newObj['address'];
      return newObj;
}


function destructivelyDeleteFromDriverByKey(driver, key, value){
        delete driver['name'];
    return driver;
}