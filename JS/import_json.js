const listEl = document.querySelector('ul');

fetch('./Resume.json')
    .then(Response => Response.json())
    .then(data => {
      const resumeContainer = document.getElementById('resume-container');

      const educationList = document.getElementById('education-list');

      //Here we loop through the objects in the json file and create a list item for each data which clearly doesn't do anything (Remove later)
      data.education.forEach(education => {
      educationList.innerHTML = `
        <h1>Education</h1>
      ${data.education.map(education => `
        <h2>${education.degree}</h2>
        <p>School: ${education.School}</p>
        <p>Graduation year: ${education.graduation_year}</p>
      `).join('')}
      `;

      const experienceList = document.getElementById('workExp-list');
      
      experienceList.innerHTML = `
        <h1>Work Experience</h1>
      ${data.work_experience.map(work_experience => `
        <h2>${work_experience.position}</h2>
        <p>Company: ${work_experience.company}</p>
        <p>Date: ${work_experience.start_date} - ${work_experience.end_date}</p>
        <p>What I did: ${work_experience.Roles_and_resposibilities}</p>
        `).join('')}`
      });
      resumeContainer.appendChild(educationElement);

      })
      .catch(error => {
        console.error('Error fetching json data', error)
      
    });
    

listEl.classList.add("css-styling")


