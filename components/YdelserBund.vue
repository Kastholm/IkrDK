<template>
  <main class="overflow-x-hidden">
    <section
      class="w-full flex justify-center items-center mt-20 2xl:mt-40 relative"
    >
      <div
        class="bgimg flex flex-col sm:flex-row justify-around 2xl:justify-center items-center max-w-full sm:max-w-full gap-[0px] 2xl:gap-[400px]"
      >
        <div
          class="flex flex-col mb-20 sm:ml-20 sm:mt-0 gap-4 bund-container-respons sm:text-start text-center translate-y-6"
        >
          <h4
            class="bund-overskrift-respons rounded-2xl py-3 px-5 sm:translate-y-5 sm:mt-0 mt-20"
          >
            {{ data.title6 }}
          </h4>
          <p
            class="w-[90%] m-auto sm:m-0 ikrfont max-w-[750px] font-semibold bund-text-respons rounded-2xl py-3 sm:px-5"
          >
          <PortableText
          :value="data.text10[0]"
          :components="components"
        />
          </p>
        </div>
        <img
          src="https://i.ibb.co/yWyDnYq/Stenhus-og-slot.jpg"
          class="bund-billede-respons sm:max-w-[480px] max-h-[400px] sm:mr-16 rounded-md mt-0 sm:mt-0 shadow-2xl"
          alt=""
        />
      </div>
    </section>

    <section
      class="flex justify-center w-full relative sm:mt-20 mt-32 lg:mt-10 sm:translate-x-14"
    >
      <figure
        class="h-[200px] min-h-[200px] w-[180px] bg-[#2c2c2c] clip3 absolute left-0 top-0 -translate-y-14 sm:-translate-y-5 -translate-x-20"
      ></figure>
      <div
        class="flex flex-col mt-40 gap-5 sm:w-[60%] w-[90%] sm:text-start text-center md:mt-0 2xl:mt-28"
      >
        <div class="sm:max-w-[100%] max-w-[100%] kommentar3 relative">
          <h2 class="sm:max-w-[88%] sm:text-start text-center">
            {{ data.title7 }}<span class="kommentar2"></span>
          </h2>
        </div>
        <p><PortableText
          :value="data.text11[0]"
          :components="components"
        /></p>
        <!-- <NuxtLink to="#" class="font-semibold underline underline-offset-2"> Se mere her </NuxtLink> -->
      </div>
    </section>
  </main>
</template>

<script setup>
const query = groq`*[(_type == "ydelser") && lang == "Dansk" ][0]`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
import { PortableText } from "@portabletext/vue";
console.log(data);
</script>

<style>
.ikrfont {
  font-size: 24px;
}
.bgimg {
  background-image: url("https://i.ibb.co/C7BQF8Y/IKR-gr-n-baggrund-4000x1000px-NY.jpg");
  height: 560px;
  width: 100%;
  min-height: 560px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

@media only screen and (max-width: 767px) {
  .bgimg {
    background-image: none;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1699px) {
  .bgimg {
    gap: 150px;
  }
}

@media screen and (min-width: 1700px) {
  .bgimg {
    gap: 400px;
  }
}

@media screen and (min-width: 800px) and (max-width: 1250px) {
  .bund-overskrift-respons {
    font-size: 30px;
  }
}

@media screen and (min-width: 800px) and (max-width: 1250px) {
  .bund-container-respons {
    gap: 10px;
  }
}

@media screen and (min-width: 1535px) and (max-width: 1650px) {
  .bund-container-respons {
    min-width: 550px;
    gap: 16px;
  }
}

@media screen and (min-width: 800px) and (max-width: 1250px) {
  .bund-text-respons {
    font-size: 19px;
  }
}

@media screen and (min-width: 800px) and (max-width: 1280px) {
  .bund-billede-respons {
    height: 250px;
  }
}

.clip3 {
  clip-path: polygon(0 0, 100% 49%, 100% 100%, 0 55%);
}
</style>
