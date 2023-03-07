<script setup>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Tech from "./components/Tech.vue";
import Layout from "./components/Layout.vue";

const layouts = [
  {
    img: "Img",
    title: "Create an invite-only place where you belong",
    description: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
  },
  {
    img: "Img",
    title: "Where hanging out is easy",
    description: "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
  },
  {
    img: "Img",
    title: "From few to a fandom",
    description: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
  },
];

</script>

<template>
  <Navbar />
  <Header />
  <div v-for="(layout, index) in layouts" :key="index">
    <Layout :img="layout.img" :title="layout.title" :description="layout.description" />
  </div>
  <Tech />
  <Footer />
</template>
