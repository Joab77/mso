<template>
  <div class="home">
    <Header></Header>
    <vue-element-loading
      :active="is_loading"
      spinner="bar-fade-scale"
      color="indigo"
      size="100"
      is-full-screen
    />

    <div class="main">
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade slides"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="4000">
            <img :src="images.image1" class="d-block" alt="" />
            <div class="carousel-caption d-md-block">
              <h2>Pareil à l'aigle qui éveille sa couvée...</h2>
              <p>Deutéronome 32: 11</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img
              :src="images.image2"
              class="d-block"
              alt=""
              style="object-fit: cover"
            />
            <div class="carousel-caption caption-bg d-md-block">
              <h2>CONVENTION ANNUELLE 2019: L'église et sa Condition</h2>
              <p>Mathieu 16:18-19</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img
              :src="images.image3"
              class="d-block"
              alt=""
              style="object-fit: cover"
            />
            <div class="carousel-caption caption-bg d-md-block">
              <h2>
                CONVENTION ANNUELLE 2017 : Pourquoi est-ce que Dieu nous sauve ?
              </h2>
              <p>Luc 1:74-75</p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="4000">
            <img
              :src="images.image4"
              class="d-block"
              alt=""
              style="object-fit: cover"
            />
            <div class="carousel-caption caption-bg d-md-block">
              <h2>
                CONVENTION ANNUELLE 2015 : Notre identité,une mission nouvelle
              </h2>
              <p>1 Jean 3:1-2</p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="4000">
            <img :src="images.image5" class="d-block" alt="" />
            <div class="carousel-caption caption-bg d-md-block">
              <h2>VISION PENTECOTE 2019</h2>
              <p>Deutéronome 32:11</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
      </div>

      <div class="annonce">
        <div class="annonce-info">
          <span>ANNONCES:</span>

          <marquee class="font-weight-bold" style="color: #707070">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            nostrum cum? Dolores eius aperiam excepturi consequuntur
            tenetur</marquee
          >
        </div>
        <div class="date-annonce text-center">
          <small class="mb-3">Publiée le Jeudi 25 novembre 2021 à 15:00</small>
        </div>
      </div>

      <section>
        <div class="head-titre">
          <span class="tirets"></span
          ><span class="head-text">QUELQUES PREDICATIONS VIDEOS</span
          ><span class="tirets"></span>
        </div>
        <div class="section-video row">
          <div class="col-md-4 sous-video">
            <img src="../assets/img/images_parole/image1.png" alt="" />
            <figcaption>
              <p>L'influence et notre comportement</p>
              <span>Publié ce 25/11/2021 à 13:00</span>
            </figcaption>
            <span class="play-button"><i class="fas fa-play-circle"></i></span>
          </div>
          <div class="col-md-4 sous-video">
            <img src="../assets/img/images_parole/image4.png" alt="" />
            <figcaption>
              <p>L'influence et notre comportement</p>
              <span>Publié ce 25/11/2021 à 13:00</span>
            </figcaption>
            <span class="play-button"><i class="fas fa-play-circle"></i></span>
          </div>
          <div class="col-md-4 sous-video">
            <img src="../assets/img/images_parole/imgc4.jpg" alt="" />
            <figcaption>
              <p>L'influence et notre comportement</p>
              <span>Publié ce 25/11/2021 à 13:00</span>
            </figcaption>
            <span class="play-button"><i class="fas fa-play-circle"></i></span>
          </div>
          <div class="col-md-4 sous-video">
            <img src="../assets/img/images_parole/imgc30.jpg" alt="" />
            <figcaption>
              <p>L'influence et notre comportement</p>
              <span>Publié ce 25/11/2021 à 13:00</span>
            </figcaption>
            <span class="play-button"><i class="fas fa-play-circle"></i></span>
          </div>
          <div class="col-md-4 sous-video">
            <img src="../assets/img/images_parole/imgc18.jpg" alt="" />
            <figcaption>
              <p>L'influence et notre comportement</p>
              <span>Publié ce 25/11/2021 à 13:00</span>
            </figcaption>
            <span class="play-button"><i class="fas fa-play-circle"></i></span>
          </div>
          <div class="col-md-4 sous-video">
            <img src="../assets/img/images_parole/imgc40.jpg" alt="" />
            <figcaption>
              <p>L'influence et notre comportement</p>
              <span>Publié ce 25/11/2021 à 13:00</span>
            </figcaption>
            <span class="play-button"><i class="fas fa-play-circle"></i></span>
          </div>
        </div>
      </section>

      <div class="history-requete">
        <div class="div-history-requete">
          <div class="block-history-photo">
            <div class="history-container">
              <div class="container-history-head">
                <h3 class="text-left">
                  BIOGRAPHIE:<span
                    >Ministère de la semence originelle<i
                      class="fas fa-arrow-right ml-1"
                    ></i
                  ></span>
                </h3>
              </div>
              <div class="block-of-back">
                <div class="history-back">
                  <div class="history">
                    <span>
                      <i class="fas fa-clock mr-3" style="color: #f8a601"></i>
                      05.11.2021
                    </span>

                    <h5 class="devise-mso">
                      Pareil à l'aigle qui éveille sa couvée, voltige sur ses
                      petits, déploie ses ailes, les portes sur ses plumes
                    </h5>
                    <div class="mso-history">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eaque labore ipsam ipsa nam ab! Officiis iusto esse
                      perspiciatis obcaecati facilis eaque exercitationem quas
                      aspernatur, reiciendis veritatis voluptatem ipsa non
                      maxime. Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Nobis molestiae aliquam fugiat animi dolores ducimus
                      facere cum earum possimus. Perspiciatis sequi quia nostrum
                      illum nobis dolor at, adipisci cupiditate deserunt.
                    </div>
                    <a class="lien-to-history" href="#"
                      >Lire la suite<span
                        ><i
                          class="fas fa-arrow-right ml-1"
                          style="color: #f8a601"
                        ></i></span
                    ></a>
                  </div>
                </div>
                <!-- <div class="photo-container"> -->
                <div class="history-photo">
                  <img src="@/assets/img/images_actualites/interne.png" />
                </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
          <div class="requete-container">
            <h3 class="text-center">j'ai une requête de prière</h3>

            <div class="requete-back">
              <form class="requete-form">
                <div class="nom_prenom">
                  <div class="nom">
                    <label for="last_name">Nom</label
                    ><input type="text" name="last_name" id="last_name" />
                  </div>
                  <div class="prenom">
                    <label for="first_name">Prénoms</label
                    ><input type="text" name="first_name" id="first_name" />
                  </div>
                </div>
                <div class="phone">
                  <label for="phone_number">Téléphone</label
                  ><input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Ex:+22900000000"
                  />
                </div>
                <div class="message">
                  <label for="message">Message</label
                  ><textarea name="message" id="message"></textarea>
                </div>
                <div>
                  <input type="submit" value="Envoyer" id="sendRequete" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <article class="atualites-verset">
        <div class="actualite row">
          <p style="color: #ba700e" class="font-weight-bold text-left mt-5">
            QUELQUES ACTUALITES
          </p>
          <div class="bloc-actualite row">
            <div class="col-md-3 sous-actualite">
              <img src="../assets/img/images_actualites/image1.png" alt="" />
              <figcaption>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <span>Publié ce 25/11/2021</span>
              </figcaption>
            </div>
            <div class="col-md-3 sous-actualite">
              <img src="../assets/img/images_actualites/chorale.jpg" alt="" />
              <figcaption>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <span>Publié ce 25/11/2021</span>
              </figcaption>
            </div>
            <div class="col-md-3 sous-actualite">
              <img src="../assets/img/images_actualites/image3.png" alt="" />
              <figcaption>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <span>Publié ce 25/11/2021</span>
              </figcaption>
            </div>
            <div class="col-md-3 sous-actualite">
              <img src="../assets/img/images_actualites/image4.png" alt="" />
              <figcaption>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <span>Publié ce 25/11/2021</span>
              </figcaption>
            </div>
          </div>
        </div>
        <div class="versets">
          <div class="chapitre">
            <h3>Deutéronome 32:11</h3>
          </div>
          <div class="verset-text">
            <div class="text-bible">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                ut optio tempora ducimus suscipit excepturi, error nemo, quaerat
                ipsam, dolorem ipsa consequuntur modi nesciunt autem? Eius
                quaerat exercitationem porro sit?
              </p>

              <a href="/bible" class="btn lien-bible">MEDITEZ LA BIBLE</a>
            </div>
          </div>
        </div>
      </article>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  data() {
    return {
      is_loading: true,

      images: {
        image1: require("@/assets/img/images_actualites/beautiful.png"),
        image2: require("@/assets/img/images/imgc40.jpg"),
        image3: require("@/assets/img/images/imgc13.jpg"),
        image4: require("@/assets/img/images/imgc18.jpg"),
        image5: require("@/assets/img/images/imgc30.jpg"),
      },
    };
  },
  components: {
    Footer,
    Header,
  },
  created() {
    setTimeout(() => {
      this.is_loading = false;
    }, 6000);
  },

  methods: {},
};
</script>
<style scoped>
/* ********************************************************* */
.slides {
  position: relative;
  width: 100%;
  height: 600px;
  /* border: 1px solid orangered; */
  /* object-fit: cover; */
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border: 2px solid rgb(43, 255, 0); */
  background: #250030;
  margin: 0px auto;
}
.carousel-item img {
  width: 1550px;
  height: 595px;
  /* position: relative; */
  /* object-fit: contain; */
}
.caption-bg {
  background-color: rgba(0, 0, 0, 0.534);
}
.carousel-caption h2 {
  font-style: italic;
  font-size: 25px;
}
.carousel-caption p {
  font-size: 25px;
  color: #f8a601;
}
.annonce {
  height: 75px;
  width: 100%;
  /* border: 1px solid green; */
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.664);
}
.annonce-info {
  width: 90%;
  position: relative;
  margin: 0px auto;
  padding: 1rem 0rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #6d6d6d;
}

.annonce-info span {
  display: inline-block;
  margin-right: 1rem;
  /* border: 1px solid red; */
  color: red;
  font-weight: bold;
}
.date-annonce {
  font-size: small;
  /* padding: 0.3rem 0rem; */
  font-style: italic;
  align-items: center;
  justify-content: space-around;
  color: #6d6d6d;
}

/* *******************************style for history and requete section************************ */
.history-requete {
  width: 100%;
  height: 600px;
  background-color: #f4f4f4;
  position: relative;
  border: 1px solid lime;
}

.div-history-requete {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 90%;
  height: 80%;
  margin: 50px auto;
  /* border: 1px solid blue; */
  /* margin-top: 50px; */
  bottom: 0px;
  /* background: chartreuse; */
}

.history-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  /* background-color: black; */
  /* border-radius: 25px; */
  /* border: 1px solid goldenrod; */
}

.requete-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  /* background-color: black; */
  /* border-radius: 25px; */
  /* border: 1px solid goldenrod; */
}

.history {
  background-color: #ffff;
  width: 140%;
  height: 90%;
  border-radius: 25px;
  margin: 1.5rem;
  /* border: 1px solid orangered; */
  z-index: 100;
  position: absolute;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: justify;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}
.container-history-head {
  /* border: 1px solid red; */
  /* display: flex;
  justify-content: space-between; */
}
.container-history-head > h3 {
  color: #250030;
  font-weight: bold;
  /* border: 1px solid red; */
}
.container-history-head span {
  color: #6d6d6d;
  font-size: small;
  font-weight: 100 !important;
  margin: 0rem 0.3rem;
  padding: 0.5rem 0rem;
  position: absolute;
  text-decoration: underline;
}
.history span {
  color: #6d6d6d;
  /* display: block; */
}

.devise-mso {
  color: #250030;
  font-weight: bold;
  font-size: 18px;
}

.lien-to-history {
  color: #f8a601;
  text-decoration: underline;
}
.block-history-photo {
  width: 65%;
  position: relative;
  /* border: 1px solid indigo; */
  /* background: #f8a601; */
}
.block-of-back {
  display: flex;
  width: 100%;
  height: 90%;
  position: relative;
  justify-content: space-between;
  /* border: 1px solid blue; */
  /* background: lightgreen; */
}
.history-back {
  width: 45%;
  /* flex: 1; */
  height: 100%;
  position: relative;
  background-color: #e6e6e6;
  border-radius: 25px;
}
.requete-back {
  width: 90%;
  height: 90%;
  position: relative;
  background-color: #e6e6e6;
  border-radius: 25px;
}

.history-photo {
  /* margin: 50px auto; */
  width: 45%;
  height: 100%;
  position: relative;
  /* border: 1px solid rgb(238, 16, 208); */
}

.history-photo img {
  width: 100%;
  height: 100%;
  position: relative;
}

.requete-container h3 {
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 20px;
  color: #250030;
  font-weight: bold;
}

.requete-form {
  /* border: 1px solid red; */
  background: #ffffff;
  position: absolute;
  width: 110%;
  margin: 1.5rem;
  height: 90%;
  z-index: 100;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.requete-form input {
  text-align: center;
  height: 45px;
  background-color: #f3f3f3;
  border: 2px solid #00000005;
  outline: none;
  border-radius: 5px;
}

.requete-form > div {
  padding: 0rem 0.75rem;
  /* border: 1px solid blue; */
  margin: 0.5rem 0rem;
}

.requete-form input:focus {
  border: 1px solid #f8a601;
  border-radius: 5px;
}

.requete-form textarea:focus {
  border: 1px solid #f8a601;
  border-radius: 5px;
}
.requete-form textarea {
  resize: none;
  height: 100px;
  outline: none;
  border: 2px solid #00000005;
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.nom_prenom {
  /* border: 1px solid blue; */
  position: relative;
  width: 100%;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
}
.nom_prenom div {
  position: relative;
  width: 45%;
  /* border: 1px solid green; */
}
.nom input,
.prenom input {
  position: relative;
  width: 100%;
}
.phone,
.message {
  /* margin: 0.75rem 0rem; */
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
}

.requete-form input[type="submit"] {
  position: relative;
  width: 100%;
  background: #250030;
  color: #f8a601;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
}

.requete-form label {
  /* font-weight: bold; */
  color: #707070;
}

/* ************************style for  videos section****************************************** */

.play-button {
  position: absolute;
  top: 25%;
  text-align: center;
  /* border: 1px solid green; */
  z-index: 100;
}
.play-button i {
  color: red;
  background: white;
  border-radius: 50%;
  font-size: 3rem;
  cursor: pointer;
}

section {
  text-align: center;
  width: 90%;
  position: relative;
  height: auto;
  /* border: 1px solid red; */
  margin: 0px auto;
  box-sizing: border-boxs;
}
.head-titre {
  margin: 2rem 0rem;
  /* border: 1px solid blue; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.head-text {
  /* width: 30%; */
  padding: 0.2rem;
  color: #6d6d6d;
  font-weight: bold;
  /* border: 1px solid red; */
}

.head-titre .tirets {
  display: inline-block;
  width: 35%;
  height: 1.5px;
  background-color: #00000098;
}
.section-video {
  width: 100%;
  position: relative;
  height: auto;
  /* border: 1px solid green; */
  /* box-shadow: 5px 0px 0px 8px #00000088; */
  margin: 0px auto;
}
.sous-video {
  /* border: 1px solid rgb(247, 0, 255); */
}
.sous-video img {
  width: 100%;
  height: 70%;
  position: relative;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.sous-video figcaption p {
  margin: 0px;
  font-weight: 500;
  color: #929292;
}

.sous-video figcaption span {
  font-size: small;
  color: #929292;
}

/* ***********************style for article************************************ */

.atualites-verset {
  margin: 0px;
  height: 800px;
  width: 100%;
  position: relative;
  background-color: #250030;
  /*border: 1px solid greenyellow;*/
}

.actualite {
  /* margin-top: 50px; */
  position: relative;
  width: 90%;
  margin: 0px auto;
  height: 500px;
  text-align: center;
  /* border: 1px solid orangered; */
}

.bloc-actualite {
  position: relative;
  width: 100%;
  height: 400px;
  margin: 0px auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 8px #370047;
}
.sous-actualite {
  margin: 1rem 0rem;
  cursor: pointer;
  /* border: 1px solid greenyellow; */
}
.sous-actualite img {
  width: 100%;
  height: 70%;
  position: relative;
  object-fit: cover;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.562);
  border-radius: 10px;
}

.sous-actualite figcaption p {
  margin: 1rem 0rem;
  color: #707070;
}

.sous-actualite figcaption span {
  font-size: small;
  color: #f8a601;
  font-weight: bold;
}

/* *****************************STYLE FOR VERSETS***************************** */

.versets {
  z-index: 100;
  width: 90%;
  height: 350px;
  margin-bottom: 2rem;
  /* border: 1px solid orangered; */
  background-color: white;
  position: relative;
  margin: 0px auto;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.chapitre {
  flex: 1;
  text-align: center;
  height: 100%;
  position: relative;
  /* border-right: 1px solid #8f8f8f; */
}

.chapitre h3 {
  padding: 2rem;
  text-align: center;
  margin: 6rem auto;
  position: relative;
  font-weight: bold;
  color: #250030;
  display: inline-block;
}
.verset-text {
  flex: 2;
  height: 100%;
  position: relative;
  /* border-left: 1px solid #8f8f8f; */
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
}

.text-bible {
  padding: 2rem;
  margin: 2.5rem auto;
  text-align: left;
  position: relative;
  width: 60%;
  display: inline-block;
  color: #707070;
}
.lien-bible {
  background-color: #250030;
  color: #f8a601;
  text-decoration: none;
  /* padding: 10px; */
  border-radius: 25px;
  outline: none;
  width: 50%;

  font-weight: bold;
}
.lien-bible:hover {
  color: #f8a601;
}

/* *************************************************responsivite coté mobile*************************** */

@media screen and (max-width: 768px) {
  .main {
    /* border: 1px solid blue; */
    top: 100px !important;
    position: relative;
  }
  .history-requete {
    position: relative;
    height: 1200px !important;
    margin-bottom: 100px 0px !important;
    width: 100% !important;
    border: none !important;
  }
  .div-history-requete {
    display: flex;
    flex-direction: column !important;
    width: 95% !important;
    justify-content: flex-start;
    position: relative;
    height: 100% !important;
    box-sizing: border-box;
  }
  .div-history-requete > div {
    margin: 0px;
  }

  .block-history-photo {
    width: 100% !important;
    /* height: auto !important; */
    margin-bottom: 2rem !important;
    padding: 0px !important;
    /* flex: 1 !important; */
    position: relative;
    height: 50% !important;
  }

  .requete-container {
    width: 100% !important;
    /* height: auto !important; */
    margin-bottom: 50px !important;
    padding: 0px !important;
    /* border: 2px solid red; */
    /* flex: 1 !important; */
    position: relative;
    height: 50% !important;
  }

  .history-back {
    width: 100% !important;
    /* height: auto !important; */
    /* border: 1px solid blue; */
  }
  .history-photo {
    display: none;
  }
  .history {
    width: 100% !important;
    position: relative;
    height: 95% !important;
    overflow: scroll;
    display: block !important;
    padding: 1rem !important;
    margin: 1rem 0rem !important;
    /* border: 2px solid red; */
  }

  .requete-back {
    width: 100%;
    height: 400px;
    position: relative;
    background-color: #e6e6e6;
    border-radius: 25px;
    /* display: none; */
    margin-bottom: 100px !important;
  }

  .requete-form {
    /* border: 1px solid red; */
    background: #ffffff;
    position: absolute !important;
    display: block !important;
    width: 100%;
    margin: 1rem 0rem !important;
    height: auto !important;
    z-index: initial !important;
    border-radius: 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    /* margin-bottom: 100px; */
  }

  .requete-form > div {
    padding: 0rem 0.75rem;
    /* border: 1px solid rgb(116, 116, 119); */
    margin: 0.5rem 0rem;
  }

  .nom_prenom {
    /* border: 1px solid blue; */
    position: relative;
    width: 100%;
    display: flex !important;
    flex-direction: column;
  }
  .nom_prenom div {
    position: relative;
    width: 100% !important;
    /* border: 1px solid green; */
  }
  /* ***********************************actualites et les versets*********************************** */
  .atualites-verset {
    height: auto !important;
    width: 100%;
    margin-bottom: 2rem !important;
  }

  .actualite {
    height: auto !important;
  }

  .bloc-actualite {
    height: auto !important;
  }
  .sous-actualite {
    margin: 1rem 0rem;
    cursor: pointer;
    /* border: 1px solid greenyellow; */
  }

  .versets {
    width: 90%;
    height: auto !important;
    margin-top: 100px;
    padding-bottom: 2rem;
    display: flex !important;
    flex-direction: column;
    /* border: 1px solid orangered; */
    /* margin-bottom: 2rem !important; */
  }

  .chapitre {
    /* flex: 1; */
    width: 100%;
    text-align: center;
    height: auto;
    position: relative;
    /* border-right: 1px solid #8f8f8f; */
  }

  .chapitre h3 {
    padding: 2rem !important;
    text-align: center;
    margin: 0rem auto !important;
    position: relative;
    font-weight: bold;
    color: #250030;
    display: inline-block;
  }
  .verset-text {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: none !important;
    border-top: 1px solid #f8a601;
  }

  .text-bible {
    padding: 1rem !important;
    margin: 0rem auto !important;
    text-align: justify !important;
    position: relative;
    width: 100% !important;
    display: block;
    color: #707070;
  }
  .lien-bible {
    padding: 10px;
    width: 90% !important;
    margin-top: 2rem;
  }
  .lien-bible:hover {
    color: #f8a601;
  }

  /* **************************************bloc slide accueil********************************* */

  .slides {
    position: relative;
    width: 100%;
    height: 350px !important;
    /* border: 1px solid orangered; */
    /* object-fit: cover; */
  }

  .carousel-inner {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: initial !important;
    /* border: 2px solid rgb(43, 255, 0); */
    background: #250030;
    margin: 0px auto;
  }
  .carousel-item img {
    width: 100% !important;
    height: 350px !important;
    position: relative;
    /* object-fit: contain; */
  }
  .caption-bg {
    background-color: rgba(0, 0, 0, 0.534);
  }

  .carousel-caption {
    font-size: small;
  }
  .carousel-caption p {
    font-size: small !important;
    color: #f8a601;
  }

  .carousel-caption h2 {
    font-size: small;
  }
}
</style>