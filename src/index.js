
  sort(indices) {
    //var arr = indices.split(',');
    for (var i =0; i < indices.length - 1; i++)
      for (var j = 1; j < indices.length; j++){
          if (indices[i] > indices[j]){
            var t = indices[i];
            indices[i] = indices[j];
            indices[j] = t;
          }
      }
    for (var i =0; i < indices.length - 1; i++)
      for (var j = 1; j < indices.length; j++){
        if (this.mass[indices[i]] > this.mass[indices[j]]) {
          t = this.mass[indices[i]];
          this.mass[indices[i]] = this.mass[indices[j]];
          this.mass[indices[j]] = t;
        }
      }
     

    return  this.mass;
  }

  setComparator(compareFunction) {
    return a - b;
  }
}

module.exports = Sorter;
