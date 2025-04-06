const container = document.querySelector('.fashion-container');

firebase.database().ref("images").once("value")
  .then(snapshot => {
    const data = snapshot.val();
    if (data && Array.isArray(data)) {
      displayFashion(data);
    } else {
      console.error("Data format issue:", data);
    }
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });

function displayFashion(products) {
  container.innerHTML = "";

  products.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('fashion-card');

    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>₹${item.price}</p>
    `;

    container.appendChild(div);
  });
}
