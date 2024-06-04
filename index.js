Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};
console.log([..."0123456789"].filter((n) => n % 2 == 1));

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};

console.log([1, 2, 3, 4].map((n) => n * 2));

Array.prototype.myIncludes = function (element, start = 0) {
  for (let i = start; i < this.length; i++) {
    if (this[i] == element) return true;
  }
  return false;
};

console.log(["apple", "banana", "mango", "orange"].myIncludes("banana"));

Array.prototype.myIndexOf = function (element, start = 0) {
  for (let i = start; i < this.length; i++) {
    if (this[i] == element) return i;
  }
  return -1;
};
console.log(["apple", "banana", "mango", "orange"].myIndexOf("banana"));

Array.prototype.myReduce = function (cb, init) {
  let res = init;
  for (let i = 0; i < this.length; i++) {
    res = cb(res, this[i]);
  }
  return res;
};

console.log([1, 2, 3, 4, 5].myReduce((prev, current) => prev + current, 0));


Array.prototype.mySlice = function (start, end) {
  let res = [];
  if (start < 0) start += this.length;
  if (end < 0) end += this.length;
  for (let i = start; i < end; i++) {
    res.push(this[i]);
  }
  return res;
};

console.log([1,2,3,4,5,6].mySlice(1, 3));

/* 7. splice */
Array.prototype.mySplice = function (start, deleteCount) {
  if (start < 0) start += this.length;
  let res = [];
  let modified = [];
  for (let i = 0; i < this.length; i++) {
    if (i >= start && i < start + deleteCount) {
      res.push(this[i]);
    } else {
      modified.push(this[i]);
    }
  }
  this.length = modified.length;
  for (let i = 0; i < this.length; i++) {
    this[i] = modified[i];
  }
  return res;
};

/* test */
const arr5 = [1, 2, 3, 4, 5];
const arr6 = [1, 2, 3, 4, 5];

console.log([1, 2, 3, 4, 5].splice(1, 2)); // [1, 5]
