<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="bg-primary nav-bar text-white">
        <q-toolbar-title>
          <q-btn
            v-if="!$q.screen.gt.sm"
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
            class="q-mr-sm"
          />
          <img
            alt="Quasar logo"
            src="~assets/left-logo-menuIcon.svg"
            style="height: 20px"
          />
        </q-toolbar-title>
        <q-btn flat round icon="dark_mode"></q-btn>

        <q-btn flat round icon="notifications"></q-btn>
        <q-btn flat round icon="language"></q-btn>

        <div>
          <h5>{{ user.username }}</h5>
          <h5 class="role">{{ user.role }}</h5>
        </div>
        <q-avatar>
          <img src="~assets/user.png" />
          <q-badge color="accent" rounded class="avatar-status" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$q.screen.gt.sm"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      class="q-pa-sm"
    >
      <q-list>
        <MenuItems v-for="link in navItems" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-drawer
      v-else
      behavior="mobile"
      v-model="drawer"
      :width="300"
      :breakpoint="500"
      overlay
      bordered
      class="q-pa-sm"
    >
      <q-scroll-area class="fit">
        <q-list>
          <MenuItems v-for="item in navItems" v-bind:key="item" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-grey-4 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <h6 class="q-mt-md q-ml-sm">COPYRIGHT © 2023 EdMachina</h6>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>


<script setup>
import { ref, onMounted } from "vue";
import MenuItems from "./components/MenuItems.vue";
import { useStore } from "vuex";

const store = useStore()


const drawer = ref(true);
const miniState = ref(true);
const navItems = [
  {
    title: "Dashboard",
    icon: "home",
    link: "/",
    featured: true,
  },
  {
    title: "Smart Enroller",
    icon: "add_box",
    link: "#",
    featured: true,
  },
  {
    title: "Dropout Shield",
    icon: "outbound",
    link: "#",
    featured: true,
  },
  {
    title: "Retention Partner",
    icon: "loop",
    link: "#",
    featured: false,
  },
  {
    title: "Risk Detector",
    icon: "analytics",
    link: "#",
    featured: true,
    children: [
      {
        title: "My Reports",
        link: "#",
      },
      {
        title: "My Reports",
        link: "#",
      },
      {
        title: "My Reports",
        link: "#",
      },
    ],
  },
  {
    title: "Academic Offer",
    icon: "school",
    link: "#",
    featured: true,
    children: [
      {
        title: "Offer 1",
        link: "#",
      },
      {
        title: "Offer 2",
        link: "#",
      },
      {
        title: "Offer 3",
        link: "#",
      },
    ],
  },
  {
    title: "My Reports",
    icon: "leaderboard",
    link: "#",
    featured: true,
  },
  {
    title: "Custom Reports",
    icon: "addchart",
    link: "#",
    featured: false,
  },
  {
    title: "Workflows",
    icon: "account_tree",
    link: "#",
    featured: false,
  },
];
const leftDrawerOpen = ref(false);

// En situación real, datos recuperables una vez pasado el login y obtenida la info del usuario
const user = ref({
  username: "Hellen Smith",
  role: "Admin",
});



onMounted(() => {
  store.commit("Login/SET_USER", user.value);
});
</script>




<style scoped>
.nav-bar {
  height: 63px;
  padding: 12px 22px;
}
.nav-bar h5 {
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  margin: 3px 14px;
  text-align: right;
}

.nav-bar .role {
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-align: right;
}

.nav-bar .avatar-status {
  border: 2px solid #fff;
  bottom: 0px;
  position: absolute;
  right: 0px;
}
</style>
