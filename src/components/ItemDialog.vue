<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" text>Add Item</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="indigo lighten-1" style="border-radius:0px" >
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-tabs v-model="tab" background-color="indigo lighten-1" dark>
          <v-tab v-for="item in tabItems" :key="item.tab">{{ item.tab }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in tabItems" :key="item.tab">
            <v-card flat>
              <v-card-text>{{ item.content }}</v-card-text>
              <div v-if="item.tab == 'ATTACK'">
                <v-row no-gutters>
                  <v-col md="3" sm="12" xs="12" v-for="(a,i) in getAllAttackItem" :key="i">
                    <v-card class="mx-auto mb-3" max-width="344" outlined>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-4">TIER {{ a.custom.tier }}</div>
                          <v-list-item-title class="headline mb-1">{{ a.name }}</v-list-item-title>
                          <v-list-item-subtitle>
                            <v-spacer></v-spacer>
                            BUY : {{ a.custom.gold.base }} |
                            SELL : {{ a.custom.gold.sell }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80">
                          <v-img :src="'http://img-cdn.mobilecomics.net/' + a.icon"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn color="pink--text" @click="setItem(a)" text>SELECT</v-btn>
                        <v-btn text>VIEW DETAILS</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
              <div v-if="item.tab == 'MAGIC'">
                <v-row no-gutters>
                  <v-col md="3" sm="12" xs="12" v-for="(a,i) in getAllMagicItem" :key="i">
                    <v-card class="mx-auto mb-3" max-width="344" outlined>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-4">TIER {{ a.custom.tier }}</div>
                          <v-list-item-title class="headline mb-1">{{ a.name }}</v-list-item-title>
                          <v-list-item-subtitle>
                            <v-spacer></v-spacer>
                            BUY : {{ a.custom.gold.base }} |
                            SELL : {{ a.custom.gold.sell }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80">
                          <v-img :src="'http://img-cdn.mobilecomics.net/' + a.icon"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn color="pink--text"  @click="setItem(a)" text>SELECT</v-btn>
                        <v-btn text>VIEW DETAILS</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
              <div v-if="item.tab == 'DEFENSE'">
                <v-row no-gutters>
                  <v-col md="3" sm="12" xs="12" v-for="(a,i) in getAllDefenseItem" :key="i">
                    <v-card class="mx-auto mb-3" max-width="344" outlined>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-4">TIER {{ a.custom.tier }}</div>
                          <v-list-item-title class="headline mb-1">{{ a.name }}</v-list-item-title>
                          <v-list-item-subtitle>
                            <v-spacer></v-spacer>
                            BUY : {{ a.custom.gold.base }} |
                            SELL : {{ a.custom.gold.sell }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80">
                          <v-img :src="'http://img-cdn.mobilecomics.net/' + a.icon"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn color="pink--text" @click="setItem(a)"  text>SELECT</v-btn>
                        <v-btn text>VIEW DETAILS</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
              <div v-if="item.tab == 'MOVEMENT'">
                <v-row no-gutters>
                  <v-col md="3" sm="12" xs="12" v-for="(a,i) in getAllMovementItem" :key="i">
                    <v-card class="mx-auto mb-3" max-width="344" outlined>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-4">TIER {{ a.custom.tier }}</div>
                          <v-list-item-title class="headline mb-1">{{ a.name }}</v-list-item-title>
                          <v-list-item-subtitle>
                            <v-spacer></v-spacer>
                            BUY : {{ a.custom.gold.base }} |
                            SELL : {{ a.custom.gold.sell }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80">
                          <v-img :src="'http://img-cdn.mobilecomics.net/' + a.icon"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn color="pink--text"  @click="setItem(a)" text>SELECT</v-btn>
                        <v-btn text>VIEW DETAILS</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
              <div v-if="item.tab == 'JUNGLE'">
                <v-row no-gutters>
                  <v-col md="3" sm="12" xs="12" v-for="(a,i) in getAllJungleItem" :key="i">
                    <v-card class="mx-auto mb-3" max-width="344" outlined>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-4">TIER {{ a.custom.tier }}</div>
                          <v-list-item-title class="headline mb-1">{{ a.name }}</v-list-item-title>
                          <v-list-item-subtitle>
                            <v-spacer></v-spacer>
                            BUY : {{ a.custom.gold.base }} |
                            SELL : {{ a.custom.gold.sell }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80">
                          <v-img :src="'http://img-cdn.mobilecomics.net/' + a.icon"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn color="pink--text"  @click="setItem(a)" text>SELECT</v-btn>
                        <v-btn text>VIEW DETAILS</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
              <div v-if="item.tab == 'ROAM'">
                <v-row no-gutters>
                  <v-col md="3" sm="12" xs="12" v-for="(a,i) in getAllRoamItem" :key="i">
                    <v-card class="mx-auto mb-3" max-width="344" outlined>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-4">TIER {{ a.custom.tier }}</div>
                          <v-list-item-title class="headline mb-1">{{ a.name }}</v-list-item-title>
                          <v-list-item-subtitle>
                            <v-spacer></v-spacer>
                            BUY : {{ a.custom.gold.base }} |
                            SELL : {{ a.custom.gold.sell }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80">
                          <v-img :src="'http://img-cdn.mobilecomics.net/' + a.icon"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn color="pink--text"  @click="setItem(a)" text>SELECT</v-btn>
                        <v-btn text>VIEW DETAILS</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
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
  props: ["items","itemSlot"],
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      tab: null,
      needToFix: [1111, 1112], // no tags and group
      fullItemList: [],
      tabItems: [
        { tab: "ATTACK", content: "ADD ITEM FOR SLOT " + this.$props.itemSlot },
        { tab: "MAGIC", content:  "ADD ITEM FOR SLOT " + this.$props.itemSlot },
        { tab: "DEFENSE", content:  "ADD ITEM FOR SLOT " + this.$props.itemSlot },
        { tab: "MOVEMENT", content:  "ADD ITEM FOR SLOT " + this.$props.itemSlot },
        { tab: "JUNGLE", content:  "ADD ITEM FOR SLOT " + this.$props.itemSlot },
        { tab: "ROAM", content:  "ADD ITEM FOR SLOT " + this.$props.itemSlot }
      ]
    };
  },
  methods:{
    setItem(item) {
      this.$emit("changeItemSlot",item,this.$props.itemSlot)
      this.dialog = false
    }
  },
  computed: {
    getAllAttackItem() {
      return this.fullItemList.filter(item => {
        return item.custom.group == "Attack";
      });
    },
    getAllMagicItem() {
      return this.fullItemList.filter(item => {
        return item.custom.group == "Magic";
      });
    },
    getAllDefenseItem() {
      return this.fullItemList.filter(item => {
        return item.custom.group == "Defense";
      });
    },
    getAllJungleItem() {
      return this.fullItemList.filter(item => {
        return item.custom.group == "Jungle";
      });
    },
    getAllMovementItem() {
      return this.fullItemList.filter(item => {
        return item.custom.group == "Movement";
      });
    },
    getAllRoamItem() {
      return this.fullItemList.filter(item => {
        return item.custom.group == "Roam";
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