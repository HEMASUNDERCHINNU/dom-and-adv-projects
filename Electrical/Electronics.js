document.addEventListener("DOMContentLoaded", async function () {
    const fashionContainer = document.querySelector(".fashion-container");

    async function fetchFashionData() {
        try {
            const response = await fetch("http://localhost:3000/images2"); // API endpoint
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("❌ Error fetching images:", error);
            return [];
        }
    }

    function displayFashionImages(images) {
        fashionContainer.innerHTML = ""; // Clear previous content

        if (images.length === 0) {
            fashionContainer.innerHTML = "<p>No images found.</p>";
            return;
        }

        images.forEach((item) => {
            const imgWrapper = document.createElement("div");
            imgWrapper.classList.add("fashion-item");

            const imgElement = document.createElement("img");
            imgElement.src = item.image;
            imgElement.alt = item.title;
            imgElement.classList.add("fashion-img");

            const titleElement = document.createElement("p");
            titleElement.textContent = item.title;
            titleElement.classList.add("fashion-title");

            const priceElement = document.createElement("p");
            priceElement.textContent = `Price: ₹${item.price}`;
            priceElement.classList.add("fashion-price");

            imgWrapper.appendChild(imgElement);
            imgWrapper.appendChild(titleElement);
            imgWrapper.appendChild(priceElement);

            fashionContainer.appendChild(imgWrapper);
        });
    }

    // Fetch and display images when the page loads
    const images = await fetchFashionData();
    displayFashionImages(images);
});
