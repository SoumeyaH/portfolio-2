const renderContactMeContent = () => {
  removeBackgroundImg();
  $("#main-container").empty();

  const contactMeContent = `
  <div class="mx-auto">
        <div class="row my-4 text-center">
          <h1 class="display-1">Contact Me</h1>
        </div>

        <div class="d-flex flex-wrap justify-content-center">
          <form class="mx-2">
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
          <aside class="m-2">
            <p><strong>Email:</strong><a href="mailto:soumeyahassan47@gmail.com"> soumeyahassan47@gmail.com</a>
            </p>
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
  removeBackgroundImg();
  $("#main-container").empty();

  const portfolioContent = `
    <div class="card text-center my-4 mx-auto shadow-lg portfolio-card">
    <div class="card-header">Tri-Via-Hub</div>
    <div class="card-body">
      <video controls muted class="card-img-top project-img">
        <source src="./assets/videos/tri-via-hub.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p class="m-2">
        Event Jam is a fullstack application that offer users the ability to
        securely sign-up/login, create and play quizzes. Quizzes can be
        created with the users own questions or generated via the Open Trivia
        API
      </p>
      <p class="m-2 fst-italic text-muted">
        HTML/CSS, Bootstrap, JS (ES6), jQuery, Third-Party API, Node.js,
        MySQL, Sequelize, Express, Handlebars, Git, Heroku
      </p>
      <div class="d-flex flex-wrap justify-content-center">
      <div>
      <a href="https://powerful-journey-42110.herokuapp.com/" target="_blank">
        <button type="button" class="btn btn-light mx-3 my-1">
          Deployed
        </button>
      </a>
    </div>
    <div>
      <a href="https://github.com/SoumeyaH/tri-via-hub" target="_blank">
        <button type="button" class="btn btn-light mx-3 my-1">
          Github
        </button>
      </a>
    </div>
      </div>
    </div>
  </div>

  <div class="card text-center my-4 mx-auto shadow-lg portfolio-card">
    <div class="card-header">Event Jam</div>
    <div class="card-body">
      <video controls muted class="card-img-top project-img">
        <source src="./assets/videos/event-jam.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p class="m-2">
        Event Jam is a dynamic online application that offer users the ability
        to search for events in any city in the UK and get relevant, reliable
        and up to date Covid-19 information for that area.
      </p>
      <p class="m-2 fst-italic text-muted">
        HTML/CSS, Bulma, JS (ES6), jQuery, Chart.js, Third-Party APIs, Git
      </p>
      <div class="d-flex flex-wrap justify-content-center">
        <div>
          <a href="https://soumeyah.github.io/event-jam/" target="_blank">
            <button type="button" class="btn btn-light mx-3 my-1">
              Deployed
            </button>
          </a>
        </div>
        <div>
          <a href="https://github.com/SoumeyaH/event-jam" target="_blank">
            <button type="button" class="btn btn-light mx-3 my-1">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  `;

  $("#main-container").append(portfolioContent);
};

const renderAboutMeContent = () => {
  removeBackgroundImg();
  $("#main-container").empty();

  const aboutMeContent = `
  <div class="container text-center" id="about-container">
  <div class="row my-4">
    <h1 class="display-1">About Me</h1>
  </div>
  <div class="row my-4">
    <div class="col-sm font-monospace fs-5">
      <p>Hi, my name is Soumeya Hassan.</p>
      <p>I live in Birmingham UK with my family.</p>
      <p>
        I recently started to learn to code. You can check out some off my
        cool work in my portfolio.
      </p>
    </div>
    <div class="row my-4">
      <h2>Languages and Frameworks</h2>
    </div>
    <div class="tech-icons-container">
      <div>
        <img
          src="./assets/images/technologies/html5.png"
          alt=""
          class="tech-logo-image"
          title="HTML 5"
        />
      </div>
      <div>
        <img
          src="./assets/images/technologies/css3.png"
          alt=""
          class="tech-logo-image"
          title="CSS3"
        />
      </div>
      <div>
        <img
          src="./assets/images/technologies/javascript.png"
          alt=""
          class="tech-logo-image"
          title="JavaScript"
        />
      </div>
      <div>
        <img
          src="./assets/images/technologies/bootstrap.png"
          alt=""
          class="tech-logo-image"
          title="Bootstrap"
        />
      </div>
      <div>
        <img
          src="./assets/images/technologies/jQuery.png"
          alt=""
          class="tech-logo-image"
          title="jQuery"
        />
      </div>
      <div>
        <img
          src="./assets/images/technologies/nodeJS.png"
          alt=""
          class="tech-logo-image"
          title="Node.js"
        />
      </div>
      <div>
        <img
          src="./assets/images/social/github-icon.png"
          alt=""
          class="tech-logo-image"
          title="GitHub"
        />
      </div>
    </div>
  </div>
</div> `;

  $("#main-container").append(aboutMeContent);
};

const renderLandingPage = () => {
  $("#body").removeClass("background-colour").addClass("hero");
  $("#main-container").empty();

  const landingPageContent = `
      <div
      class="text-center position-absolute top-50 start-50 translate-middle"
      id="start-content"
    >
      <h1 class="display-1">Soumeya Hassan</h1>
      <h3 class="text-muted">Welcome to My Portfolio</h3>
      <div>
        <span>
          <a href="https://github.com/SoumeyaH" target="_blank">
          <img
            class="logo-image"
            src="./assets/images/social/github-icon.png"
            alt="github icon."
          />
          </a>
        </span>
        <span>
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
        </span>
      </div>
    </div>`;

  $("#main-container").append(landingPageContent);
};
