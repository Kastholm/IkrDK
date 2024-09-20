<template>
  
  <FaqHero />
  <section class="bar-sections relative z-20">
    <figure
      class="h-[300px] min-h-[300px] respons w-[250px] bg-[#919995] clip4 absolute left-0 top-0 sm:-translate-y-6 translate-y-16 z-0"
    ></figure>
    <figure
      class="h-[300px] min-h-[300px] respons w-[250px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-20 translate-y-40 z-0"
    ></figure>
    <h4 class="mmd-text z-50">FAQ</h4>

    <div class="bar z-20" id="bar1">
      <div
        @click="toggleBar('bar1')"
        class="flex justify-center items-center translate-y-3"
      >
        <h3 class="header">
          ANALYSER<br />
          <span style="font-size: 16px"> ▼ </span>
        </h3>
      </div>
      <div class="content">
        <div class="bar-flex">
          <div
            v-for="(worker, index) in data.analyser"
            :key="index"
            :class="`baranalyser`"
            :id="`bar1.${index}`"
          >
            <h6 class="header flex justify-center items-center h-16" @click="toggleBar(`bar1.${index}`)">
              <strong class="text-[35px] lg:block hidden">+</strong> {{ worker.bullettitle1 }}
            </h6>
            <div class="content" @click="toggleBar(`bar1.${index}`)">
              <div class="bar-flex2">
                <p class="bar-lille-text mt-4">
                  <PortableText
                    :value="worker.bullettext1"
                    :components="component"
                  />
                </p>
                <NuxtLink :to="worker.bulletpointlink">Læs mere</NuxtLink>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bar z-20" id="bar2">
      <h3 class="header translate-y-3" @click="toggleBar('bar2')">
        LEVERANDØRER & KONTRAKTER<br />
        <span style="font-size: 16px"> ▼ </span>
      </h3>
      <div class="content">
        <div class="bar-flex">
          <div
            v-for="(worker, index) in data.leverandor"
            :key="index"
            :class="`baranalyser`"
            :id="`bar2.${index}`"
          >
            <h6 class="header flex justify-center items-center h-16" @click="toggleBar(`bar2.${index}`)">
              <strong class="text-[35px] lg:block hidden">+</strong> {{ worker.bullettitle2 }}
            </h6>
            <div class="content" @click="toggleBar(`bar2.${index}`)">
              <div class="bar-flex2">
                <p class="bar-lille-text">
                  <PortableText
                    :value="worker.bullettext2"
                    :components="component"
                  />
                </p>
                <NuxtLink :to="worker.bulletpointlink">Læs mere</NuxtLink>                    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bar z-20" id="bar3">
      <h3 class="header translate-y-3" @click="toggleBar('bar3')">
        ØGET ØKONOMISK RÅDERUM<br />
        <span style="font-size: 16px"> ▼ </span>
      </h3>
      <div class="content">
        <div class="bar-flex">
          <div
            v-for="(worker, index) in data.okonomi"
            :key="index"
            :class="`baranalyser`"
            :id="`bar3.${index}`"
          >
            <h6 class="header flex justify-center items-center h-16" @click="toggleBar(`bar3.${index}`)">
              <strong class="text-[35px] lg:block hidden">+</strong> {{ worker.bullettitle3 }}
            </h6>
            <div class="content" @click="toggleBar(`bar3.${index}`)">
              <div class="bar-flex2">
                <p class="bar-lille-text">
                  <PortableText
                    :value="worker.bullettext3"
                    :components="component"
                  />
                </p>
                <NuxtLink :to="worker.bulletpointlink">Læs mere</NuxtLink>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bar z-20" id="bar4">
      <h3 class="header translate-y-3" @click="toggleBar('bar4')">
        DRIFT & CONTROLLING<br />
        <span style="font-size: 16px"> ▼ </span>
      </h3>
      <div class="content">
        <div class="bar-flex">
          <div
            v-for="(worker, index) in data.drift"
            :key="index"
            :class="`baranalyser`"
            :id="`bar4.${index}`"
          >
            <h6 class="header flex justify-center items-center h-16 w-fit m-auto" @click="toggleBar(`bar4.${index}`)">
              <strong class="text-[35px] lg:block hidden">+</strong> {{ worker.bullettitle4 }}
            </h6>
            <div class="content" @click="toggleBar(`bar4.${index}`)">
              <div class="bar-flex2">
                <p class="bar-lille-text">
                  <PortableText
                    :value="worker.bullettext4"
                    :components="component"
                  />
                </p>
                <NuxtLink :to="worker.bulletpointlink">Læs mere</NuxtLink>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bar z-20" id="bar5">
      <h3 class="header translate-y-3" @click="toggleBar('bar5')">
        INDKØB & UDBUD<br />
        <span style="font-size: 16px"> ▼ </span>
      </h3>
      <div class="content">
        <div class="bar-flex">
          <div
            v-for="(worker, index) in data.indkob"
            :key="index"
            :class="`baranalyser`"
            :id="`bar5.${index}`"
          >
            <h6 class="header flex justify-center items-center h-16" @click="toggleBar(`bar5.${index}`)">
              <strong class="text-[35px] lg:block hidden">+</strong> {{ worker.bullettitle5 }}
            </h6>
            <div class="content" @click="toggleBar(`bar5.${index}`)">
              <div class="bar-flex2">
                <p class="bar-lille-text">
                  <PortableText
                    :value="worker.bullettext5"
                    :components="component"
                  />
                </p>
                <NuxtLink :to="worker.bulletpointlink">Læs mere</NuxtLink>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>

const toggleBar = (barId) => {
  const bar = document.getElementById(barId);
  if (bar) {
    bar.classList.toggle("active");
  } else {
    console.error(`Element with id ${barId} not found.`);
  }
};

const query = groq`*[(_type == "faq") && lang == "Dansk" ][0]`;

const sanity = useSanity();
const { data } = useSanityQuery(query);
import { PortableText } from "@portabletext/vue";
console.log(data,"vsnins");

useSeoMeta({
  title: 'Spørgsmål til optimering og aftalestyring - læs mere her',
  ogTitle: 'Spørgsmål til optimering og aftalestyring - læs mere her',
  description: 'Der er mange nuancer og måder at optimere aftaler og kontrakter på - læs mere om de forskellige muligheder og aftaletyper her.',
  ogDescription: 'Der er mange nuancer og måder at optimere aftaler og kontrakter på - læs mere om de forskellige muligheder og aftaletyper her.',
  ogImage: 'https://i.ibb.co/ZWCZJRk/IKR-Main-Logo-600x450-cropped.jpg',
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

.bar-sections {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 100px 0 100px 0;
  width: 100%;
  align-items: center;
}

@media screen and (max-width: 767px) {
  .bar-sections {
    margin: 50px 0 180px 0;
  }
}

.mmd-text {
  font-size: 80px;
}

@media screen and (max-width: 767px) {
  .mmd-text {
    font-size: 31px;
    max-width: 388px;
    text-align: center;
  }
}

.bar {
  width: 50%;
  height: 80px;
  background-color: #0a3700;
  color: white;
  cursor: pointer;
  transition: height 0.5s ease;
  overflow: hidden;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  line-height: 20px;
}

@media screen and (max-width: 767px) {
  .bar {
    min-width: 95vw;
  }
}

h6 {
  line-height: 25px;
}

.baranalyser {
  width: 70%;
  height: 65px;
  background-color: #256c2b;
  color: white;
  cursor: pointer;
  transition: height 0.5s ease;
  overflow: hidden;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  line-height: 20px;
}

@media screen and (max-width: 767px) {
  .baranalyser {
    min-width: 90vw;
    height: 65px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser {
    height: 84px;
  }
}

.header {
  padding: 10px;
  text-align: center;
  font-size: 30px;
}

@media screen and (max-width: 767px) {
  .header {
    font-size: 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .header {
    line-height: 30px;
  }
}

.content {
  display: none;
  padding: 10px;
  text-align: center;
  height: 100%;
  font-size: 20px;
  margin: auto;
}

.bar-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 30px;
  align-items: center;
}

.bar-flex2 {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100;
  margin-top: 10px;
  width: 100%;
}

@media screen and (max-width: 767px) {
  .bar-flex2 {
    margin-top: 10px;
  }
}

.content {
  max-width: 1300px;
}

.bar.active {
  height: auto; /* Adjust the height as needed */
  padding-bottom: 50px;
  width: 80%;
}

.baranalyser.active {
  height: auto; /* Adjust the height as needed */
}

p {
  margin-bottom: 50px;
}



.bar.active .content {
  display: block;
}

.baranalyser.active .content {
  display: block;
}

.bar-img {
  background-size: contain;
  width: 25%;
  border-radius: 10px;
  height: 300px;
}

.bar-img-3 {
  background-size: contain;
  border-radius: 10px;
  height: 200px;
}

.bar-lille-text {
  text-align: start;
  line-height: 34px;
  width: 90%;
  max-width: 800px;
}

.bar-flex-text {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 40%;
  height: 70%;
  text-align: start;
  transform: translatey(-100px);
}

@media screen and (max-width: 767px) {
  .bar-flex-text {
    width: 95%;
    transform: translatey(-130px);
  }
}

@media screen and (max-width: 767px) {
  .bar-lille-text {
    font-size: 14px;
    line-height: 27px;
  }
}
</style>