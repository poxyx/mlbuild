<template>
  <v-container fluid>
    <v-toolbar light flat class="mb-5">
      <v-menu :close-on-content-click="false" :nudge-width="0" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon class="mr-3">fas fa-filter</v-icon>FILTER BY NAME
          </v-btn>
        </template>

        <v-card height="350px" style="border-radius:0px">
          <v-list>
            <v-list-item v-for="(hero, index) in heroList" :key="index">
              <v-list-item-title class="ml-3">
                <v-btn text block @click=" filterHeroByName(hero.name)">{{ hero.name }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <v-divider class="mx-4 hidden-sm-and-down" inset vertical></v-divider>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="filterHeroByType('All')">ALL</v-btn>
        <v-btn text @click="filterHeroByType('Assassin')">ASSASSINS</v-btn>
        <v-btn text @click="filterHeroByType('Fighter')">FIGHTERS</v-btn>
        <v-btn text @click="filterHeroByType('Mage')">MAGES</v-btn>
        <v-btn text @click="filterHeroByType('Marksman')">MARKSMEN</v-btn>
        <v-btn text @click="filterHeroByType('Support')">SUPPORTS</v-btn>
        <v-btn text @click="filterHeroByType('Tank')">TANKS</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-divider class="mx-4 hidden-sm-and-down" inset vertical></v-divider>
      <v-menu :close-on-content-click="false" :nudge-width="0" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" @click="test">HERO DIFFICULTIES</v-btn>
        </template>

        <v-card height="350px" style="border-radius:0px">
          <v-list>
            <v-list-item v-for="(d, index) in filteredDifficulty" :key="index">
              <v-list-item-title class="ml-3">
                <v-btn text block>{{ d }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>
    <v-container>
      <HeroCard :hero="heroList" :filter="filter" :new-hero="newestHero" />
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
    filterHeroByType(type) {
      this.filter = type;
    },
    filterHeroByName(name) {
      this.filter = name;
    },
    test() {
      console.log(this.heroDifficulty);
    }
  },
  data: () => ({
    heroList: [],
    filteredDifficulty: [],
    filter: "All",
    newestHero: 0
  }),
  computed: {},
  beforeCreate: function() {
    fetch(
      "http://img-cdn.mobilecomics.net/miya/hero_en_860faacbb6901562bc109bc92b2cfb7d.json",
      {
        method: "GET",
        redirect: "follow"
      }
    )
      .then(response => response.json())
      .then(result => {
        this.heroList = result.data.hero;
        this.newestHero = result.data.hero.length + 1;
      })
      .then(() => {
        this.heroList.forEach(item => {
          this.filteredDifficulty.push(item.ability[3]);
        });
      })
      .then(() => {
        this.filteredDifficulty = new Set(this.filteredDifficulty);
      })
      .catch(error => console.log("error", error));
  }
};
</script>
