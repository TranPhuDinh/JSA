// function update data on UI
function updateUI(name, img, bio) {
  // get element form HTML
  const name_element = document.getElementById("pokemon_name");
  const img_element = document.querySelector("#pokemon_img");
  const bio_element = document.getElementById("pokemon_bio");

  // update data
  name_element.textContent = name.toUpperCase();
  img_element.src = img;
  bio_element.innerText = bio;
}

// function search
function search_pokemon(pokemon_name) {
  // set root url
  const root_url = "https://pokeapi.co/api/v2/pokemon/";
  // call API
  const promise = fetch(root_url + pokemon_name.toLowerCase(), {
    method: "GET",
  });

  promise
    .then(function (json) {
      // chuyển kiểu json -> js
      return json.json();
    })
    .then(function (pokemonData) {
      // Lấy kiểu dữ liệu theo loại
      const name = pokemonData.name;
      const image = pokemonData.sprites.other["official-artwork"].front_default;
      const bio = `Weight: ${pokemonData.weight}`;
      // để dữ liệu vào UI
      updateUI(name, image, bio);
    })
    .catch(function (error) {
      alert("Không tìm thấy nhân vật này");
    });
}

// bắt sự kiện cho button search
document
  .getElementById("search_btn")
  .addEventListener("click", function (event) {
    // không cho website Load theo mặc định
    event.preventDefault();
    // lấy dữ liệu từ input
    const pokemon_name = document.getElementById("search_inp").value.trim();
    // nếu không có dữ liệu
    if (!pokemon_name) {
      alert("Vui lòng nhập tên nhân vật");
    } else {
      search_pokemon(pokemon_name);
    }
  });
