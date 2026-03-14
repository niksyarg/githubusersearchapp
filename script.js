const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const avatar = document.querySelector('.avatar');
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const joinedDate = document.getElementById("joined-date");
const userLogin = document.querySelector(".username");

searchBtn.addEventListener("click", async () => {
  const username = searchInput.value.trim();

  if (username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (response.ok) {
      const data = await response.json();
      
      avatar.src = data.avatar_url;
      name.innerText = data.name || data.login;
      userLogin.innerText = `@${data.login}`;
      bio.innerText = data.bio || "This profile has no bio";
      repos.innerText = data.public_repos;
      followers.innerText = data.followers;
      following.innerText = data.following;

      const date = new Date(data.created_at);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      joinedDate.innerText = "Joined " + date.toLocaleDateString('en-GB', options);

    } else {
      alert("User not found");
    }
  }
});


themeToggle.addEventListener("click", () => {
  const html = document.documentElement;

  if (html.hasAttribute("data-theme")) {
    html.removeAttribute("data-theme");
    themeText.innerText = "DARK";
    themeIcon.src = "moon.png";
  } else {
    html.setAttribute("data-theme", "dark");
    themeText.innerText = "LIGHT";
    themeIcon.src = "./002-sun.png";
  }
});
