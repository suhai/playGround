Array.prototype.eachSlice = function (size){
  this.arr = []
  for (var i = 0, l = this.length; i < l; i += size){
    this.arr.push(this.slice(i, i + size))
  }
  return this.arr
};

console.log([1, 2, 3, 4, 5, 6].eachSlice(2));