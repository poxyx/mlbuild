<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="indigo lighten-1" style="border-radius:0px">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-tabs v-model="tab" background-color="indigo lighten-1" dark>
          <v-tab v-for="item in tabItems" :key="item.tab">{{ item.tab }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in tabItems" :key="item.tab">
            <v-card flat>
              <v-card-text>{{ item.content }}</v-card-text>
              <div v-if="item.tab == 'ATTACK'">
                <span v-for="(a,i) in getAllAttackItem" :key="i">{{ a.name }}</span>
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ItemDialog",
  props: ["items"],
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      tab: null,
      needToFix: [1111, 1112],
      fullItemList: [],
      tabItems: [
        { tab: "ATTACK", content: "Tab 1 Content" },
        { tab: "MAGIC", content: "Tab 2 Content" },
        { tab: "DEFENSE", content: "Tab 3 Content" },
        { tab: "MOVEMENT", content: "Tab 4 Content" },
        { tab: "JUNGLE", content: "Tab 5 Content" },
        { tab: "BASIC", content: "Tab 6 Content" }
      ]
    };
  },
  computed: {
    getAllAttackItem() {
      return this.fullItemList.filter(item => {
        return item.custom.group == "Attack";
      });
    }
  },
  created() {
    this.$props.items.forEach(data => {
      if (this.needToFix.indexOf(data.data.id) == -1) {
        this.fullItemList.push(data.data);
      }
    });
  }
};
</script>