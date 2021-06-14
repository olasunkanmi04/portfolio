<template>
  <Layout>
    <div class="body">
      <div></div>
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
            <a href="#project" class="home__nav-link">
              <span class="home__nav-number">01</span>
              <hr />
              <span class="home__nav-title">Projects</span>
            </a>
            <a href="#skills" class="home__nav-link">
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
            <g-link
              to="https://drive.google.com/file/d/1TxunlEelIv9ZtsnvQjhpqQdAlAuYs2xP/view?usp=sharing"
              class="home__external-link"
              target="_blank"
              >Résumé <svgicon name="link" class="home__external-icon"></svgicon
            ></g-link>
            <g-link
              to="https://github.com/olasunkanmi04"
              target="_blank"
              class="home__external-link"
              >GitHub <svgicon name="link" class="home__external-icon"></svgicon
            ></g-link>
            <g-link
              to="https://linkedin.com/in/alabi-olasunkanmi"
              target="_blank"
              class="home__external-link"
              >LinkedIn
              <svgicon name="link" class="home__external-icon"></svgicon
            ></g-link>
          </div>
        </div>
        <div class="home__content">
          <div id="project">
            <p class="home__title mobile">Projects</p>
            <div class="home__projects">
              <ProjectCard
                v-for="edge in $page.portfolio.edges"
                :key="edge.node.id"
                :work="edge.node"
              ></ProjectCard>
              <!-- <div
                class="home__projects-individual"
                :style="{
                  'background-image':
                    'url(' + require('../assets/images/spleet.png') + ')',
                }"
              >
                <div class="home__projects-individual-detail">
                  <div class="home__projects-individual-detail-content">
                    <div class="home__projects-individual-title-wrap">
                      <g-link
                        to="/project-detail"
                        class="home__projects-individual-title"
                        >Spleet Africa</g-link
                      >
                      <p class="home__projects-individual-industry">PropTech</p>
                    </div>
                    <div class="home__projects-individual-sub">
                      <g-link
                        to="https://spleet.africa"
                        class="home__projects-individual-website"
                        >Website<svgicon
                          name="link"
                          class="home__external-icon"
                        ></svgicon
                      ></g-link>

                      <p class="home__projects-individual-tech">
                        <span>HTML</span>
                        <span>SCSS</span>
                        <span>Bootstrap</span>
                        <span>Vuejs</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="home__projects-individual"
                :style="{
                  'background-image':
                    'url(' + require('../assets/images/spleet.png') + ')',
                }"
              >
                <div class="home__projects-individual-detail">
                  <div class="home__projects-individual-detail-content">
                    <div class="home__projects-individual-title-wrap">
                      <g-link to="/" class="home__projects-individual-title"
                        >Spleet Africa</g-link
                      >
                      <p class="home__projects-individual-industry">PropTech</p>
                    </div>
                    <div class="home__projects-individual-sub">
                      <g-link
                        to="https://spleet.africa"
                        class="home__projects-individual-website"
                        >Website<svgicon
                          name="link"
                          class="home__external-icon"
                        ></svgicon
                      ></g-link>

                      <p class="home__projects-individual-tech">
                        <span>HTML</span>
                        <span>SCSS</span>
                        <span>Bootstrap</span>
                        <span>Vuejs</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="home__projects-individual"
                :style="{
                  'background-image':
                    'url(' + require('../assets/images/spleet.png') + ')',
                }"
              >
                <div class="home__projects-individual-detail">
                  <div class="home__projects-individual-detail-content">
                    <div class="home__projects-individual-title-wrap">
                      <g-link to="/" class="home__projects-individual-title"
                        >Spleet Africa</g-link
                      >
                      <p class="home__projects-individual-industry">PropTech</p>
                    </div>
                    <div class="home__projects-individual-sub">
                      <g-link
                        to="https://spleet.africa"
                        class="home__projects-individual-website"
                        >Website<svgicon
                          name="link"
                          class="home__external-icon"
                        ></svgicon
                      ></g-link>

                      <p class="home__projects-individual-tech">
                        <span>HTML</span>
                        <span>SCSS</span>
                        <span>Bootstrap</span>
                        <span>Vuejs</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="home__projects-individual"
                :style="{
                  'background-image':
                    'url(' + require('../assets/images/spleet.png') + ')',
                }"
              >
                <div class="home__projects-individual-detail">
                  <div class="home__projects-individual-detail-content">
                    <div class="home__projects-individual-title-wrap">
                      <g-link to="/" class="home__projects-individual-title"
                        >Spleet Africa</g-link
                      >
                      <p class="home__projects-individual-industry">PropTech</p>
                    </div>
                    <div class="home__projects-individual-sub">
                      <g-link
                        to="https://spleet.africa"
                        class="home__projects-individual-website"
                        >Website<svgicon
                          name="link"
                          class="home__external-icon"
                        ></svgicon
                      ></g-link>

                      <p class="home__projects-individual-tech">
                        <span>HTML</span>
                        <span>SCSS</span>
                        <span>Bootstrap</span>
                        <span>Vuejs</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <div id="skills">
            <p class="home__title">Languages</p>
            <div class="home__language">
              <div class="home__skill">HTML</div>
              <div class="home__skill">CSS</div>
              <div class="home__skill">JavaScript</div>
            </div>

            <p class="home__title">Frameworks</p>
            <div class="home__language">
              <div class="home__skill">Vuejs</div>
              <div class="home__skill">Reactjs</div>
              <div class="home__skill">jQuery</div>
              <div class="home__skill">Bootstrap</div>
              <div class="home__skill">Tailwindcss</div>
            </div>

            <p class="home__title">Libraries</p>
            <div class="home__language">
              <div class="home__skill">Axios</div>
              <div class="home__skill">Vuex</div>
              <div class="home__skill">Nuxtjs</div>
              <div class="home__skill">Gridsome</div>
            </div>

            <p class="home__title">soft skills</p>
            <div class="home__language" style="margin-bottom:70px">
              <div class="home__skill">Proactive</div>
              <div class="home__skill">Detailed</div>
              <div class="home__skill">Analytical</div>
              <div class="home__skill">Strong communicator</div>
              <div class="home__skill">Strong Collaborator</div>
            </div>
          </div>
          <p class="home__credit">
            Inspired by
            <g-link to="https://sarahdayan.dev/">Sarah Dayan</g-link>
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  portfolio: allPortfolio( filter: {published: {eq: true}}, sortBy: "date"){
    edges{
      node{
        id
        title
        path
        cover_image
        date(format: "D. MMMM YYYY")
        tags
        website
        industry
      }
    }
  }
}

</page-query>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    ProjectCard,
  },
  data() {
    return {};
  },
};
</script>
