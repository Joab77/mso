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
      <div class="bouton-bar" id="bouton-bars" @click="displayMenu">
        <span><i class="fas fa-bars"></i></span>
      </div>
      <div class="devise" id="devise">
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
    <nav id="general-menu">
      <span class="text-danger close-button" id="close-menu" @click="hideMenu"
        ><i class="fas fa-times"></i
      ></span>
      <ul id="menu">
        <div class="left-side">
          <li class="sous-menu current-sous-menu">
            <b-link href="/"><span>Accueil</span></b-link>
          </li>
          <li class="sous-menu">
            <b-link href="/tabernacles"><span>Tabernacles</span></b-link>
          </li>
          <li class="sous-menu">
            <b-link href="/predications"><span>Prédications</span></b-link>
          </li>
        </div>
        <!-- <li class="sous-menu">
          <b-link href="/actualites"><span>Actualités</span></b-link>
        </li> -->
        <!-- <li class="sous-menu">
          <b-link href="/galeries"><span>Images</span></b-link>
        </li>
        <li class="sous-menu">
          <b-link href="/forum"><span>Forum</span></b-link>
        </li> -->
        <div class="right-side">
          <li id="search-menu">
            <input type="search" name="search" id="search" />
            <span style="color: #ba700e; margin-right: 0.1rem"
              ><i class="fas fa-search"></i
            ></span>
          </li>
        </div>
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

  methods: {
    displayMenu() {
      $("#general-menu").toggle();
      // $("#bouton-bars").addClass('fas fa-times');
      // $("#bouton-bars").removeClass('fas fa-bars');
      // $("#general-menu").css("left","-300px");
      // $('nav').css('transition','all 500ms ease-in-out');
      // $('#bouton-bars').css('color','yellow');
    },

    hideMenu() {
      $("#general-menu").hide();
    },
  },

  created() {
    $(function () {
      $("#menu li a")
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
@media screen and (max-width: 768px) {
  /* * {
    padding: 0px !important;
    margin: 0px !important;
  } */
  .close-button i {
    background: #e6e6e6;
    padding: 0.5rem;
    /* border-radius: 50%; */
    font-size: 25px;
  }
  .close-button {
    display: none !important;
    right: 0px;
    position: absolute;
  }
  #devise {
    display: none;
  }
  #bouton-bars {
    position: absolute;
    font-size: 35px;
    cursor: pointer;
    color: white;
    right: 5px;
    display: block;
    /* background: red; */
  }
  #header {
    display: block;
    user-select: none;
    height: 100px !important;
    width: 100%;
    border: 1px solid white;
    background-color: #250030;
    position: fixed !important;
    z-index: 200;
    margin: 0px !important  ;
    /* margin-top: 0px !important; */
    padding: 0px !important;
    /* margin-bottom: 100px !important; */
  }

  .surnav {
    height: 100%;
    color: white;
    width: 100% !important;
    position: absolute;
    display: block;
    /* border: 1px solid rgb(0, 247, 255); */
    margin: 10px auto !important;
  }

  .logo {
    /* border: 1px solid rgb(0, 255, 55); */
    width: 100%;
    margin: 0px !important;
    padding: 0px !important;
    position: absolute;
  }

  .logo figcaption {
    position: relative;
    margin: 0px !important;
  }

  .logo figcaption p:last-child {
    font-size: small;
  }

  .logo img {
    clear: left;
    width: 75px;
    height: 75px;
  }

  /* **********nav styles*********************************************************** */
  nav {
    position: fixed !important;
    z-index: 999;
    width: 300px !important;
    height: 100vh !important;
    margin-left: 0px auto !important;
    padding: 0px !important;
    /* border: 1px solid green; */
    background: #250030;
    transition: all 500ms ease-in-out;
    /* display: ; */
    /* left: -300px !important; */
  }

  #menu {
    
    width: 100% !important;
    position: relative !important;
    height: 80% !important;
    flex-direction: column;
    /* border: 1px solid orangered; */
    text-align: left !important;
    /* margin-top: 50px; */
    padding: 0px;
  }

  .sous-menu span {
    text-align: center;
    /* border: 1px solid green; */
    display: inline-block !important;
    margin-top: 25px !important;
    font-weight: 200;
  }
  #menu .left-side li {
    height: 100px !important;
    position: relative !important;
    text-align: left !important;
    /* border: 1px solid yellow; */
    width: 100% !important;
    margin: 0px;
    padding: 0px;
    flex: none !important;
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

  .left-side {
    flex-direction: column;
    height: 100%;
    display: flex;
    flex: none;
    width: 100% !important;
    /* border: 1px solid yellow; */
  }

  .right-side {
    display: none;
    /* border: 1px solid white; */
  }
  #search-menu {
    display: none !important;
  }

  .sous-menu span {
    margin-left: 1rem !important;
  }
}

/* ****************************FIN RESPONSIVITE************************************************* */

.bouton-bar,
.close-button {
  display: none;
}
.mso-name {
}
#header {
  height: 300px;
  width: 100%;
  background-color: #250030;
}

.current-sous-menu a {
  background-color: #f8a601 !important;
}

.current-sous-menu span {
  color: #250030 !important;
  font-weight: bold !important;
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

.left-side {
  height: 100%;
  display: flex;
  flex: 1;
  /* border: 1px solid yellow; */
}

.right-side {
  height: 100%;
  flex: 2;
  /* border: 1px solid white; */
}
.sous-menu span {
  text-align: center;
  /* border: 1px solid green; */
  display: inline-block;
  margin: 10px auto;
  font-weight: 200;
}
#menu .left-side li {
  height: 100%;
  position: relative;
  list-style-type: none;
  flex: 1;
  text-align: center;
  /* border: 1px solid rgb(251, 255, 0); */
}

#menu .right-side li {
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
#menu .right-side li {
  background-color: #46005b;
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
  /* border: 1px solid yellow; */
  /* border-radius: 10px; */
}
#search-menu span {
  position: relative;
  font-size: 2rem;
  cursor: pointer;
  width: 5%;
}
#search-menu input {
  width: 95%;
  height: 100%;
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
  text-align: center;
  /* border-radius: 15px; */
}
</style>
