const player = document.querySelector("#player")
const latestMusic = document.querySelectorAll(".music-box img");
console.log(latestMusic)
latestMusic.forEach(image => {
    image.addEventListener("click", () => {
        // console.log("music paly")
        player.style.display = "flex"
    })
})

document.querySelectorAll('.singer-click').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();  // Prevent the default anchor tag behavior

        // Get the singer's name from the data attribute
        const singerName = this.getAttribute('data-singer');
        const singerImg = this.getAttribute('data-img')
        console.log(singerImg)

        // Redirect to the singer.html page with the singer's name and singer's img as a query parameter
        window.location.href = `singer.html?singer=${encodeURIComponent(singerName)}&image=${singerImg}`;
    });
});



