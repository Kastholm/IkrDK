<template>
  
  <NuxtLayout :name="layout">
  <div v-if="!data || data.length === 0" class="flex justify-center items-center">
    <div class="loader"></div>
  </div>
    <main v-else class="flex flex-col justify-center">
      <ForsideHero_Eng />
      <section>
        <div
          class="flex flex-col h-[400px] w-full gap-5 justify-center items-center sm:mt-20 mt-40 relative sm:mb-0 mb-10"
        >
          <figure
            class="h-[300px] min-h-[300px] respons-mobil w-[250px] bg-[#919995] clip4 absolute left-0 top-0 sm:-translate-y-6"
          ></figure>
          <figure
            class="h-[300px] min-h-[300px] respons-mobil w-[250px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-20"
          ></figure>
          <div class="max-w-[72%] sm:max-w-[60%] kommentar relative">
            <h2 class="sm:max-w-[80%] max-w-[95%]">{{ data.title3 }}</h2>
          </div>
          <p class="max-w-[60%]">
            <PortableText
              class="max-w-[60%]"
              :value="data.text2[0]"
              :components="components"
            />
          </p>
        </div>
        <div
          class="flex sm:flex-row flex-col items-center sm:gap-14 justify-center text-white 2xl:mt-0 sm:-translate-y-0 kasserTablet"
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
      </section>
  
      <ForsideBund_Eng />
      <LogoKarrusel
        class="translate-y-20 border-t-[#2c2c2c] border-[0px] border-b-[#2c2c2c]"
      />
      <div></div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const query = groq`*[(_type == "forside") && lang == "Engelsk" ][0]`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
import { PortableText } from "@portabletext/vue";
console.log(data);
definePageMeta({
  layout: 'engelsk-layout'
})

useSeoMeta({
  title: 'IKR - optimizes your contracts and agreements',
  ogTitle: 'IKR - optimizes your contracts and agreements',
  description: 'IKR gives you greater financial leeway by reviewing and optimizing your companys agreements and contracts.',
  ogDescription: 'IKR gives you greater financial leeway by reviewing and optimizing your companys agreements and contracts.',
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

.kommentar::before {
  content: "";
  position: absolute;
  background-image: url("https://i.ibb.co/3ftYYW3/G-se-jne-260px.png");
  background-size: contain;
  transform: translatey(-65px) translatex(-10px);
  font-size: 40px;
  height: 60px;
  width: 60px;
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

.clip2 {
  clip-path: polygon(0 51%, 100% 0, 100% 51%, 0% 100%);
}

.clip4 {
  clip-path: polygon(0 35%, 63% 0, 63% 65%, 0 100%);
}

@media only screen and (max-width: 767px) {
  .respons-mobil {
    display: none;
  }
}


</style>

