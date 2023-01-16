  // Set Time and Year 
  const myLabel = document.getElementById("myLabel");

  update();
  setInterval(update, 1000);
  
  function update() {
      
      let date = new Date();
      myLabel.innerHTML = formatTime(date);
      
      function formatTime(date) {
          let hours = date.getHours(); 
          let minutes = date.getMinutes(); 
          let seconds = date.getSeconds(); 
          let amOrpm = hours >=12 ? "pm" : "am";
          hours = (hours % 12) || 12;
          let year = date.getFullYear();

          return `${hours}:${minutes}:${seconds}:${amOrpm} | | ${year}   `;
      }
  }