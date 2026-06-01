const list = document.getElementById("crypto-list");

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
  .then(response => response.json())
  .then(data => {
    data.slice(0, 10).forEach(coin => {
      const li = document.createElement("li");
      li.textContent = `${coin.name}: $${coin.current_price}`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
💡 Pro Tips (so you stand out)
Replace preview image with a real screenshot
Add some CSS (even simple styling helps a lot)
Keep commits clean (don’t upload everything in one go)
Write meaningful commit messages
