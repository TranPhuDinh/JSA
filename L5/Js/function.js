// khai bao function -----------------------------------------

// cách 1: function có tên
// hàm sum: param : a, b =>return a + b
// function <function_name> (parameters) {
  //  ...
    // trả về giá trị cụ thể
 //   return ... ;

// }

// function sum(a,b); {
   //  return a + b;
// }

// gọi lại hàm thực thi
// console.log(sum(1,3));

// cách 2: function không có tên
// const sum_2 = function (a,b) {
   // return a + b;
// };
// console.log(sum_2(1,2));

// hàm hello: truyền tham số name -> clg: "Hello" + name
const hello = function (name) {
    console.log("hello" + name);
}
// không return -> in ra giá trị: indefined
console.log(hello("Trần"));
// lưu giá trị key: value
// nếu value khác kiểu dữ liệu string
// => không hiển thị đucợ
localStorage.setItem("name", {});

// mở dev tool -> application tab -> local storage
// -> mở mục -> domain (url) trang hiện tại -> kiểm tra

// lấy giá trị (value) dữ liệu thông qua key
console.log(localStorage.getItem("name"));