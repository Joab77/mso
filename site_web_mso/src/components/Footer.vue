<template>
  <div>
    <div id="footer">
      <div class="footer-content">
        <div class="col-md-4 contact-footer">
          <div class="contact-img">
            <img src="../assets/img/image_logo/logo_mso.png" />
            <figcaption>Ministère de la semence originelle</figcaption>
          </div>

          <div class="contact">
            <p>Contact</p>

            <div class="ul-contact">
              <p>
                <span class="font-weight-bold"
                  ><i class="fas fa-phone-alt mr-3"></i>+229 97 58 10 88</span
                >
              </p>
              <p>
                <span><i class="fas fa-envelope mr-3"></i>mso@gmail.com</span>
              </p>
              <p>
                <span
                  ><i class="fas fa-map-marker-alt mr-3"></i>06 BP 2021
                  Cotonou,Bénin</span
                >
              </p>
            </div>
          </div>
          <div class="reseaux">
            <div class="ul-reseaux">
              <span>
                <a href="https://fr-fr.facebook.com/msobenin/"
                  ><i class="fab fa-facebook"></i
                ></a>
              </span>
              <span>
                <a href=""><i class="fab fa-whatsapp"></i></a>
              </span>
              <span>
                <a href=""><i class="fab fa-youtube"></i></a>
              </span>
              <span>
                <a href=""><i class="fab fa-twitter"></i></a>
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-2 lien-footer">
          <p>Liens utiles</p>
          <div class="ul-lien">
            <span class="sous-lien">
              <b-link class="b-link" href="/">Accueil</b-link>
            </span>
            <span class="sous-lien">
              <b-link class="b-link" href="/tabernacles">Tabernacles</b-link>
            </span>
            <span class="sous-lien">
              <b-link class="b-link" href="/predications">Prédications</b-link>
            </span>
            <span class="sous-lien">
              <b-link class="b-link" href="/actualites">Actualités</b-link>
            </span>
            <span class="sous-lien">
              <b-link class="b-link" href="/galeries">Images</b-link>
            </span>
            <span class="sous-lien">
              <b-link class="b-link" href="/forum">Forum</b-link>
            </span>
          </div>
        </div>
        <div class="col-md-4 abonne-footer">
          <form class="abonne-form">
            <p>Pour recevoir nos newsletters</p>
            <div>
              <input
                type="text"
                name="pseudo"
                id="pseudo"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Votre adresse email"
              />
            </div>
            <div class="div-input">
              <input type="submit" value="S'abonner" id="sendAbonne" />
            </div>
          </form>
        </div>
      </div>
      <hr
        style="
          width: 90%;
          margin: 1rem auto;
          position: relative;
          border: 2px solid black;
          font-weight: bold;
        "
      />
      <div class="footer-foot">
        <p>
          Enregistré sous N° 2010/141/MISP/DC/SG/DGAI/SCC-ASSOC du 05 Mai 2010
        </p>
        <p>Copyright@2021 All Right Reserved</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
/* * {
  margin: 0px;
  padding: 0px;
} */

li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

.b-link {
  text-decoration: none;
  color: #6d6d6d;
}

.b-link:hover {
  text-decoration: none;
  color: #f8a601;
}
#footer {
  width: 100%;
  height: auto;
  position: relative;
  background-color: #f1f1f1;
  margin: 0px;
  border: 1px solid #f1f1f1;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  /* border: 1px solid red; */
  margin: 0px auto;
  margin-top: 200px;
}

.contenu {
  height: 100%;
  margin: 0px auto;
  /* border: 1px solid limegreen; */
  position: relative;
  width: 100%;
}
.footer-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  position: relative;
  margin: 0px auto;
  color: #6d6d6d;
}

.ul-reseaux {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid red; */
}

.ul-reseaux span {
  margin-right: 2rem;
  /* border: 1px solid orange; */
}
.ul-reseaux span i {
  font-size: 25px;
  color: white;
  padding: 0.3rem;
  border-radius: 50%;
  background-color: #8f8f8f;
}
.ul-reseaux span i:hover {
  color: #f8a601;
  background-color: #250030;
  transition: all 0.5s ease;
  transform: translateY(-2px);
}
.contact-footer {
  /* border: 1px solid orangered; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.contact-img img {
  float: left;
  width: 70px;
  height: 70px;
}
.contact-img figcaption {
  /* border: 1px solid red; */
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 50px;
  text-align: left;
  color: #6d6d6d;
}
.contact {
  /* border: 1px solid green; */
}
.ul-contact {
  /* border: 1px solid red; */
  /* position: relative;
  width: 100%; */
}

.ul-contact span {
  color: #6d6d6d;
}
.ul-contact p {
  color: #6d6d6d;
}
.contact > p {
  color: #f8a601;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
}
.ul-contact p {
  text-align: left;
  /* border: 1px solid blue; */
  width: 100%;
  /* position: relative; */
  display: inline-block;
}
.ul-contact p i {
  font-size: 25px;
  color: #f8a601;
}

.reseaux {
  /* border: 1px solid green; */
}
.lien-footer {
  /* border: 1px solid indigo; */
}

.ul-lien {
  /* border: 1px solid yellow; */
  /* color: #6d6d6d; */
  text-align: center;
}

.ul-lien span {
  text-align: left;
  margin-bottom: 1.2rem;
  font-size: 20px;
  display: block;
}

.lien-footer p {
  color: #f8a601;
  font-weight: bold;
  font-size: 20px;
  /* text-align: left; */
}

.abonne-footer {
  /* border: 1px solid red; */
}

.abonne-footer p {
  color: #f8a601;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
}

.abonne-form {
  /* border: 1px solid gre.en; */
}
.abonne-form div {
  position: relative;
  width: 100%;
}
.abonne-form input {
  background-color: white;
  position: relative;
  width: 100%;
  height: 45px;
  outline: none;
  border: none;
  /* border: transparent; */
  /* border: 0.5px solid rgba(0, 0, 0, 0.185); */
  margin: 1rem 0rem;
  font-size: 20px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
}

.abonne-form input:focus {
  border: 1px solid #f8a601;
  border-radius: 5px;
}

.abonne-form input::placeholder {
  font-size: 15px;
  font-style: italic;
  font-weight: 100 !important;
  /* margin-left: 2rem; */
  /* border: 1px solid red; */
  color: #6d6d6d !important;
}

.abonne-form input[type="submit"] {
  background-color: #250030;
  color: #f8a601;
  width: 50%;
  margin-left: 0px;
  text-align: center;
  height: 40px;
  position: relative;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  /* border: 1px solid white; */
}

.div-input {
  /* border: 1px solid blueviolet; */
  text-align: left;
}

@media screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .footer-content > div {
    margin: 1rem 0rem;
  }
  #footer {
    /* display: none; */
  }

  .footer-foot p {
    font-size: small;
  }
}
</style>