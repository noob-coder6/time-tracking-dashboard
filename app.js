const dashboard = document.querySelector('.dashboard');
const timeframeBtns = document.querySelectorAll('.timeframe-btn');

let timeframe = 'weekly'; // default timeframe

const timeframeTextMap = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month'
};

const fetchData = async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        renderCards(data);
    } catch (error) {
        console.error("Could not fetch data:", error);
    }
};

const createActivityCard = (activity) => {
    const { title, timeframes } = activity;
    const { current, previous } = timeframes[timeframe];
    const cardClass = title.toLowerCase().replace(' ', '-');

    const card = document.createElement('article');
    card.classList.add('activity-card', cardClass);
    card.dataset.title = title;

    card.innerHTML = `
      <div class="activity-card__content">
        <div class="activity-card__header">
          <h2 class="activity-card__title">${title}</h2>
          <img src="./images/icon-ellipsis.svg" alt="menu" class="activity-card__menu">
        </div>
        <div class="activity-card__body">
          <p class="activity-card__time">${current}hrs</p>
          <p class="activity-card__previous">${timeframeTextMap[timeframe]} - ${previous}hrs</p>
        </div>
      </div>
    `;
    return card;
};

const renderCards = (data) => {
    // Clear existing cards except user card
    document.querySelectorAll('.activity-card').forEach(card => card.remove());

    data.forEach(activity => {
        const card = createActivityCard(activity);
        dashboard.appendChild(card);
    });
};

const handleTimeframeChange = (e) => {
    const selectedBtn = e.target;
    timeframe = selectedBtn.dataset.timeframe;

    timeframeBtns.forEach(btn => btn.classList.remove('active'));
    selectedBtn.classList.add('active');

    fetchData();
};

timeframeBtns.forEach(btn => btn.addEventListener('click', handleTimeframeChange));

// Initial data load
fetchData();