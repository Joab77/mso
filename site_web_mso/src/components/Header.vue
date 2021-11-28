<template>
  <div id="header">
    <div class="surnav">
      <div class="logo">
        <img
          src="../assets/img/image_logo/logo_mso.png"
          alt="MSO"
          width="100px"
          height="100px"
        />
        <figcaption>
          <p class="mso-name font-weight-bold text-left m-0">
            MINISTERE DE LA <br />SEMENCE ORIGINELLE
          </p>
          <p class="text-left">La parole parlée est la semence originelle</p>
        </figcaption>
      </div>
      <div class="devise">
        <p class="font-weight-bold m-0">
          Pareil à l'aigle qui éveille sa couvée...
        </p>
        <p class="m-0" style="font-size: 0.65rem">
          Like an eagle that stirs up his nest and hovers overs its young
        </p>
        <p
          style="color: #ba700e; font-style: italic"
          class="font-weight-bold m-0"
        >
          Deutéronome 32:11
        </p>
      </div>
    </div>
    <nav>
      <ul id="menu">
        <li class="sous-menu current-sous-menu">
          <router-link to="/"><span>Accueil</span></router-link>
        </li>
        <li class="sous-menu">
          <router-link to=""><span>Tabernacles</span></router-link>
        </li>
        <li class="sous-menu">
          <router-link to=""><span>Prédications</span></router-link>
        </li>
        <li class="sous-menu">
          <router-link to=""><span>Actualités</span></router-link>
        </li>
        <li class="sous-menu">
          <router-link to=""><span>Images</span></router-link>
        </li>
        <li class="sous-menu">
          <router-link to=""><span>Forum</span></router-link>
        </li>
        <li id="search-menu">
          <input type="search" name="search" id="search" />
          <span style="color: #ba700e; margin-right: 0.1rem"
            ><i class="fas fa-search"></i
          ></span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  created() {
    $(function () {
      $("#menu li ")
        .filter(function () {
          return this.href == location.href;
        })
        .parent()
        .addClass("current-sous-menu")
        .siblings()
        .removeClass("current-sous-menu");
      $("#menu li a").click(function () {
        $(this)
          .parent()
          .addClass("current-sous-menu")
          .siblings()
          .removeClass("current-sous-menu");
      });
    });
  },
};
</script>

<style scoped>
.mso-name {
}
#header {
  height: 300px;
  width: 100%;
  background-color: #250030;
}

.current-sous-menu a {
  background-color: #f8a601 !important;
  color: #250030 !important;
}

.surnav {
  padding: 1rem 0rem;
  color: white;
  width: 90%;
  height: 80%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  /* border: 1px solid orangered; */
}

.logo {
  /* border: 1px solid rgb(0, 255, 55); */
  flex: 1;
}

.logo figcaption {
  position: relative;
  margin-top: 15px;
}

.logo img {
  margin-right: 0.2rem;
  float: left;
}

.devise {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: right;
}
/* **********nav styles*********************************************************** */
nav {
  width: 90%;
  margin: 0px auto;
  height: 20%;
  position: relative;
  /* border: 1px solid orangered; */
}

#menu {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid rgb(25, 0, 255); */
}
.sous-menu span {
  text-align: center;
  /* border: 1px solid green; */
  display: inline-block;
  margin: 10px auto;
  font-weight: 200;
}
#menu li {
  height: 100%;
  position: relative;
  list-style-type: none;
  flex: 1;
  text-align: center;
  /* border: 1px solid rgb(251, 255, 0); */
}

#menu li:nth-child(2n) {
  background-color: #46005b;
}

#menu li:nth-child(2n + 1) {
  background-color: #370047;
}

#menu li a {
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
  text-decoration: none;
  color: #e6e6e6;
  font-size: 20px;
  /* border: 1px solid lime; */
}

#search-menu {
  /* margin-left: 0.3rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  /* border-radius: 10px; */
}
#search-menu span {
  position: relative;
  font-size: 2rem;
  cursor: pointer;
}
#search-menu input {
  height: 80%;
  border: none;
  background-color: transparent;
  outline: none;
  position: relative;
  color: #e6e6e6;
}
#search-menu input:focus {
  border-top: 1px solid #f8a601;
  border-bottom: 1px solid #f8a601;
  border-left: 1px solid #f8a601;
  border-radius: 15px;
}
</style>