<template>
  <div class="d-flex position-relative">
    <!-- Navigation component -->
    <div class="col-3 d-inline row">
      <AdminSideNavigation></AdminSideNavigation>
    </div>
    <!-- Content -->
    <div class="col-9 d-inline">
      <div class="container-fluid">
        <!-- Tool bar -->
        <div>
          <ul>
            <li>
              <input type="text" v-model="searchText" name="searchText" placeholder="Pretraži">
              <select :options="typeOptions" v-model="searchType">
                <option v-for="opt in typeOptions" v-bind:value="opt.value">
                  {{ opt.text }}
                </option>
              </select>
              <button @click="searchGallery">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </li>
            <li>Izbriši</li>
            <li>Dodaj</li>
          </ul>
        </div>
        <!-- Image grid :style="{backgroundImage: i.src}" -->
        <div class="d-flex flex-row flex-wrap w-100">
          <div v-for="i in images" :key="i.id" class="position-relative image-badge-wrapper">
            <div class="badge-background" style="background-color: #6c757d;" @click="showModal"></div>
            <div class="input-checkbox position-absolute">
              <!-- custom checkbox -->
              <checkbox :image-i-d="i.id"></checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Image info modal -->
    <b-modal id="modal-xl" title="Detalji" size="xl" ref="image-modal" hide-footer>
      <div class="d-flex flex-row main-modal-wrapper">
        <div class="col-8 img-display"></div>
        <div class="col-4 info-display">
          <ul>
            <li>Naziv: <span>Ime slike.jpg</span></li>
            <li>Tip: <span>JPG</span></li>
            <li>Veličina: <span>425kb</span></li>
            <li>Originalna veličina: <span>4.2MB</span></li>
            <li>Kompresija: <span>55%</span></li>
            <li>Aktivnost: <span>Slide show</span></li>
          </ul>
          <br>
          <ul>
            <li>
              <button>Izbriši</button>
            </li>
            <li>
              <button>Spremi promjene</button>
            </li>
          </ul>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import AdminSideNavigation from "../../components/AdminSideNavigation";
import Checkbox from "../../components/Checkbox";
export default {
  name: "gallery",
  components: {Checkbox, AdminSideNavigation},
  data () {
    return {
      // Images //
      images: [
        {id: 1, status: 'not_accepted'},
        {id: 2, status: 'not_accepted'},
        {id: 3, status: 'accepted'},
        {id: 4, status: 'not_accepted'},
        {id: 5, status: 'not_accepted'},
        {id: 6, status: 'accepted'},
        {id: 7, status: 'accepted'},
        {id: 8, status: 'not_accepted'},
        {id: 9, status: 'not_accepted'},
        {id: 10, status: 'not_accepted'},
        {id: 11, status: 'accepted'},
        {id: 12, status: 'not_accepted'}
      ],
      selectedImages: [],
      // Search //
      searchText: '',
      searchType: 0,
      typeOptions: [
        {text: 'Sve', value: 0},
        {text: 'Ime albuma', value: 1},
        {text: 'Slide show', value: 2},
        {text: 'Nije u upotrebi', value: 3}
      ]
    }
  },
  methods: {
    searchGallery() {},
    showModal() {
      this.$refs['image-modal'].show();
    },
    hideModal() {
      this.$refs['image-modal'].hide();
    }
  },
  computed: {
    getImage() {
      return;
    }
  }
}
</script>

<style scoped>
.image-badge-wrapper {
  width: 160px;
  height: 160px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  overflow: clip;
}
.badge-background {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.input-checkbox {
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  z-index: 10;
  background-color: #f7f7f7;
  border-bottom-left-radius: 3px;
  -moz-border-radius-bottomleft: 3px;
}
.main-modal-wrapper {
  height: 75vh;
}
.img-display, .info-display {
  height: 100%;
}
.img-display {
  background-color: #3b8070;
}
.info-display {
  background-color: #4f5678;
}
</style>
