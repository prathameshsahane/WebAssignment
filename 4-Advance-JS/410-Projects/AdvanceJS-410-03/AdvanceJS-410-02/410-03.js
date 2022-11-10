document.getElementById("meal").addEventListener("keyup", fetch_Data);

function fetch_Data(e) {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
  )
    .then(convertToJSON)
    .then(showData);
}

function showData(data) {
  document.getElementById("images").innerHTML = "";
  console.log(data.meals);
  data.meals.map((item) => {
    let image = document.createElement("img");
    image.src = item.strMealThumb;
    document.getElementById("images").appendChild(image);
  });
}

function convertToJSON(response) {
  return response.json();
}