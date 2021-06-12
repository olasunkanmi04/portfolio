<template>
  <Layout>
    <div class="body">
      <div class="home">
        <div class="product__content">
          <g-link
            to="https://spleet.africa"
            target="_blank"
            class="product__website"
          >
            Spleet Africa
            <svgicon name="link" class="home__external-icon"></svgicon>
          </g-link>
          <h1 class="product__title">Easier living in Africa</h1>
          <p class="product__tech">
            <span>Technology:</span> Vuejs, Vuex, Axios, HTML, CSS, JavaScript,
            Figma, Adobe XD
          </p>

          <p class="product__text">
            Spleet is a leading proptech company in Africa. Building the future
            of structured and equitable access to housing where everybody gets a
            fair chance at efficient and affordable living spaces.
          </p>
          <p class="product__text" style="margin-bottom:50px">
            I built all of the Spleet frontend, converting UI designs to web and
            mobile ready application using the component base approach for
            reusable design components, while integrating API from the backend
            team as well as third-party APIs integration such as different
            payment APIs, google map’s API etc.
          </p>

          <p class="product__subtitle">Hosting on Spleet</p>
          <p class="product__text">
            I built the frontend of an hosting feature for home owners who have
            spare bedrooms or even an entire flat or apartments for them to be
            able to self host their spaces. This feature is a robust multi-step
            form with three steps and about 15 levels covering all necessary
            information needed.
          </p>
          <p class="product__text" style="margin-bottom:50px">
            It features date calendar selector, google maps’ autocomplete and
            map and amenities dropdown multi-select. It comes with an extensive
            dashboard for host to manger bookings, subscriptions and their
            earnings on the Spleet platform.
          </p>
        </div>
        <div
          class="product__image"
          :style="{
            'background-image':
              'url(' + require('../assets/images/hosting.png') + ')',
          }"
        ></div>

        <div class="product__content">
          <p class="product__subtitle">Calendar</p>
          <p class="product__text">
            I implemented an end-to-end calendar system. This allows the host
            set up availability days, minimum and maximum night a
            member/customer can book and how far in advance they can book on
            their calendar and on the member end, they can book available days.
            Also once a space/apartment is booked and paid for, those days on
            the calendar are blocked for other member that want to book the
            space.
          </p>
        </div>

        <div
          class="product__image"
          :style="{
            'background-image':
              'url(' + require('../assets/images/calendar.png') + ')',
          }"
        ></div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style></style>
