const sections = [
  {
    title: "Apply Theory to Tech Projects",
    emoji: "📘",
    description: "Practice concepts by building real tech projects.",
  },
  {
    title: "Peer Study Sessions",
    emoji: "👥",
    description: "Schedule or join peer discussions.",
  },
  {
    title: "Microlearning Schedule",
    emoji: "🧠",
    description: "Daily/weekly learning streak calendar.",
  },
  {
    title: "Use Visual Learning Tools",
    emoji: "🧰",
    description: "Mind maps, flowcharts, and tech diagrams.",
  },
  {
    title: "Online Courses",
    emoji: "🎓",
    description: "Aggregated course links (YouTube, Coursera, NPTEL...).",
  },
  {
    title: "Hands-On Practice",
    emoji: "🛠️",
    description: "Submit mini-projects or assignments.",
  },
  {
    title: "Staying Current with Tech",
    emoji: "🔄",
    description: "Latest articles, news, and trends feed.",
  },
  {
    title: "Seek Academic Mentors",
    emoji: "🧑‍🏫",
    description: "Connect to faculty, alumni, or senior mentors.",
  },
  {
    title: "Track Progress & Celebrate Wins",
    emoji: "📈",
    description: "Checklist for milestones; shows badges.",
  },
];

const cardContainer = document.getElementById("cards");

sections.forEach((section) => {
  const card = document.createElement("div");
  card.className = "rounded-2xl shadow-xl p-4 bg-white";
  card.innerHTML = `
    <h2 class="text-xl font-semibold mb-2">${section.emoji} ${section.title}</h2>
    <p class="text-gray-600 mb-4">${section.description}</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore</button>
  `;
  cardContainer.appendChild(card);
});
