<template>
  
  <NuxtLayout :name="layout">
    <main  class="flex flex-col justify-center">
      <Vi-erHero_Eng />
  
      <div
        class="flex w-full relative mt-20 sm:mt-36 gap-16 2xl:gap-40 justify-center flex-wrap article-gap-vi-er"
      >
        <figure
          class="h-[220px] min-h-[200px] respons w-[200px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-[135px]"
        ></figure>
        <figure
          class="h-[300px] min-h-[300px] respons w-[250px] bg-[#919995] clip4 absolute left-0 top-0 sm:-translate-y-32 hidden sm:block"
        ></figure>
        <article
          class="sm:w-[40%] w-[90%] flex flex-col flex-wrap gap-5 -translate-y-3"
        >
          <h2 class="">{{ data.title2 }}</h2>
          <ul class="flex-col flex gap-8">
            <li v-for="(point, index) in data.bulletpoint" :key="index">
              <span class="text-[#256c2b] font-bold">{{
                point.bullettitle
              }}</span>
              {{ point.bullettext }}
            </li>
          </ul>
          <p><PortableText
            :value="data.text2[0]"
            :components="components"
          /></p>
        </article>
        <img
          src="https://i.ibb.co/KWsT29g/port-VI-ER.jpg"
          alt=""
          class="sm:h-[800px] h-[600px] 2xl:max-h-[700px] rounded-md z-50 shadow-2xl"
        />
      </div>
  
      <div
        class="flex w-full relative mt-28 gap-20 2xl:gap-40 justify-center flex-wrap article-gap-vi-er sm:mb-0"
      >
        <img
          src="https://i.ibb.co/5GcgYV2/Vi-er-team2-75.webp"
          alt=""
          class="h-[500px] sm:h-[750px] 2xl:max-h-[600px] rounded-md z-50 shadow-2xl"
        />
        <article
          class="sm:w-[40%] w-[90%] flex flex-col gap-5 -translate-y-5 flex-wrap"
        >
          <h2 class="">{{ data.title3 }}</h2>
  
         
          <PortableText class="2xl:leading-[42px]"
            :value="data.text3[0]" :components="components"
          />
  
        </article>
      </div>
      <Vi-erBund_Eng />
      <LogoKarrusel
        class="translate-y-20 border-t-[#2c2c2c] border-[0px] border-b-[#2c2c2c]"
      />
      <div></div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const query = groq`*[(_type == "vier") && lang == "Engelsk" ][0]`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
import { PortableText } from "@portabletext/vue";
definePageMeta({
  layout: 'engelsk-layout'
})

useSeoMeta({
  title: 'Learn more about IKR & the specialized services we offer',
  ogTitle: 'Learn more about IKR & the specialized services we offer',
  description: 'Learn more about IKR - for many years, we have assisted dozens of companies with their ongoing agreements and optimizing the financial flexibility of the business.',
  ogDescription: 'Learn more about IKR - for many years, we have assisted dozens of companies with their ongoing agreements and optimizing the financial flexibility of the business.',
  ogImage: 'https://i.ibb.co/JCjnNn8/IKR-Without-Slogan-2400x1800.jpg',
})
</script>

<style scoped>
@keyframes slideDown {
  0% {
    opacity: 0.9;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

main {
  opacity: 0;
  animation: slideDown 0.7s ease-out forwards;
}

.clip2 {
  clip-path: polygon(0 51%, 100% 0, 100% 51%, 0% 100%);
}

.clip4 {
  clip-path: polygon(0 35%, 63% 0, 63% 65%, 0 100%);
}
</style>
