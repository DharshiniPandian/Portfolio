let currentIndex = 0;

function moveCarousel(direction) {
  const carouselTrack = document.querySelector(".carousel-track");
  const projects = document.querySelectorAll(".pro");
  const projectWidth = projects[0].getBoundingClientRect().width;

  if (direction === "right" && currentIndex < projects.length - 2) {
    currentIndex++;
  } else if (direction === "left" && currentIndex > 0) {
    currentIndex--;
  }

  const newTransform = -projectWidth * currentIndex;
  carouselTrack.style.transform = `translateX(${newTransform}px)`;
}

document.getElementById('menu-open').onclick = function() {
    document.getElementById('menu').classList.add('active');
    document.getElementById('menu-open').style.display = 'none';
    document.getElementById('menu-close').style.display = 'block';
  };
  
  document.getElementById('menu-close').onclick = function() {
    document.getElementById('menu').classList.remove('active');
    document.getElementById('menu-open').style.display = 'block';
    document.getElementById('menu-close').style.display = 'none';
  };
  
  // Select the form
  const submitForm = document.getElementById('submit');
  
  // Select the form fields
  const name=document.getElementById("name")
  const mail = document.getElementById("email");
  const sub = document.getElementById("subject");
  const ebody = document.getElementById("ebody");
  
  
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    const val = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.3;">
      <h2 style="font-size: 24px; color: #007BFF;">Name:</h2>
      <p style="font-size: 18px; margin: 0;">${name.value}</p>
      <hr style="border: 0; margin: 20px 0;">
  
      <h2 style="font-size: 24px; color: #007BFF;">Email:</h2>
      <p style="font-size: 18px; margin: 0;">${mail.value}</p>
      <hr style="border: 0; margin: 20px 0;">
  
      <h2 style="font-size: 24px; color: #007BFF;">Body:</h2>
      <p style="font-size: 18px; margin: 0;">${ebody.value}</p>
    </div>
  `;
  
  
    Email.send({
      SecureToken : "16ead2b5-99d3-4f7a-8f6b-a2809e7c2333",
      To : 'dharshinipandian05@gmail.com',
      From : 'dharshinipandian05@gmail.com',
      Subject : sub.value,
      Body : val
    }).then(
      message => alert(message)
    );
  });
  

