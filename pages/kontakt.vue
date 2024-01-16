<template>
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#919995] clip4 absolute left-0 top-20 sm:translate-y-20 z-0"></figure>
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-10"></figure>
 <main class="sm:flex sm:flex-row flex flex-col relative">
  <section class="w-full sm:w-[55%] h-[600px] relative z-50">
    <div class="absolute w-[500px] h-[700px] bg-[#256c2b] left-40 container-respons rounded-b-2xl shadow-2xl shadow-[#00000050]">
        <div class="flex flex-col text-white h-full items-center justify-evenly gap-10 -translate-y-4 ">
            <h1 class="">Kontakt IKR</h1>
                <div class="flex flex-col gap-5">
                    <div class="w-full flex items-center gap-7 hover:underline">
                      <img src="https://i.ibb.co/9nXk0H1/icons8-phone-50.png" alt="" class=" h-[55px]">
                      <a href="tel:"><p>Ring på telefon: <br>+45 88 27 63 33</p></a>
                    </div>
                    <div class="w-full flex items-center gap-7">
                      <img src="https://i.ibb.co/z54gmW8/icons8-email-64-2.png" alt="" class=" h-[49px]">
                      <a href="tel:"><p>Email os på: <br>mail@ikrcg.com</p></a>
                    </div>
                </div>
            <p class="w-[80%] ml-5 text-center">IKR tilbyder en uforpligtende dialog med jeres virksomhed - eller udfyld formularen og vi kontakter dig indenfor 48 timer alle hverdage. </p>
        </div>
    </div>
  </section>
 <section class="z-50 w">
    <form id="contactForm" class="bg-[#256c2b] w-full p-8 rounded-b-3xl shadow-2xl shadow-[#00000050]">
    <label for="navn" class="block mb-4 text-white">Navn <span class="text-[20pxs]">*</span>:
      <input v-model="navn" type="text" id="navn" name="navn" class="w-full px-3 py-2 border rounded text-black" required>
    </label>

    <label for="telefon" class="block mb-4 text-white">Telefon <span class="text-[20pxs]">*</span>:
      <input v-model="telefon" type="tel" id="telefon" name="telefon" class="w-full px-3 py-2 border rounded text-black" required>
    </label>

    <label for="email" class="block mb-4 text-white">Email:
      <input v-model="email" type="email" id="email" name="email" class="w-full px-3 py-2 border rounded text-black">
    </label>

    <label for="virksomhed" class="block mb-4 text-white">Virksomhed <span class="text-[20pxs]">*</span>:
      <input v-model="virksomhed" type="text" id="virksomhed" name="virksomhed" class="w-full px-3 py-2 border rounded text-black" required>
    </label>

    <label for="besked" class="block mb-4 text-white">Besked:
      <textarea v-model="besked" id="besked" name="besked" rows="4" class="w-full px-3 py-2 border rounded text-black"></textarea>
    </label>

    <button @click="submitForm" class="bg-[#0a3700] text-white px-4 py-2 rounded hover:scale-110 transition-all font-semibold">Send Besked</button>
    <span v-if="messageSent" class="text-white ml-4">Besked sendt! - vi kontakter dig.</span>
  </form>
 </section>
</main>
</template>

<script>
export default {
  data() {
    return {
      navn: '',
      telefon: '',
      email: '',
      virksomhed: '',
      besked: '',
      messageSent: false,
    };
  },
  methods: {
    submitForm() {
      // Add your form submission logic here
      // You can use this.navn, this.telefon, etc. to access form values
      // After successful submission, set this.messageSent to true
      this.messageSent = true;
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1700px) {
    .container-respons {
        left: 40%;
    }
}

@keyframes slideDown {
  0% {
    opacity: 0.5;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

main {
  opacity: 0;
  animation: slideDown 1.5s ease-out forwards;
}

.clip2 {
    clip-path: polygon(0 51%, 100% 0, 100% 51%, 0% 100%);
}

.clip4 {
    clip-path: polygon(0 35%, 63% 0, 63% 65%, 0 100%);
}

</style>