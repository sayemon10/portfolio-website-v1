document.addEventListener('DOMContentLoaded', function () {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    fetch("https://arifrexa.pythonanywhere.com/technologies/api/technologies/", requestOptions)
      .then((response) => response.json()) // Use response.json() to parse the JSON response
      .then((result) => {
        const skillsContainer = document.querySelector('.skills__container');
  
        // Loop through the result to display the skills dynamically
        result.forEach(skill => {
          const skillCategory = skill.category; // e.g., 'Languages', 'Frameworks'
          const skillName = skill.name; // e.g., 'Python', 'Django'
          const skillIcon = skill.icon; // e.g., URL of the icon
          console.log(skillIcon);
          
          const skillProgress = skill.progress; // e.g., a value between 0 and 100
  
          // Create HTML for each skill card dynamically
          const skillCard = `
            <div class="skills__grid">
                <div class="skills__card">
                    <img src="${skillIcon}" alt="${skillName}" class="skills__icon" style="width: 50px;">
                    <h3 class="skills__name">${skillName}</h3>
                    <div class="skills__bar">
                        <div class="skills__progress" style="width: ${skillProgress}%"></div>
                    </div>
                </div>
            </div>
          `;
  
          // Append the created card to the skills container
          skillsContainer.innerHTML += skillCard;
        });
      })
      .catch((error) => console.error('Error fetching skills:', error));
  });
  