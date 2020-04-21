<template>
  <v-container>
    <v-row wrap no-gutters>
      <v-col cols="12" class="hidden-sm-and-down">
        <v-card flat style="border-radius:0px;overflow:hidden" height="400px" width="auto">
          <v-img
            aspect-ratio="1.6"
            width="100%"
            lazy-src="https://m.mobilelegends.com/static/images/background/barbaclighter.png"
            fill-height
            v-bind:src="'http://img-cdn.mobilecomics.net/' + hero.cover_pic"
          >
            <v-card-title class="white--text ma-3">
              <h1>{{ hero.name.toUpperCase() }}</h1>
            </v-card-title>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-card flat style="border-radius:0px" class="mb-5">
        <HeroBuilderTab :hero="hero" :items="itemList" />
    </v-card>
  </v-container>
</template>

<script>
import db from "@/firebase/init"
import HeroBuilderTab from"@/components/HeroBuilderTab"

export default {
  name: "HeroBuilder",
  components: {
    HeroBuilderTab
  },
  data() {
    return {
      hero: this.$route.query.hero,
      itemList: []
    };
  },
  created() {
    db.collection("item")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.itemList.push(doc.data())
        });
      });
  }
};
</script>