# 🔍 GitHub Profile Explorer

> **Discover GitHub developers from around the world — instantly.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub API](https://img.shields.io/badge/GitHub-API-181717?style=for-the-badge&logo=github&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## ✨ What is this?

**GitHub Profile Explorer** is a React-powered web app that connects to the **GitHub REST API** to let you:

- 🎲 **Discover random GitHub developers** from across the globe
- 🔎 **Search any GitHub username** and view their profile instantly
- 🔢 **Control how many profiles** you want to load at once
- 🖼️ **View avatars, usernames, and profile links** in a clean card layout

---



## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **React 18** | UI components and rendering |
| **React Hooks** | `useState`, `useEffect` for state management |
| **GitHub REST API** | Fetching real user data |
| **JavaScript (ES6+)** | Async/Await, Arrow functions, Template literals |
| **HTML5 & CSS3** | Structure and styling |
| **Parcel** | Module bundling |

---

## 📁 Project Structure

```
github-profile-explorer/
│
├── github.html       # Main HTML entry point
├── github.js         # Root React component
├── head.js           # Header component
├── body.js           # Main body — search + profile cards
├── github.css        # Styling
└── README.md
```

---

## ⚡ Features

- ✅ **Random Profile Discovery** — loads random GitHub users using dynamic `since` parameter
- ✅ **Username Search** — find any GitHub user by their exact username
- ✅ **Custom Count** — choose how many profiles to load (1 to 100+)
- ✅ **Component-Based Architecture** — clean separation with Head and Body components
- ✅ **Live GitHub Data** — all data fetched in real-time from GitHub API
- ✅ **Responsive Card Layout** — clean grid of profile cards

---

## 🏃 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/github-profile-explorer.git

# 2. Navigate to project folder
cd github-profile-explorer

# 3. Install dependencies
npm install

# 4. Run the project
npx parcel github.html
```

Open your browser at `http://localhost:1234` 🎉

---

## 🔌 API Used

```
GET https://api.github.com/users?since={random}&per_page={count}
GET https://api.github.com/users/{username}
```

> ⚠️ GitHub API rate limit: **60 requests/hour** for unauthenticated requests.

---

## 🧠 What I Learned

- Working with **REST APIs** in React using `fetch`
- Managing **multiple state variables** with `useState`
- Using **`useEffect`** for data fetching on component mount
- **Component composition** — splitting UI into reusable components
- Handling **async/await** in React event handlers

---

## 🔮 Future Improvements

- [ ] Show more profile details (repos, followers, following)
- [ ] Add loading spinner while fetching
- [ ] Add dark/light mode toggle
- [ ] Deploy to Vercel or Netlify

---

## 👨‍💻 Author

**Vansh**
- 🎓 B.Tech IoT & Cybersecurity with Blockchain Technology — CGC Jhanjeri
- 📧 vanshbhatnagar2808@gmail.com
- 🐙 GitHub: [@Vansh140507](https://github.com/Vansh140507)

---

<div align="center">

⭐ **If you found this useful, please give it a star!** ⭐

*Built with ❤️ using React and GitHub API*

</div>
