// Write your solution in this file!
let driver={name:'ahmed', age:20};

function updateDriverWithKeyAndValue(obj,key,value){
    let newdriver = Object.assign({},obj,{[key]: value});

    return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value)
{
    obj[key]=value;
    return obj;
}

function deleteFromDriverByKey(obj,key){
    let newdriver = Object.assign({},obj);
        delete newdriver[key];
        return newdriver;
}

function destructivelyDeleteFromDriverByKey(obj,key){
    delete obj[key];
    return obj;
}

