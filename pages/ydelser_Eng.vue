<template>
  
  <NuxtLayout :name="layout">
    <main class="flex flex-col justify-center">
      <YdelserHero_Eng />
      <div class="">
        <div
          class="flex flex-col h-[300px] w-full gap-5 justify-center items-center sm:mt-16 mt-4 relative sm:mb-0 mb-16"
        >
          <div class="flex flex-col relative max-w-[90%] sm:max-w-[65%]">
            <h2 class="">{{ data.title2 }}</h2>
            <p class=""><PortableText
            :value="data.text2[0]"
            :components="components"
          /></p>
          </div>
        </div>
        <div
          class="flex sm:flex-row flex-col items-center sm:gap-14 justify-center text-white 2xl:mt-0 sm:-translate-y-0 -translate-y-20 mb-16 sm:mb-0 mt-5 kasserTablet"
        >
          <a href="/oekonomiskeAnalyser_Eng">
            <div
              class="card flex flex-col justify-center items-center gap-[56px] shadow-2xl shadow-[#2c2c2cd1] cursor-pointer"
            >
              <h3 class="max-w-[90%] leading-10 overskrift-underline">
                {{ data.kasse1 }}
              </h3>
              <p class="max-w-[90%] cardfont max-h-[150px] -translate-y-4">
                <PortableText
            :value="data.text3[0]"
            :components="components"
          />
              </p>
              <div
                class="flex w-full justify-end mr-10 underline underline-offset-4"
              >
                <a href="/oekonomiskeAnalyser_Eng" class="text-end italic -translate-y-3 cursor-pointer"
                  >Read more..</a
                >
              </div>
            </div>
          </a>
          <a href="/udbudUnderside_Eng">
            <div
              class="card flex flex-col justify-center items-center gap-[45px] shadow-2xl shadow-[#2c2c2cd1] cursor-pointer"
            >
              <h3 class="max-w-[90%] leading-10 overskrift-underline">
                {{ data.kasse2 }}
              </h3>
              <p
                class="max-w-[90%] cardfont max-h-[150px] mt-[51px] -translate-y-[55px]"
              >
              <PortableText
            :value="data.text4[0]"
            :components="components"
          />
              </p>
              <div
                class="flex w-full justify-end mr-10 underline underline-offset-4"
              >
                <a href="/udbudUnderside_Eng" class="text-end italic -translate-y-3 cursor-pointer"
                  >Read more..</a
                >
              </div>
            </div>
          </a>
          <a href="/aftaleUnderside_Eng">
            <div
              class="card flex flex-col justify-center items-center gap-[55px] shadow-2xl shadow-[#2c2c2cd1] cursor-pointer"
            >
              <h3 class="max-w-[90%] w-[90%] leading-10 overskrift-underline">
                {{ data.kasse3 }}
              </h3>
              <p class="max-w-[90%] cardfont max-h-[150px] -translate-y-4">
                <PortableText
            :value="data.text5[0]"
            :components="components"
          />
              </p>
              <div
                class="flex w-full justify-end mr-10 underline underline-offset-4"
              >
                <a href="/aftaleUnderside_Eng" class="text-end italic -translate-y-3 cursor-pointer"
                  >Read more..</a
                >
              </div>
            </div>
          </a>
        </div>
        <div
          class="relative w-full h-[500px] flex-col flex flex-wrap justify-center items-center mb-20 sm:mb-0 mt-20"
        >
          <figure
            class="h-[300px] min-h-[300px] respons w-[250px] bg-[#919995] clip4 absolute hidden md:block sm:show left-0 top-0"
          ></figure>
          <div class="sm:max-w-[65%] max-w-[90%] flex flex-col relative">
            <h2 class="text-start">
              <span class="text-[#256c2b]"> IKR </span> {{ data.title3 }}
            </h2>
            <p class="max-w-[1200px]"><PortableText
            :value="data.text6[0]"
            :components="components"
          /></p>
            <ul
              class="flex flex-col items-start gap-4 min-h-[170px] w-[100%] mt-5 max-w-[1200px]"
            >
              <li
                v-for="(bulletpoint, index) in data.bulletpoint"
                :key="index"
                class="bulletpoint relative ml-16"
              >
                {{ bulletpoint }}
              </li>
            </ul>
            <p class="sm:mt-0 mt-8 w-[100%] max-w-[1200px]">
              <PortableText
            :value="data.text7[0]"
            :components="components"
          />
            </p>
          </div>
        </div>
      </div>
  
      <div
        class="flex w-full flex-wrap article-gap relative mt-[100px] gap-10 2xl:gap-40 justify-center"
      >
        <figure
          class="h-[220px] min-h-[200px] respons w-[200px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-[135px] translate-y-[190px]"
        ></figure>
        <img
          src="https://i.ibb.co/QHhwXT7/Maud-ved-tastatur.jpg"
          alt=""
          class="max-h-[520px] rounded-md z-50 shadow-2xl"
        />
        <article
          class="sm:w-[40%] w-[90%] flex flex-col gap-5 -translate-y-5 sm:mt-0 mt-10"
        >
          <h2 class="max-w-[800px]">{{ data.title4 }}</h2>
          <p class="max-w-[800px]"><PortableText
            :value="data.text8[0]"
            :components="components"
          /></p>
        </article>
      </div>
      <div
        class="flex flex-wrap article-gap w-full relative mt-36 gap-10 2xl:gap-24 justify-center"
      >
        <article
          class="sm:w-[40%] w-full flex flex-col gap-5 -translate-y-5 max-w-[90%] sm:mt-0 mt-20"
        >
          <h2 class="max-w-[800px]">{{ data.title5 }}</h2>
          <p class="max-w-[800px]">
            <PortableText
            :value="data.text9[0]"
            :components="components"
          />
          </p>
        </article>
        <img
          src="https://i.ibb.co/y0T5FtG/Ydelser-NYT-foto-1.jpg"
          alt=""
          class="max-h-[400px] rounded-md z-50 shadow-2xl"
        />
      </div>
  
      <YdelserBund_Eng />
      <LogoKarrusel
        class="translate-y-20 border-t-[#2c2c2c] border-[0px] border-b-[#2c2c2c]"
      />
      <div></div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const query = groq`*[(_type == "ydelser") && lang == "Engelsk" ][0]`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
import { PortableText } from "@portabletext/vue";
console.log(data);

definePageMeta({
  layout: 'engelsk-layout'
})

useSeoMeta({
  title: 'See the services IKR offers to enhance your companys financial flexibility.',
  ogTitle: 'See the services IKR offers to enhance your companys financial flexibility.',
  description: 'Learn more about how IKR optimizes your companys financial flexibility - with many years of experience, we are experts in copying/printing, food, consumer goods, automobiles, etc.',
  ogDescription: 'Learn more about how IKR optimizes your companys financial flexibility - with many years of experience, we are experts in copying/printing, food, consumer goods, automobiles, etc.',
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

.card {
  height: 400px;
  width: 350px;
  min-width: 350px;
  background-color: #256c2b;
  margin-top: 40px;
  border-radius: 3px;
}

.cardfont {
  font-size: 22px;
}

.overskrift-underline {
  position: relative;
}

.overskrift-underline::before {
  content: "";
  position: absolute;
  width: 260px;
  height: 3px;
  background-color: white;
  bottom: 0;
  font-weight: 600px;
  transform: translatey(3px) translatex(-4px);
}

.bulletpoint::before {
  content: "•";
  font-size: 35px;
  transform: translatex(-60px) translatey(-5px);
  position: absolute;
  color: #256c2b;
}
</style>
