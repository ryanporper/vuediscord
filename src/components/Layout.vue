<template>
  <div class="bg-white flex justify-center items-center text-start">
    <div class="flex flex-col lg:flex-row lg:justify-center py-14 px-6 lg:py-32 lg:px-24">
      <div class="h-72 w-full bg-red-600 lg:mr-20 rounded-2xl flex items-center justify-center">
        {{ img }}
      </div>
      <div class="w-full">
        <h2 class="text-xl lg:text-5xl font-bold my-6 ">
          {{ title }}
        </h2>
        <p class="text-lg lg:text-xl">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>