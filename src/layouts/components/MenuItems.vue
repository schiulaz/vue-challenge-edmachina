<template>
  <q-expansion-item
    v-if="children"
    :icon="icon"
    :label="title"
    :class="`sidebar-icon ${featured ? 'text-weight-bold' : ''}`"
  >
    <ul>
      <li
        v-for="c in children"
        v-bind:key="c"
        :class="`menu-item submenu ${featured ? 'text-weight-bold' : ''}`"
      >
        <a :href="c.link"
          ><span> {{ c.title }}</span></a
        >
      </li>
    </ul>
  </q-expansion-item>

  <q-item
    v-else
    clickable
    :href="link"
    style="
      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
      border-radius: 6px;
    "
    :class="` ${title == 'Dashboard' ? 'bg-primary text-white' : ''}`"
    active-class="bg-primary text-white"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon
        :name="icon"
        :class="`${title != 'Dashboard' ? 'sidebar-icon' : ''}`"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="`menu-item ${featured ? 'text-weight-bold' : ''} ${
          title == 'Dashboard' ? 'text-white' : ''
        }`"
        >{{ title }}</q-item-label
      >
    </q-item-section>
  </q-item>

  <q-item-label v-if="title == 'Dashboard'" header>Reports</q-item-label>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
    featured: {
      type: Boolean,
      default: true,
    },
    children: {
      type: Array,
      Default: [],
    },
  },
});
</script>

<style scoped>
.menu-item {
  font-size: 15px;
  font-style: normal;
  line-height: 24px;
  /* margin-left: -16px; */
  color: #6e6b7b;
}

.submenu {
  padding: 0px;
  padding-left: 32px;
  font-weight: 500;
  font-size: 13px;
}

.sidebar-icon {
  color: #6e6b7b;
}

::v-deep .q-item__section--side {
  padding: 0px !important;
}

a {
  color: #6e6b7b;
  text-decoration: none;
}
</style>
