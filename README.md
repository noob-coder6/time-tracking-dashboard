# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats


### Links

- Solution URL: [Solution URL](https://github.com/noob-coder6/time-tracking-dashboard.git)
- Live Site URL: [LIVE SITE URL](https://noob-coder6.github.io/time-tracking-dashboard/)

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS variables)
- CSS Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (ES6+)
- Async/Await for data fetching

### What I learned

This project helped me strengthen my understanding of several key web development concepts:

#### 1. CSS Grid Layout
I implemented a responsive grid system that adapts to different screen sizes. The dashboard uses CSS Grid to create a flexible layout that switches from single column on mobile to multi-column on larger screens.

```css
.dashboard {
  display: grid;
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
}

@media (min-width: 1100px) {
  .dashboard {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
```

#### 2. Dynamic DOM Manipulation
I learned how to dynamically create and update HTML elements using JavaScript without refreshing the page. This creates a smooth user experience when switching between timeframes.

```js
const createActivityCard = (activity) => {
  const card = document.createElement('article');
  card.classList.add('activity-card', cardClass);
  card.innerHTML = `
    <div class="activity-card__content">
      <!-- Card content -->
    </div>
  `;
  return card;
};
```

#### 3. Async/Await and Fetch API
I implemented asynchronous data fetching using modern JavaScript syntax. This taught me how to handle external data sources and manage loading states.

```js
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
```

#### 4. Object Destructuring
I utilized ES6 destructuring to write cleaner, more readable code when extracting data from objects.

```js
const { title, timeframes } = activity;
const { current, previous } = timeframes[timeframe];
```

#### 5. Template Literals
I used template literals to dynamically generate HTML with embedded JavaScript expressions, making the code more maintainable.

```js
card.innerHTML = `
  <p class="activity-card__time">${current}hrs</p>
  <p class="activity-card__previous">${timeframeTextMap[timeframe]} - ${previous}hrs</p>
`;
```

#### 6. Event Delegation and State Management
I learned how to manage application state (the selected timeframe) and update the UI accordingly when users interact with the timeframe buttons.

```js
const handleTimeframeChange = (e) => {
  timeframe = selectedBtn.dataset.timeframe;
  timeframeBtns.forEach(btn => btn.classList.remove('active'));
  selectedBtn.classList.add('active');
  fetchData();
};
```

### Continued development

In future projects, I want to focus on:

- **Error handling UI**: Adding visual feedback when data fails to load
- **Loading states**: Implementing skeleton screens or spinners during data fetch
- **Accessibility**: Adding ARIA labels and keyboard navigation support
- **Animation**: Adding smooth transitions when switching between timeframes
- **Local Storage**: Persisting user's timeframe preference across sessions
- **API Integration**: Connecting to real-time data sources instead of static JSON

## Author

- Frontend Mentor - [@noob-coder6](https://www.frontendmentor.io/profile/noob-coder6)
- GitHub - [@noob-coder6](https://github.com/noob-coder6)