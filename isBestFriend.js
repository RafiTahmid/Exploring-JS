function isBestFriend (friend1, friend2){
    if(typeof friend1 && typeof friend2 ==='object'){
        if(friend1. name === friend2. friend && friend2. name === friend1. friend){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        console.log('Program requires objects');
    }
}

result = isBestFriend({name: 'abul', friend: 'babul'},
            {name: 'babul', friend: 'sabul'})

console.log(result)