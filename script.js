const shortenBtn = document.getElementById("shortenBtn");

function generateShortCode() {
  return Math.random().toString(36).substring(2, 7);
}

shortenBtn.addEventListener("click", function () {
  const longUrl = document.getElementById("longUrl").value;
  const customAlias = document.getElementById("customAlias").value;

  if (!longUrl) {
    alert("Please enter a URL");
    return;
  }

  let shortCode;

  
  if (customAlias) {
    shortCode = customAlias;
  } else {
    shortCode = generateShortCode();
  }

  // save in localStorage
  localStorage.setItem(shortCode, longUrl);

  const shortUrl = window.location.origin + "?" + shortCode;

  document.getElementById("result").innerHTML =
    `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
});

window.onload = function () {
  const code = window.location.search.substring(1);

  if (code) {
    const originalUrl = localStorage.getItem(code);

    if (originalUrl) {
      window.location.href = originalUrl;
    }
  }
};