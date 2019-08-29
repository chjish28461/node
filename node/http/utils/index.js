function random(min,max){
    if((min||0)&&(max||0)){
        return Math.random()*(max-min+1)+min;
    }
    return Math.floor(Math.random()*10);
};
exports.random = random;