<template>
  <div id="tabernacles">
    <Header></Header>
    <div class="main">
      <div class="search-tabernacle-div">
        <input
          type="text"
          v-model="search_tabernacle"
          name="search-tabernacle"
          id="search-tabernacle"
          placeholder="Rechercher un tabernacle"
        /><span><i class="fas fa-search"></i></span>
      </div>

      <section class="alltabernacle">
        <div
          v-for="tabernacle in filteredTabernacles"
          :key="tabernacle.id"
          class="bloc-tabernacle"
        >
          <div class="tabernacle-div" v-b-toggle="'collapse-' + tabernacle.id">
            <p class="tabernacle-name">{{ tabernacle.name }}</p>
            <span class="tabernacle-button"
              ><i class="fas fa-chevron-down"></i
            ></span>
          </div>
          <b-collapse
            :id="'collapse-' + tabernacle.id"
            class="mt-0 tabernacle-collapse"
          >
            <b-card class="" id="info-tabernacle">
              <div>
                <div class="info-culte">
                  <p>Jours de culte et heure:</p>
                  <div>
                    <table class="table table-responsive">
                      <thead>
                        <tr>
                          <th>Lundi</th>
                          <th>Mardi</th>
                          <th>Mercredi</th>
                          <th>Jeudi</th>
                          <th>Vendredi</th>
                          <th>Samedi</th>
                          <th>Dimanche</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="info-pasteur">
                  <p>Nom du Pasteur:<span> Norbert BAMBELOU</span></p>
                  <p>Contact: <span>+229 97 58 10 88</span></p>
                  <p>Email: <span>bambelounorber@yahoo.fr</span></p>
                </div>
                <div class="indication-div">
                  <p>
                    Indication:
                    <span
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non omnis assumenda unde soluta voluptates quia, minus
                      ipsa sunt impedit ex et quod quo totam enim quae quidem
                      dignissimos quibusdam dolorem.</span
                    >
                  </p>
                  <p>
                    <img
                      src="../assets/img/images/Google_Maps_icon.svg.png"
                      alt="localisation"
                      width="35px"
                      height="50px"
                    />
                  </p>
                </div>
              </div>
            </b-card>
          </b-collapse>
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
  name: "AllTabernacle",
  components: {
    Footer,
    Header,
  },

  data() {
    return {
      visible: false,
      search_tabernacle: "",
      allTabernacle: [
        {
          id: 1,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 2,
          name: "Tabernacle de BOHICON",
        },

        {
          id: 3,
          name: "Tabernacle de GLO",
        },
        {
          id: 4,
          name: "Tabernacle de AGAME",
        },
        {
          id: 5,
          name: "Tabernacle de LOKOSSA",
        },
        {
          id: 6,
          name: "Tabernacle de TOUI",
        },
        {
          id: 7,
          name: "Tabernacle de KALALE",
        },
        {
          id: 8,
          name: "Tabernacle de AGLA",
        },
        {
          id: 9,
          name: "Tabernacle de AZOWLISSE",
        },
        {
          id: 10,
          name: "Tabernacle de HOUEGBO",
        },
        {
          id: 11,
          name: "Tabernacle de PARAKOU",
        },
        {
          id: 12,
          name: "Tabernacle de ZAGNANANDO",
        },
        {
          id: 13,
          name: "Tabernacle de DEME",
        },
        {
          id: 14,
          name: "Tabernacle de ADAKPLAME",
        },
        {
          id: 15,
          name: "Tabernacle de DANGBO",
        },
        {
          id: 16,
          name: "Tabernacle de OUIDAH",
        },
      ],
    };
  },

  computed: {
    filteredTabernacles() {
      return this.allTabernacle.filter((tabernacle) => {
        return tabernacle.name.match(this.search_tabernacle);
      });
    },
  },

  created() {},
};
</script>

<style>
/* **************************STYLE GENERALE************************************************** */
.bloc-tabernacle {
  /* display: inline-block;
  margin: 0px auto;
  width: 45%;
  border: 1px solid red;
  position: relative;
  margin: 1rem; */
  /* margin: 2rem; */
}
#tabernacles {
  background: #e1e7ff;
  /* box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4); */
  /* background: linear-gradient(#e1e7ff); */
}
.alltabernacle {
  margin-top: 50px;
  position: relative;
  width: 80%;
  margin: 0px auto !important;
  columns: 2;
  border: 1px solid orangered;
}
#info-tabernacle {
  background: #46005b;
  position: relative;
  width: 90%;
  padding: 0px !important;
  border-radius: 10px;
  margin-top: 0px !important;
  /* margin: 2rem; */
}

#info-tabernacle p {
  color: #f8a601;
}

#info-tabernacle span {
  color: white !important;
}

#info-tabernacle div:nth-child(2) {
  border-top: 1px solid #f8a601;
  border-bottom: 1px solid #f8a601;
  padding: 0.5rem 0rem;
}

.indication-div {
  display: flex;
}
.indication-div p:first-child {
  flex: 9;
  text-align: justify;
  padding: 0.5rem 0rem;
}

.indication-div p:last-child {
  padding: 0.5rem;
  margin-left: 0.5rem;
  flex: 1;
}
.tabernacle-name {
  font-size: 20px;
  font-weight: bold;
}

.tabernacle-button {
  /* border: 1px solid red; */
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #250030;
}

.tabernacle-button i {
  padding: 0.25rem;
  color: white;
  font-size: 25px;
}
.tabernacle-div {
  height: 80px;
  width: 90%;
  position: relative;
  display: flex;
  justify-content: space-between;
  /* display: inline-block !important; */
  padding: 0rem 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
  /* margin: 2rem; */
  text-align: center;
  border-radius: 10px;
  background-color: white;
}

/* body {
  background: #f8a601;
} */

.search-tabernacle-div {
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

.search-tabernacle-div input {
  width: 97%;
  position: relative;
  height: 115%;
  outline: none;
  border: none;
  background: white;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
  /* text-align: start; */
}
.search-tabernacle-div input::placeholder {
  font-weight: 100 !important;
}
.search-tabernacle-div span {
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
.search-tabernacle-div span i {
  font-size: 25px;
  /* border: 1px solid blue; */
  margin: 0px auto;
  position: relative;
  color: #f8a601;
}

/* ***************************************RESPONSIVITE***************************** */

@media screen and (max-width: 768px) {
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

  .alltabernacle {
    width: 100% !important;
    /* border: 1px solid orangered; */
    /* margin: 0px !important;
    padding: 0px !important; */
  }
  .tabernacle-div {
    height: 100px;
    width: 90% !important;
    /* border: 1px solid blue; */
    margin: 1rem !important;
    display: block;
  }

  .search-tabernacle-div {
    width: 90% !important;
    /* margin-top: 100px !important; */
    margin: 0px auto !important;
    /* border: 1px solid red; */
  }

  .search-tabernacle-div input {
    width: 95% !important;
  }

  .search-tabernacle-div span {
    width: 10% !important;
  }
  /* #tabernacles {
    margin: 0px !important;
    padding: 0px !important;
  } */
}
</style>
