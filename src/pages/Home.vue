<template>
   <div class="home">
    <q-layout view="lhr LpR lff" container style="min-height: 100vh" class="shadow-2 rounded-borders">
      <q-header reveal class="bg-black">
        <q-toolbar>
          <q-toolbar-title>boin</q-toolbar-title>
          <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-footer>
        <q-toolbar>
          <q-toolbar-title>contact</q-toolbar-title>
        </q-toolbar>
      </q-footer>


      <q-drawer
        side="right"
        v-model="drawerRight"
        bordered
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <q-list separator>
      <q-item clickable v-ripple>
        <q-item-section>Web PortFolios</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
          </div>
        </q-scroll-area>
      </q-drawer>

      <q-page-container style="height: 100vh">
        <q-page style="padding-top: 60px" class="q-pa-md">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>

          <q-page-sticky position="top" expand class="bg-accent text-white">
            <q-toolbar>
              <q-btn flat round dense icon="map" />
              <q-toolbar-title>Title</q-toolbar-title>
            </q-toolbar>
          </q-page-sticky>
        </q-page>

        <q-page-scroller position="bottom">
          <q-btn fab icon="keyboard_arrow_up" color="red" />
        </q-page-scroller>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  },
    data () {
    return {
      drawerLeft: false,
      drawerRight: true
    }
  },
  created() {
    console.log(this.$q.screen.width)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background: black;
  min-height: 100%;
}

</style>
