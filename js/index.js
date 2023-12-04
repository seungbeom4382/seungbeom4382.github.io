const f = (n) => n < 10 ? '0' + n : n;
const clock = () => {
  const d = new Date();
  const hh = f(d.getHours());
  const mm = f(d.getMinutes());
  const ss = f(d.getSeconds());
  console.log(`${hh}:${mm}:${ss}`);
  return `${hh}:${mm}:${ss}`;
};

const displayClock = () => document.querySelector("#clock-display").innerHTML = clock();  
  displayClock();
  setInterval(displayClock, 1000);