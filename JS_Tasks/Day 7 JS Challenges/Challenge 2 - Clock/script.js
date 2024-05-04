
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate () {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  }
  setInterval(setDate, 1000);
 


  
  // const m = new Date();
  // let minuts = m.getMinutes();
  // document.getElementById("demo1").innerHTML = minuts;

  // const s = new Date();
  // let sec = s.getSeconds();
  // document.getElementById("demo1").innerHTML = sec + ":" + minuts;

  // const h = new Date();
  // let hr = h.getHours();
  // document.getElementById("demo1").innerHTML = hr + ":" + minuts + ":" + sec;