<template>
  <div id="tabernacles">
    <Header></Header>
    <div class="main">
      <div class="search-tabernacle-div">
        <input
          type="search"
          name="search-tabernacle"
          id="search-tabernacle"
          placeholder="Rechercher un tabernacle"
        /><span><i class="fas fa-search"></i></span>
      </div>

      <section class="alltabernacle">
        <div
          v-for="tabernacle in allTabernacle"
          :key="tabernacle.id"
          class="tabernacle-div"
        >
          <div class="tabernacle">
            <p class="tabernacle-name">{{ tabernacle.name }}</p>
            <b-link
              class="lien-tabernacle"
              :to="{
                name: 'Tabernacle',
                params: {
                  id_tabernacle: tabernacle.id,
                },
              }"
              ><span><i class="fas fa-plus"></i></span
            ></b-link>
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
  name: "AllTabernacle",
  components: {
    Footer,
    Header,
  },

  data() {
    return {
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
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 4,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 5,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 6,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 7,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 8,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 9,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 10,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 11,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 12,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 13,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 14,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 15,
          name: "Tabernacle de GANKPODO",
        },
        {
          id: 16,
          name: "Tabernacle de GANKPODO",
        },
      ],
    };
  },
};
</script>

<style>
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

/* **************************************************************************** */
#tabernacles {
  background: #e1e7ff;
  /* box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4); */
  /* background: linear-gradient(#e1e7ff); */
}
.alltabernacle {
  margin-top: 50px;
  position: relative;
  width: 85%;
  margin: 0px auto;

  /* border: 1px solid orangered; */
}
.tabernacle-div {
  height: 100px;
  width: 45%;
  position: relative;
  /* border: 1px solid blue; */
  /* box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3); */
  margin: 2rem;
  display: inline-block;
  text-align: center;
  /* padding: 1rem 0rem; */
  border-radius: 10px;
  background-color: white;
}

.tabernacle {
  position: relative;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid lime; */
  margin: 0px auto;
}
.tabernacle-div p {
  font-weight: bold;
  color: #6d6d6d;
  font-size: 25px;
  margin: 0.5rem auto;
  display: inline-block;
}
.tabernacle-div span {
  display: inline-block;
  /* border: 1px solid red; */
  /* margin: 0rem 0.2rem; */
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
}

.tabernacle-div span i {
  padding: 0.5rem;
  font-size: 25px;
}

.lien-tabernacle {
  color: #6d6d6d !important;
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
</style>