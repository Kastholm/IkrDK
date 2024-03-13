<template>
  <section>
    <article class="relative sm:mt-44 flex flex-col flex-wrap w-full">
      <figure
        class="h-[300px] min-h-[300px] respons w-[250px] bg-[#919995] clip4 absolute left-0 top-0 sm:-translate-y-6 -translate-y-16 hidden sm:block"
      ></figure>
      <figure
        class="h-[300px] min-h-[300px] respons sm:w-[250px] w-[175px] bg-[#256c2b] clip2 absolute right-0 top-0 sm:translate-y-20 -translate-y-20"
      ></figure>
      <div
        class="flex flex-col h-[400px] sm:w-[1000px] gap-5 m-auto sm:mt-0 mt-16 relative sm:mb-0 mb-16 sm:translate-y-5"
      >
        <div class="max-w-[72vw] sm:max-w-[100%] relative">
          <h2 class="sm:w-full sm:text-[80px] text-[30px] w-[90vw]">
            {{ data.title }}
          </h2>
        </div>
        <p class="max-w-[90%] w-[90vw]">
          <PortableText :value="data.text1[0]" />
        </p>
      </div>

      <div
        class="flex w-full flex-wrap noWrap sm:flex-row flex-col items-center relative mt-36 gap-20 2xl:gap-40 justify-center"
      >
        <article class="sm:w-[40%] w-[90vw] flex flex-col gap-5 -translate-y-5">
          <h2 class="">{{ data.title2 }}</h2>
          <p>
            <PortableText :value="data.text2[0]" />
          </p>
        </article>
        <img
          src="https://i.ibb.co/b1YL6Rx/IKR-28-1.jpg"
          alt=""
          class="max-h-[400px] max-w-[90vw] rounded-md z-40 shadow-2xl kasserImg"
        />
      </div>
    </article>

    <div
      class="flex w-full flex-wrap noWrap relative sm:mt-36 mt-20 gap-20 2xl:gap-40 justify-center"
    >
      <img
        src="https://i.ibb.co/sVpKvYN/nyt-til-konomisk-analyse.jpg"
        alt=""
        class="max-h-[450px] kasserImg max-w-[90vw] rounded-md z-40 shadow-2xl"
      />
      <article class="sm:w-[39vw] w-[90vw] flex flex-col gap-5 -translate-y-5">
        <h2 class="">{{ data.title3 }}</h2>
        <p>
          <PortableText :value="data.text3[0]" />
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
const query = groq`*[(_type == "okoanalyser") && lang == "Dansk" ][0]`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
import { PortableText } from "@portabletext/vue";
console.log(data);
</script>

<style scoped>
.kommentar2::after {
  content: "";
  width: 500px;
  height: 7px;
  background-color: #256c2b;
  position: absolute;
  bottom: 0px;
  left: 0;
}
</style>