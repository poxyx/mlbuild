<template>
  <div>
    <v-tabs show-arrows grow v-model="tab" background-color="lighten-1 indigo" centered dark>
      <v-tabs-slider></v-tabs-slider>

      <v-tab v-bind:href="tab.id" v-for="tab in tabList" :key="tab.id">{{ tab.name }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 7" :key="i" :value="'tab-' + i">
        <v-card style="border-radius:0px" :elevation="1">
          <v-tabs vertical>
            <v-tab>HERO SKILL</v-tab>
            <v-tab>ITEM</v-tab>
            <v-tab>EMBLEM</v-tab>
            <v-tab>SKIN</v-tab>

            <v-tab-item>
              <v-card flat class="pa-3">
                <v-row>
                  <v-col
                    md="6"
                    sm="12"
                    xs="12"
                    v-for="(skill,i) in hero.skills"
                    :key="i"
                    class="pa-5"
                  >
                    <v-card style="border-radius:0px" class="pa-3" elevation="1">
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title class="headline">
                            {{ skill.name }}
                          </v-card-title>
                          <v-card-subtitle v-if="i != 0">
                            <v-select :items="level" label="Skill Level"></v-select>
                          </v-card-subtitle>
                        </div>
                        <v-avatar class="ma-3" size="125" tile>
                          <v-img :src="'http://img-cdn.mobilecomics.net/' + skill.icon"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <ItemDialog :items="items" />
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>

                  <p
                    class="mb-0"
                  >Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>

                  <p
                    class="mb-0"
                  >Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ItemDialog from "@/components/ItemDialog";

export default {
  name: "HeroBuilderTab",
  components: {
    ItemDialog
  },
  props: ["hero", "items"],
  data() {
    return {
      tab: null,
      level: [1, 2, 3, 4, 5, 6],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      tabList: [
        { id: "#tab-1", name: "BUILDER", icon: "fas fa-gavel" },
        { id: "#tab-2", name: "GUIDES", icon: "fas fa-book-open" },
        { id: "#tab-3", name: "ENEMY", icon: "fas fa-book-open" },
        { id: "#tab-4", name: "PASSIVE", icon: "fas fa-book-open" },
        { id: "#tab-5", name: "ATTRIBUTES", icon: "fas fa-book-open" },
        { id: "#tab-6", name: "SKILL", icon: "fas fa-book-open" },
        { id: "#tab-7", name: "HERO PROFILE", icon: "mdi-account-box" }
      ]
    };
  }
};
</script>