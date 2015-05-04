var ArrayList =['Salvador','São Paulo','Rio de Janeiro','Tocantins'];

var filter = ArrayList.filter(function(obj){
    return (obj.indexOf('S') === 0)? true:false;
});

var resultArray = filter;
console.log(resultArray);