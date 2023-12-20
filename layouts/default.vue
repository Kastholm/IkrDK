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
  }
  
  nav {
    width: 100%;
    height: 120px;
    background-color: white;
    
  }

  p a ul li h1 h2 h3 h4 {
    font-family:;
  }

  h2 {
    font-size: 38px;
    font-weight: bold;
  }

  h4 {
    font-size: 25px;
    font-weight: 600;
  }

  h5 {
    font-size: 23px;
    font-weight: 600;
  }

  h3{
    font-size: 34px;
    font-weight: 650;
  }

  a {
    font-size: 18px;
  }

  p {
    font-size: 20px;
    font-weight: medium;
  }

  @media only screen and (max-width: 767px) {
    h2 {
    font-size: 32px;
    font-weight: bold;
    min-width: 320px;
  }

  h4 {
    font-size: 38px;
    font-weight: 600;
  }

  h5 {
    font-size: 23px;
    font-weight: 600;
  }

  h3{
    font-size: 34px;
    font-weight: 650;
  }

  a {
    font-size: 18px;
  }

  p {
    font-size: 19px;
    font-weight: 600;
    min-width: 280px;
  }
}
  </style>