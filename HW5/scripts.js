const form = document.getElementById('profileForm');
const profileDisplay = document.getElementById('profileDisplay');

const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const profilePhone = document.getElementById('profilePhone');
const profileAddress = document.getElementById('profileAddress');
const profileAvatar = document.getElementById('profileAvatar');

// Hàm lưu dữ liệu vào localStorage
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const avatar = document.getElementById('avatar').value;

  const userProfile = {
    name,
    email,
    phone,
    address,
    avatar
  };

  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  displayProfile(userProfile);
});

// Hàm hiển thị dữ liệu từ localStorage
function displayProfile(profile) {
  profileName.textContent = profile.name;
  profileEmail.textContent = profile.email;
  profilePhone.textContent = profile.phone;
  profileAddress.textContent = profile.address;
  profileAvatar.src = profile.avatar;

  profileDisplay.style.display = 'block';
}

// Load dữ liệu khi tải lại trang
document.addEventListener('DOMContentLoaded', () => {
  const storedProfile = localStorage.getItem('userProfile');
  if (storedProfile) {
    displayProfile(JSON.parse(storedProfile));
  }
});