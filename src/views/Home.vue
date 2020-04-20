<template>
  <v-container fluid>
    <v-toolbar light flat class="mb-5">
      <v-menu :close-on-content-click="false" :nudge-width="0" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon class="mr-3">fas fa-search</v-icon>
            SEARCH BY NAME
          </v-btn>
        </template>

        <v-card height="350px" style="border-radius:0px">
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title class="ml-3">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <v-divider class="mx-4  hidden-sm-and-down" inset vertical></v-divider>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="filterHero('All')">ALL</v-btn>
        <v-btn text @click="filterHero('Assassin')">ASSASSINS</v-btn>
        <v-btn text @click="filterHero('Fighter')">FIGHTERS</v-btn>
        <v-btn text @click="filterHero('Mage')">MAGES</v-btn>
        <v-btn text @click="filterHero('Marksman')">MARKSMEN</v-btn>
        <v-btn text @click="filterHero('Support')">SUPPORTS</v-btn>
        <v-btn text @click="filterHero('Tank')">TANKS</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-divider class="mx-4  hidden-sm-and-down" inset vertical></v-divider>
      <v-btn text>ALL DIFFICULTIES</v-btn>
    </v-toolbar>
    <v-container>
      <HeroCard v-bind:hero="heroList" v-bind:filter="filter" />
    </v-container>
  </v-container>
</template>
<script>
import HeroCard from "@/components/HeroCard";
export default {
  name: "Home",
  components: {
    HeroCard
  },
  methods: {
    filterHero(type) {
      this.filter = type;
    }
  },
  data: () => ({
    heroList: [],
    filter: "All",
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" }
    ]
  }),
  beforeCreate: function() {
    fetch(
      "http://img-cdn.mobilecomics.net/miya/hero_en_c46a9da73b0464a4a2af7c7cf11d3fda.json",
      {
        method: "GET",
        redirect: "follow"
      }
    )
      .then(response => response.json())
      .then(result => {
        this.heroList = result.data.hero;
        console.log(result.data.hero[0]);
      })
      .catch(error => console.log("error", error));
  }
};
</script>
