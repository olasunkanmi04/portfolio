<template>
  <Layout>
    <div class="body">
      <div class="home">
        <div class="home__info">
          <h1 class="home__intro">Hello, I am Olasunkanmi Alabi.</h1>
          <p class="home__intro-brief">
            A Front-end developer currently working as Front-end Engineer at
            <a href="http://spleet.africa/" target="_blank">Spleet Africa</a>.
            Proficient in HTML, CSS, and JavaScript with working experience
            using modern libraries and frameworks. I have launched Web and
            Progressive Web Applications using
            <a href="https://vuejs.org/" target="_blank">Vuejs</a> and
            <a href="https://reactjs.org/" target="_blank">Reactjs</a>. A strong
            team player with great communication skills and creative
            problem-solving abilities. I have an eye for design and keen on the
            impact on usability related issues on the experience of users.
          </p>

          <div class="home__nav">
            <a href="#" class="home__nav-link">
              <span class="home__nav-number">01</span>
              <hr />
              <span class="home__nav-title">Projects</span>
            </a>
            <a href="#" class="home__nav-link">
              <span class="home__nav-number">02</span>
              <hr />
              <span class="home__nav-title">Skills</span>
            </a>
          </div>

          <a href="mailto:alabiolasunkanmi@outlook.com" class="home__email"
            ><svgicon name="email" class="home__email-icon"></svgicon>
            alabiolasunkanmi@outlook.com</a
          >

          <div class="home__external">
            <div class="home__pics"></div>
            <a
              href="/src/assets/doc/olasunkanmi%20resume.pdf"
              target="_blank"
              type="application/pdf"
              class="home__external-link"
              >Résumé <svgicon name="link" class="home__external-icon"></svgicon
            ></a>
            <a
              href="https://github.com/olasunkanmi04"
              target="_blank"
              class="home__external-link"
              >GitHub <svgicon name="link" class="home__external-icon"></svgicon
            ></a>
            <a
              href="https://linkedin.com/in/alabi-olasunkanmi"
              target="_blank"
              class="home__external-link"
              >LinkedIn
              <svgicon name="link" class="home__external-icon"></svgicon
            ></a>
          </div>
        </div>
        <div class="home__content"></div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style></style>
