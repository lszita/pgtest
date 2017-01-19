module.exports.foo = function(){
    if(!this.value){
        console.log('setting value');
        this.value = 1337;
    } 
    return this.value;
}();