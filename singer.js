// Function to get query parameters from the URL
document.addEventListener("DOMContentLoaded", () => {
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the singer's name from the query parameter
    const singerName = getQueryParameter('singer');
    const singerImgPath = getQueryParameter('image')
    console.log(singerImgPath)
    // Display the singer's name on the page
    document.getElementById('singer-name').textContent = singerName;
    const singerImg = document.getElementById('singer-img')
    singerImg.src = `${singerImgPath}`;
    // Optionally, you could load more detailed data about the singer dynamically
    document.getElementById('singer-details').textContent = `Details about ${singerName}  here:-`;
})