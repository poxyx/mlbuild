<template>
  <div>
    <v-row no-gutters>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="indigo"
        @click="toTop"
      >
        <v-icon>fas fa-arrow-up</v-icon>
      </v-btn>
      <v-col cols="2" class="pa-1" v-for="h in filteredHero" :key="h.id">
        <v-hover v-slot:default="{ hover }" open-delay="0">
          <v-card
            :elevation="hover ? 24 : 1"
            text
            class="mt-2 mr-1 mx-auto"
            max-width="250"
            style="border-radius:0px;"
          >
            <div class="ribbon ribbon-top-right hidden-sm-and-down" v-if="h.id == newHero">
              <span>NEW HERO</span>
            </div>
            <router-link v-bind:to="'home'" style="text-decoration:none" class="white--text">
              <v-img
                :src="imgUrl + h.picture"
                lazy-src="https://m.mobilelegends.com/static/images/background/barbaclighter.png"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="500"
                height="350"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </router-link>
            <v-card-text class="grey darken-3 lighten-2 pa-5 hidden-sm-and-down">
              <div>
                <h2 class="white--text">
                  <i>{{ h.name }}</i>
                </h2>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HeroCard",
  data: () => ({
    imgUrl: "http://img-cdn.mobilecomics.net/",
    fab: false,
    newHero: 93
  }),
  props: ["hero", "filter"],
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },
  computed: {
    filteredHero() {
      return this.hero.filter(hero => {
        if (this.filter == "All") {
          return true;
        } else {
          return hero.type == this.filter;
        }
      });
    }
  }
};
</script>

<style scoped>
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  z-index: 999999;
}

.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: "";
  display: block;
  border: 5px solid #E53935;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 7px 0;
  background-color: #E53935;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 500 16px/1 "Lato", sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 22px;
}
.ribbon-top-right::after {
  bottom: 22px;
  right: 0;
}
.ribbon-top-right span {
  left: -27px;
  top: 29px;
  transform: rotate(45deg);
}
</style>