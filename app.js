
const newYears = "1 Jan 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const remainSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(remainSeconds / 3600 / 24);
  const hours = Math.floor(remainSeconds / 3600) % 24;
  const minutes = Math.floor(remainSeconds / 60) % 60;
  const seconds = Math.floor(remainSeconds) % 60;
}

countdown();

setInterval(countdown, 1000);

