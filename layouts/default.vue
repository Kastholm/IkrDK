<template>
  <Nav />
  <main>
    <slot />
  </main>
  <Footer />
</template>
  
  <style>


body {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  width: 100%;
  background-color: white;
  overflow-x: hidden;
  font-family: "Opel Sans Regular", sans-serif;
}

nav {
  width: 100%;
  height: 120px;
  background-color: white;
}

.overlay::before {
  content: '';
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.27);

}
.clip3 {
    clip-path: polygon(0 0, 100% 49%, 100% 100%, 0 55%);
}

.clip2 {
    clip-path: polygon(0 51%, 100% 0, 100% 51%, 0% 100%);
}

.clip4 {
    clip-path: polygon(0 35%, 63% 0, 63% 65%, 0 100%);
}

/* Global Font opsat korrekt her til alt content for nu */
* {
  font-family: "Opel Sans Regular", fallback-font, sans-serif;
}

h1 {
  font-size: 64px;
  font-weight: bold;
}

h2 {
  font-size: 48px;
  font-weight: bold;
}

h4 {
  font-size: 34px;
  font-weight: 600;
}

h5 {
  font-size: 19px;
  font-weight: 600;
}

h3 {
  font-size: 34px;
  font-weight: 650;
}

ul {
  font-size: 20px;
}

li {
  font-size: 26px;
}

a {
  font-size: 18px;
}

p {
  font-size: 24px;
  font-weight: medium;
}

label {
  font-size: 23px;
  font-weight: medium;
}

@media only screen and (max-width: 767px) {
  h2 {
    font-size: 30px;
    font-weight: bold;
    
  }

  h1 {
    font-size: 45px;
    font-weight: bold;
  }

  h4 {
    font-size: 38px;
    font-weight: 600;
  }

  h5 {
    font-size: 23px;
    font-weight: 600;
  }

  h3 {
    font-size: 30px;
    font-weight: 650;
  }

  a {
    font-size: 18px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    min-width: 280px;
  }

  li {
    font-size: 18px;
    font-weight: 600;
  }
}

/* Forside mobil start */
@media only screen and (max-width: 767px) {
  .kommentar2::before {
    content: '';
    position: absolute;
    background-image: url('https://i.ibb.co/3ftYYW3/G-se-jne-260px.png');
    background-size: contain;
    background-repeat: no-repeat;
    transform: translatey(10px) translatex(5px);
    font-size: 40px;
    height: 20px;
    width: 20px;

}

.kommentar3::before {
    content: '';
    position: absolute;
    background-image: url('https://i.ibb.co/3ftYYW3/G-se-jne-260px.png');
    background-size: contain;
    background-repeat: no-repeat;
    left: 0;
    transform: translatey(2px) translatex(10px);
    font-size: 40px;
    height: 20px;
    width: 20px;
}
}
/* Forside mobil slut */

/* Hero tablet start */

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .tabletPersonInfoForside {
    transform: translatey(38px) translatex(-80px);
}

.tabletPersonSamarbejde {
  height: 260px;
  transform: translateX(-50px);
}

.tabletPersonTroels {
  white-space: nowrap;
}

.tabletPersonYdelser {
  height: 280px;
}

.tabletPersonViEr{
  transform: translateX(-50px);
  height: 240px;
}

.tabletPersonFAQ{
  height: 250px;
  transform: translateX(-50px);
}

.kasserTablet {
  gap: 15px
}

}

/* Hero tablet slut*/

/* Fontfaces indsat i layout og kan bruges på alle sider, linket til Default Nuxt static mappe 'public' (Her er fonts placeret) */
@font-face {
  font-family: "Opel Sans Bold";
  src: url("fonts/Opel-Sans-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Opel Sans Bold Italic";
  src: url("fonts/Opel-Sans-Bold-Italic.ttf") format("truetype");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "Opel Sans Italic";
  src: url("fonts/Opel-Sans-Italic.ttf") format("truetype");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "Opel Sans Regular";
  src: url("fonts/Opel-Sans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
</style>