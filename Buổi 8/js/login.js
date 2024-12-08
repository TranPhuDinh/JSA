// Lấy url => Kiểm tra xem đang ở trang nào
const pathname = location.pathname;

// [HOME] -------------------------------------------------------------------------
if (
  pathname.includes("index.html") ||
  pathname.charAt(pathname.length - 1) == "/"
) {
  //  kiểm tra nếu chưa login => chyển trang login
  if (!localStorage.getItem("currenUser")) {
    location.href = "./html/login.html";
  }
}
// [LOGIN]----------------------------------------------------
// Kiểm tra thông tin đăng nhập

// Kiểm tra thông tin đăng ký

// Lưu dữ liệu cho đăng ký

// Bật sự kiện cho button đăng nhập

// Bật sự kiện cho button đăng ký
