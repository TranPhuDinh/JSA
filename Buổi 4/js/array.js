// khoi tao ------------------------------
var arr = [1,2.5,"a" , function() {}, {},null, undefined];
var arr2 = new Array([1, 2.5,"a" , function () {}, {},null, undefined]);
//  cach kiem tra array hay object
console.log(typeof arr); // object
console.log(Array.isArray(arr2)); // true
console.log(Array.isArray({})); // false

// tuy xuat mang
console.log(arr.lenght);
console.log(arr[4]); // lay phan tu theo index

// cac ham bo tro -------------------------
// Loi khi clone/ copy array ---------------------------
var colone_arr = arr;
colone_arr[1] = "abc";
console.table(colone_arr);
console.table(arr);
// => spread operator 
var clone = [...arr2];
clone.push(10);
console.table(clone);
console.table(arr2);

// tosring -------------------------
console.log(arr,toString());

// join ---------------------------
var arr1 = [1,2,3];
console.log("join", arr1.join("  -  "));

// pop --------------------------------
// return lai list sau khi da xoa phan tu
console.log(arr2.pop()); // xoa phan tu cuoi cung
[].pop(); // undefined

// shift. unshift -----------------------
// shift: xoa phan tu dau tien trong mang + return lai pha tu da xoa
console.log(arr.shift());
console.log([].shift()); // undefined

// unshift: them phan tu dau tien trong mang + return do dai moi
console.log(arr.shift(123));

// splicing ----------------------------------------------------
var subArr = arr.splice(1, 2); // xoa 2 phan tu tinh tu index 1
console.log(subArr);
// chen them 6 phan tu vao vi tri thu nhat, 0 la k xoa ai
var subArr1 = arr.splice(1, 0, 6);
console.log(subArr1);

// thay the vi tri thu 1 thanh 6
var subArr2 = arr.splice(1, 1, 6);
console.log(subArr2);

// concat -----------------------------------------------------
// noi arr: return mang moi noi
var arr3 = [5, 6, 7];
const a = arr3.concat([1, 2, 3]);
console.table(a);