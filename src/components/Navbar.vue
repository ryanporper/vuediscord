<script>
export default {
  data() {
    return {
      navbarOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.navbarOpen =!this.navbarOpen
    }
  }
}
</script>

<template>
  <div class="w-full h-16 bg-indigo-600 flex justify-between items-center text-center px-4 lg:px-32 mx-auto">
      <a class="text-white text-2xl font-bold" href="/">
        Discord
      </a>
      <ul class="hidden lg:flex lg:justify-evenly lg:w-2/3">
        <li class="text-white font-bold hover:underline">
          <a href="https://discord.com/">Download</a>
        </li>
        <li class="text-white font-bold hover:underline">
          <a href="https://discord.com/">Nitro</a>
        </li>
        <li class="text-white font-bold hover:underline">
          <a href="https://discord.com/">Discovery</a>
        </li>
        <li class="text-white font-bold hover:underline">
          <a href="https://discord.com/">Safety</a>
        </li>
        <li class="text-white font-bold hover:underline">
          <a href="https://discord.com/">Support</a>
        </li>
        <li class="text-white font-bold hover:underline">
          <a href="https://discord.com/">Blog</a>
        </li>
        <li class="text-white font-bold hover:underline">
          <a href="https://discord.com/">Careers</a>
        </li>
      </ul>
      <div class="flex items-center ">
        <button class="bg-white hover:text-indigo-400 hover:shadow-lg rounded-full p-2 text-xs">
          Open Discord
        </button>
        <div @click="toggleNav" class="block cursor-pointer lg:hidden">
          <font-awesome-icon class="text-white ml-4" icon="fa-solid fa-bars" size="xl"/>
          
        </div>
        <ul
        :class="[
          navbarOpen
            ? 'fixed right-0 top-0 w-[60%] md:w-[40%] h-full rounded-lg bg-white ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed right-[-100%]',
        ]"
        >
          <div class="flex items-center text-center p-2">
            <h1 class="w-full text-3xl font-bold text-black m-2">
              Discord
            </h1>
            <font-awesome-icon  @click="toggleNav" class="text-black text-xl cursor-pointer" icon="fa-solid fa-close"/>
          </div>
          <li class="text-blue-400 font-bold m-2 hover:underline bg-slate-300 p-2 rounded-lg ">
            <a href="/">Home</a>
          </li>
          <li class="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Download</a>
          </li>
          <li class="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Nitro</a>
          </li>
          <li class="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Nitro</a>
          </li>
          <li class="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Discovery</a>
          </li>
          <li class="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Safety</a>
          </li>
          <li class="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Support</a>
          </li>
          <li class="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Blog</a>
          </li>
          <li class="text-black font-bold m-2 p-2 hover:underline">
            <a href="https://discord.com/">Careers</a>
          </li>
        </ul>
      </div>
    </div>
</template>