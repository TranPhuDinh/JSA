// khai bao (declare) ---------------
var myObj = {
  "full name": " Dinh Phu",
  age: 16,
};

// object constructor (xay dung doi tuong - ham tao)--------------------
// dinh nghia doi tuong (ban ve)
// decLaration function
var User_A = function () {};

// expresstion function
function User(firstName, lastName, ava) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.ava = ava;

  this.getName = function () {
    return this.firstName + " " + this.lastName;
  };
}

//tao doi tuong
var me = new User("Dinh", "Phu", "...");
console.table(me);
console.log(me.constructor === User);
// object thuong
const student = { name: "abc", age: 16 };
console.table(student);
console.log(student.constructor);
console.log(student._proto_);

/**
 * Neu doi tuong tao tu object constructor # object thuong
 * khi in doi tuong se co them phan _proto_ => mo ra: constructor
 */

//  them thuoc tinh
me.class = null;
console.table(me);
console.log(me._proto_);

// object prototype ------------------------
// them 1 thuoc tinh
// khong nhan duoc gia tri tuyen vao tu constructor
User.prototype.email = "abc@gmail.com";
User.prototype.getEmail = function () {
  return this.email;
};

const other = new User("abc", "abc", "...");
console.table(other);

// read, update ----------------
me.firstName = "ABC";
me["lastName"] = "XYZ";
console.table(me);

console.log(me["abc"]); //undefined
console.log(me.abc); // undefined

// delete ----------------------
delete me["class"];
delete me.ava;
console.table(me);
