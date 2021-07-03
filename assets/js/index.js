const removeBackgroundImg = () => {
  const body = $("#body").removeClass("hero").addClass("background-colour");
  return body;
};

const openResume = () => {
  window.open(
    "https://soumeyah.github.io/portfolio-2/SoumeyaHassanResume.pdf",
    "_blank"
  );
};

const navbarClicked = (event) => {
  switch (event.target.id) {
    case "home-link":
      renderLandingPage();
      break;

    case "about-me-link":
      renderAboutMeContent();
      break;

    case "portfolio-link":
      renderPortfolioContent();
      break;

    case "contact-me-link":
      renderContactMeContent();
      break;

    case "resume-link":
      openResume();
      break;
  }
};

$("#navbar-items").click(navbarClicked);

$(document).ready(renderLandingPage);
