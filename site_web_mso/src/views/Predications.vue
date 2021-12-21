<template>
  <div id="predications">
    <Header></Header>
    <div class="main">
      <div class="search-predication-div">
        <input
          type="text"
          name="search-predication"
          v-model="search_predication"
          id="search-predication"
          placeholder="Rechercher une prédication"
        /><span><i class="fas fa-search"></i></span>
      </div>

      <div class="filtrage-predication">
        <ul class="filtrage-categorie" id="menu">
          <li class="categorie current-categorie">
            <b-link href=""><span>Tous</span></b-link>
          </li>
          <li class="categorie">
            <b-link class="lien-categorie" href=""
              ><span>Dernière heure</span></b-link
            >
          </li>
          <li class="categorie">
            <b-link class="lien-categorie" href=""
              ><span>Aujourd'hui</span></b-link
            >
          </li>
          <li class="categorie">
            <b-link class="lien-categorie" href=""
              ><span>Cette semaine</span></b-link
            >
          </li>
          <li class="categorie">
            <b-link class="lien-categorie" href=""
              ><span>Ce mois-ci</span></b-link
            >
          </li>
          <li class="categorie">
            <b-link class="lien-categorie" href=""
              ><span>Cette année</span></b-link
            >
          </li>
          <li class="categorie">
            <b-link class="lien-categorie" href=""
              ><span>Années passées</span></b-link
            >
          </li>
          <li class="categorie">
            <b-link class="lien-categorie" href=""><span>PDF</span></b-link>
          </li>
        </ul>
      </div>

      <section class="predication-section">
        <div class="row predication-ligne">
          <div
            v-for="predication in filteredPredications"
            :key="predication.id"
            class="predication-block col-md-4"
          >
            <img
              :src="predication.video"
              :alt="predication.theme"
              width=""
              height=""
            />
            <figcaption>
              <p class="theme-share">
                {{ predication.theme
                }}<span class="share-icon"
                  ><i class="fas fa-share-alt"></i
                ></span>
              </p>
              <p class="pastor-name">
                Pasteur:<span>{{ predication.pasteur }}</span>
              </p>
              <div class="date-like-view">
                <span>Publié {{ predication.publishedAt }}</span>
                <p class="all-like-comment">
                  <span>8k<i class="far fa-heart"></i></span>
                  <span>10k<i class="far fa-eye"></i></span>
                  <span>3k<i class="far fa-comment-alt"></i></span>
                </p>
              </div>
            </figcaption>
            <span class="play-icon"><i class="fas fa-play-circle"></i></span>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
    Header,
  },

  data() {
    return {
      search_predication:"",
      predications: [
        {
          id: 1,
          theme: "L'influence de notre comportement",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image1.png"),
        },
        {
          id: 2,
          theme: "L'influence de notre comportement",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image2.png"),
        },
        {
          id: 3,
          theme: "L'influence de notre comportement",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image3.png"),
        },
        {
          id: 4,
          theme: "L'influence de notre comportement",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image4.png"),
        },
        {
          id: 5,
          theme: "L'influence de notre comportement",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image1.png"),
        },
        {
          id: 6,
          theme: "L'influence de notre comportement",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image2.png"),
        },
        {
          id: 7,
          theme: "Le baptème du Saint-Esprit",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image3.png"),
        },
        {
          id: 8,
          theme: "L'influence de notre comportement",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image4.png"),
        },
        {
          id: 10,
          theme: "La nouvelle naissance",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image1.png"),
        },
        {
          id: 11,
          theme: "L'influence de notre comportement",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image2.png"),
        },
        {
          id: 12,
          theme: "L'influence de notre comportement",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image3.png"),
        },

        {
          id: 13,
          theme: "La divinité de Jesus-christ",
          publishedAt: "04/11/2021 à 15:00",
          pasteur: "Norbert BAMBELOU",
          video: require("@/assets/img/images_actualites/image4.png"),
        },
      ],
    };
  },

  created() {
    $(function () {
      $("#menu li a")
        .filter(function () {
          return this.href == location.href;
        })
        .parent()
        .addClass("current-categorie")
        .siblings()
        .removeClass("current-categorie");
      $("#menu li a").click(function () {
        $(this)
          .parent()
          .addClass("current-categorie")
          .siblings()
          .removeClass("current-categorie");
      });
    });
  },

  computed:{
    filteredPredications(){
      return this.predications.filter((predication)=>{
        return predication.theme.match(this.search_predication);
      })
    }
  }
};
</script>

<style>
@media screen and (max-width: 768px) {
  /* #predications {
    padding: 0px !important;
  } */
  /* * {
    padding: 0px !important;
    margin: 0px !important;
  } */
  .main {
    /* border: 1px solid blue; */
    top: 125px !important;
    position: relative;
    margin: 0px !important;
    padding: 0px !important;
  }
  .search-predication-div {
    width: 90% !important;
    margin: 0px auto !important;
    /* margin-top: 200px !important; */
    /* margin: 0px !important; */
    padding: 0px !important;
  }

  .search-predication-div input {
    width: 90% !important;
  }

  .search-predication-div span {
    width: 10% !important;
  }

  .predication-section {
    position: relative !important;
    width: 100% !important;
    margin-top: 5rem !important;
    /* border: 1px solid orange; */
  }
  .predication-block {
    margin: 1.5rem 0rem !important;
  }
  .predication-block figcaption {
    margin: 0px auto !important;
  }

  .filtrage-predication {
    /* display: none !important; */
    height: 450px !important;
    width: 100%;
    border: none !important;
    /* margin: 2rem 0rem !important; */
    /* margin-bottom: 2rem !important; */
    /* border: 1px solid blue; */
  }
  .filtrage-categorie {
    width: 90% !important;
    height: auto !important;
    margin: 0rem !important;

    flex-direction: column;
    /* position: relative !important; */
  }

  .categorie {
    padding: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    height: 100%;
    position: relative;
    list-style-type: none;
    flex: none !important;
    width: 100% !important;
  }
}
/* ******************************style for search block**************************************** */
.search-predication-div {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  /* border: 1px solid blue; */
  margin: 1rem auto;
  background: #250030;
  border-radius: 25px;
}

.search-predication-div input {
  width: 97%;
  position: relative;
  height: 115%;
  outline: none;
  border: none;
  background: #f1f1f1;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
  /* text-align: start; */
}
.search-predication-div input::placeholder {
  font-weight: 100 !important;
}
.search-predication-div span {
  width: 3%;
  position: relative;
  height: 100%;
  color: #f8a601;
  /* border: 1px solid red; */
  text-align: center;
  background: #250030;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.search-predication-div span i {
  font-size: 25px;
  /* border: 1px solid blue; */
  margin: 0px auto;
  position: relative;
  color: #f8a601;
}
/* *******************************************style for filtrage block************************** */

.filtrage-predication {
  height: 80px;
  width: 100%;
  border: 1px solid black;
  margin: 1.5rem 0rem;
}
.filtrage-categorie {
  width: 80%;
  height: 50px;
  margin: 0.5rem auto;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-evenly;
  position: relative;
  /* align-items: center; */
  text-align: center;
}

.categorie {
  border-radius: 25px;
  background: #f1f1f1;
  display: block;
  padding: 0.2rem;
  height: 100%;
  position: relative;
  list-style-type: none;
  flex: 1;
  text-align: center;
}
.lien-categorie {
  text-decoration: none;
  color: #6d6d6d;
}

.categorie span {
  text-align: center;
  /* border: 1px solid green; */
  display: inline-block;
  margin-top: 0.5rem;
}

#menu li a {
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
  text-decoration: none;
  color: #6d6d6d;
}

.current-categorie {
  /* color: #f8a601; */
  background: #250030;
}

.current-categorie span {
  color: #f8a601;
  font-weight: bold;
}

.predication-block {
  height: 350px;
  /* border: 1px solid blue; */
  text-align: center;
  /* padding: 0.5rem; */
  margin: 2rem 0rem;
}

.predication-block img {
  width: 90%;
  height: 70%;
  position: relative;
  cursor: pointer;
}

.predication-section {
  position: relative;
  width: 90%;
  height: auto;
  /* border: 1px solid orangered; */
  margin: 0px auto;
}

.predication-block figcaption {
  width: 90%;
  position: relative;
  margin: 0px auto;
  /* border: 1px solid green; */
  color: #6d6d6d;
  height: 30%;
}

.predication-block figcaption > p {
  padding: 0px;
  margin: 0px;
  /* border: 1px solid lime; */
  text-align: left !important;
}

.predication-block figcaption > div {
  padding: 0px;
  margin: 0.5rem 0rem;
  /* border: 1px solid lime; */
}

.theme-share {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6d6d6d;
  font-weight: bold;
  text-align: left !important;
}

.date-like-view {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* border: 1px solid green; */
  color: #6d6d6d;
  text-align: left !important;
}
.date-like-view > span {
  /* border: 1px solid red; */
  flex: 2;
  display: block;
}
.date-like-view > p {
  flex: 1;
}
.all-like-comment {
  display: flex;
  /* border: 1px solid blue; */
  justify-content: space-between;
  align-items: center;
}
.date-like-view i {
  color: #6d6d6d;
  cursor: pointer;
}
.share-icon {
  cursor: pointer;
  padding: 0.5rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
}

.pastor-name {
  color: #6d6d6d;
}

.play-icon {
  position: absolute;
  top: 25%;
}

.play-icon i {
  font-size: 50px;
  background-color: white;
  color: red;
  border-radius: 50%;
  cursor: pointer;
}
</style>