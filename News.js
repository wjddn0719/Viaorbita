const container = document.getElementById("news-container");

fetch("https://api.spaceflightnewsapi.net/v4/articles/?search=international%20space%20station&limit=5")
  .then(res => res.json())
  .then(data => {
    const articles = data.results;
    if (articles.length === 0) {
      container.innerHTML = "<p style='color:white;'>ISS 관련 기사가 없습니다.</p>";
      return;
    }
    articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "news-card";

      card.innerHTML = `
        <img src="${article.image_url}" alt="News Image" class="news-image">
        <div class="news-content">
          <h2 class="news-title">
            <a href="${article.url}" target="_blank">${article.title}</a>
          </h2>
          <p class="news-summary">${article.summary}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("뉴스를 불러오는 데 실패했습니다.", err);
    container.innerHTML = "<p style='color:white;'>뉴스를 불러오는 데 실패했습니다.</p>";
  });
