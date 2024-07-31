<template>
  <main>
    <div
      class="relative max-h-[800px] sm:max-h-[900px] h-[800px] sm:h-[900px] sm:mt-28 z-10 header-img max-w-[2000px] w-full m-auto overlay"
    >
      <div
        class="w-full h-[450px] bg-[#1a5b0b] bg-gradient-header absolute bottom-0"
      >
        <img
          src="https://i.ibb.co/fxJNPzr/Jacob-Jesper.png"
          alt=""
          class="sm:h-[420px] person-respons-vi-er h-[170px] absolute bottom-0 z-50 right-0 sm:translate-x-0 tabletPersonViEr"
        />
      </div>
      <div class="flex justify-end">
        <div
          class="sm:bg-[#0a3700] bg-[#0a3700] sm:h-[350px] h-[500px] sm:w-[90%] absolute bottom-40 z-20 rounded-sm"
        >
          <article
            class="flex flex-col gap-7 justify-center sm:ml-28 ml-5 sm:mt-8 mt-5 text-white"
          >
            <h1
              class="tablet-overskrift-vi-er font-semibold tracking-wider sm:leading-[65px] leading-[50px] max-w-[90%] sm:text-[60px] text-[35px]  "
            >
              {{ data.title }}
            </h1>
            <p class="tablet-herotext-ydelser w-[90%] sm:max-w-[700px] sm:mt-0 mb-0">
              <PortableText 
          :value="data.text1[0]"
          :components="components"
        />
            </p>
          </article>
          <article
            class="flex text-start sm:text-end flex-col sm:items-end w-[58%] personer-respons personer-respons2 2xl:w-[70%] ml-2 sm:ml-0 sm:mt-6 mt-[50px] sm:translate-y-5 sm:gap-7 gap-1 italic text-[#000000] sm:max-w-full max-w-[100px] leading-[15px] iphonevier"
          >
            <p
              v-for="(worker, index) in data.workers"
              :key="index"
              class="text-[13px] sm:text-[20px] 2xl:text-[23px]"
            >
              {{ worker.workertitle }},<br class="sm:hidden block"> {{ worker.workerjob }}-
              <a
                class="herobrødtekstminilaptop text-[13px] sm:text-[20px] 2xl:text-[23px] person-text-respons not-italic font-bold hover:border-b-[0.13rem] border-black"
                href="tel: +45 88 27 63 23 "
              >
                <br class="block md:hidden" />{{ worker.workerinfo }}</a
              >
            </p>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const query = groq`*[(_type == "vier") && lang == "Dansk" ][0]`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
import { PortableText } from "@portabletext/vue";
console.log(data);
</script>

<style scoped>
@media screen and (min-width: 640px) and (max-width: 1355px) {
  .person-respons {
    right: 10px;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1350px) {
    .herooverskriftminilaptop {
      font-size: 50px;
      
    }
}

@media only screen and (min-width: 364px) and (max-width: 700px) {
    .iphonevier {
      margin-top: 80px;
    }
}

@media screen and (min-width: 1800px) {
  .header-text-respons {
    transform: translatex(60px);
  }
}

@media screen and (min-width: 1550px) and (max-width: 1790px) {
  .header-text-respons {
    transform: translatex(30px);
  }
}

.clip {
  clip-path: polygon(1% 0, 100% 0, 100% 87%, 0% 100%);
}
.header-img {
  background-image: url("https://i.ibb.co/nR1Sdyq/topbillede-ydelser-1.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
}

.bg-gradient-header {
  background: #114d07
    linear-gradient(
      to top,
      rgb(139, 162, 139),
      rgba(31, 115, 31, 0.8) 30%,
      rgba(17, 77, 7, 1) 100%
    );
}

@media only screen and (min-width: 1000px) and (max-width: 1400px) {
  .personer-respons {
    width: 55%;
  }
}

@media only screen and (min-width: 1500px) and (max-width: 1900px) {
  .personer-respons2 {
    width: 63%;
  }
}
</style>