const renderContactMeContent = () => {
  $("#main-container").empty();

  const contactMeContent = `
  <div class="mx-auto">
  <div class="row my-4 text-center">
  <h1 class="display-1">Contact Me</h1>
</div>
<div class="row">
  <form class="col-sm">
    <div class="row">
      <div class="col-md my-2">
        <div class="form-floating">
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            id="floatingInputGrid"
            placeholder="First Name"
          />
          <label for="floatingInputGrid">First Name</label>
        </div>
      </div>
      <div class="col-md my-2">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="Surname"
          />
          <label for="floatingInputGrid">Surname</label>
        </div>
      </div>
    </div>
    <div class="form-floating my-2">
      <input
        type="email"
        class="form-control"
        id="floatingInputGrid"
        placeholder="name@example.com"
      />
      <label for="floatingInputGrid">Email address</label>
    </div>
    <div class="form-floating mt-4">
      <input
        type="text"
        class="form-control"
        id="floatingInputGrid"
        placeholder="subject"
      />
      <label for="floatingInputGrid">Subject</label>
    </div>
    <div class="form-floating mt-4">
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style="height: 100px"
      ></textarea>
      <label for="floatingTextarea2">Message</label>
    </div>
    <div class="text-center mx-auto my-3">
      <button type="button" class="btn btn-primary" disabled>
        Submit
      </button>
    </div>
  </form>
  <aside class="col-sm py-2">
    <p><strong>Email:</strong> soumeyahassan47@gmail.com</p>
    <p><strong>Phone:</strong> +447419213578</p>
    <div>
      <div>
        <span><strong>GitHub:</strong></span>
        <a href="https://github.com/SoumeyaH" target="_blank">
          <img
            class="logo-image"
            src="./assets/images/social/github-icon.png"
            alt="github icon."
          />
        </a>
      </div>
      <div>
        <span><strong>LinkedIn:</strong></span>
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
    </div>
  </aside>
</div>
  </div>`;

  $("#main-container").append(contactMeContent);
};

const renderPortfolioContent = () => {
  $("#main-container").empty();

  const portfolioContent = `
  <div class="row my-4 text-center">
  <h1 class="display-1">Portfolio</h1>
</div>
<div class="shadow-lg rounded mx-auto" style="max-width: 90vw">
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4 portfolio-image-container">
        <div class="control-image-size">
          <img
            src="./assets/images/portfolio/event-jam.png"
            alt="Event Jam landing page."
            class="portfolio-img"
          />
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title text-center">Event Jam</h4>
          <p class="card-text">
            Event Jam is a dynamic online application that offer users
            the ability to search for events in any city in the UK and
            get relevant, reliable and up to date Covid-19 information
            for that area.
          </p>
          <div class="text-center">
            <a
              href="https://iwanagahime.github.io/event-jam/"
              target="_blank"
            >
              <button type="button" class="btn btn-light mx-3 my-1">
                Deployed
              </button>
            </a>
            <a
              href="https://github.com/iwanagahime/event-jam"
              target="_blank"
            >
              <button type="button" class="btn btn-light mx-3 my-1">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  $("#main-container").append(portfolioContent);
};

const renderAboutMeContent = () => {
  $("#main-container").empty();

  const aboutMeContent = `
  <div class="container text-center" id="about-container">
          <div class="row my-4">
            <h1 class="display-1">About Me</h1>
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

  const landingPageContent = `
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

  $("#main-container").append(landingPageContent);
};

$("#home-link").click(renderLandingPage);
$("#about-me-link").click(renderAboutMeContent);
$("#portfolio-link").click(renderPortfolioContent);
$("#contact-me-link").click(renderContactMeContent);
// $("#resume-link").click(renderPortfolioContent);

$(document).ready(renderLandingPage);
