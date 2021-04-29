const renderAboutMeContent = () => {
  $("#main-container").empty();

  const aboutMeContent = `
  <div class="container text-center" id="about-container">
          <div class="row my-4">
            <h1 class="display-1">About Me</h1>
          </div>
          <div class="row">
            <img
              class="about-image mx-auto"
              src="./assets/images/my-face.png"
              alt="Picture of my face."
            />
          </div>
          <div class="row my-4">
            <div class="col-sm">
              <p class="font-monospace fs-5">
                My name is Soumeya Hassan. I live in Birmingham UK with my
                family. I recently started to learn to code. You can check out
                some off my cool work in my portfolio.
              </p>
            </div>
            <div class="row my-4">
              <h2>Languages and Frameworks</h2>
            </div>
            <div class="row">
              <div class="col-sm tech-icon-container">
                <img
                  src="./assets/images/technologies/html5.png"
                  alt=""
                  class="tech-logo-image"
                  title="HTML 5"
                />
              </div>
              <div class="col-sm">
                <img
                  src="./assets/images/technologies/css3.png"
                  alt=""
                  class="tech-logo-image"
                  title="CSS3"
                />
              </div>
              <div class="col-sm">
                <img
                  src="./assets/images/technologies/javascript.png"
                  alt=""
                  class="tech-logo-image"
                  title="JavaScript"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <img
                  src="./assets/images/technologies/bootstrap.png"
                  alt=""
                  class="tech-logo-image"
                  title="Bootstrap"
                />
              </div>
              <div class="col-sm">
                <img
                  src="./assets/images/technologies/jQuery.png"
                  alt=""
                  class="tech-logo-image"
                  title="jQuery"
                />
              </div>
              <div class="col-sm">
                <img
                  src="./assets/images/technologies/nodeJS.png"
                  alt=""
                  class="tech-logo-image"
                  title="Node.js"
                />
              </div>
              <div class="row">
                <div class="col-sm">
                  <img
                    src="./assets/images/social/github-icon.png"
                    alt=""
                    class="tech-logo-image"
                    title="GitHub"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>`;

  $("#main-container").append(aboutMeContent);
};

const renderLandingPage = () => {
  $("#main-container").empty();

  const renderLandingPageContent = `
      <div
      class="text-center position-absolute top-50 start-50 translate-middle"
      id="start-content"
    >
      <h1 class="display-1">Soumeya Hassan</h1>
      <h3 class="text-muted">Welcome to My Portfolio</h3>
      <div>
        <a href="https://github.com/SoumeyaH" target="_blank">
          <img
            class="logo-image"
            src="./assets/images/social/github-icon.png"
            alt="github icon."
          />
        </a>
        <a
          href="https://www.linkedin.com/in/soumeya-hassan"
          target="_blank"
        >
          <img
            class="logo-image"
            src="./assets/images/social/linkedin-icon.png"
            alt="linkedin icon."
          />
        </a>
      </div>
    </div>`;

  $("#main-container").append(renderLandingPageContent);
};

$("#home-link").click(renderLandingPage);
$("#about-me-link").click(renderAboutMeContent);

$(document).ready(renderLandingPage);
