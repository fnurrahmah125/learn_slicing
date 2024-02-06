const summary = document.querySelector(".summary-wrapper");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((data) => {
      summary.insertAdjacentHTML(
        "beforeend",
        `<div class="summary__score">
            <div class="summary__score-left">
                <img src="${data.icon}" alt="icon" />
                <span>${data.category}</span>
            </div>
            <div class="summary__score-right">${data.score}<span>/ 100</span></div>
        </div>`
      );
    });
  })
  .catch((err) => console.log(err));
