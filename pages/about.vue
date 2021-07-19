<template>
  <div id="profile" class="wrapper">
    <div class="content">
      <div class="column-image fixed-column-left bg-atr">
        <div class="overlay overlay-light-dark">
          <div class="position-absolute bottom-block">
            <div class="column-title text-left">
              <h2 class="position-relative primary-color">{{ aboutMeTitle }}</h2><!-- ima before -->
              <div class="spacer-sm"></div>
              <h5>{{ aboutMeDesc }}</h5>
            </div>
            <div class="column-notifier secondary-background"></div>
          </div>
          <div class="fixed-column-dec position-absolute"></div>
        </div>
      </div>
      <div class="column-about primary-background">
        <transition name="slideLeft" mode="out-in">
          <div v-if="!showRewriter" :key="1" class="column-inner">
            <div class="scroll-nav-wrap secondary-background">
              <nav class="scroll-nav scroll-init"></nav>
            </div>
            <section id="sec1">
              <div class="container small-container">
                <div class="section-title">
                  <h3>{{ myStoryTitle }}</h3>
                  <h5>{{ myStoryDesc }}</h5>
                  <div class="section-number">01.</div><!-- ima before -->
                </div>
                <div class="column-wrapper-item">
                  <div class="column-wrapper-text text-justify primary-color">
                    <p>{{ myStory }}</p>
                  </div>
                  <div class="block-btn-holder">
                    <a class="position-relative primary-color" @click="handleRewriter">Rewrite your story<span></span></a>
                  </div>
                </div>
              </div>
            </section>
            <div class="sec-dec"></div>
            <section id="sec2">
              <div class="container small-container">
                <div class="section-title fl-wrap">
                  <h3>My Treasury</h3>
                  <h5>{{ myStoryDesc }}</h5>
                  <div class="section-number">02.</div><!-- ima before -->
                </div>
                <div class="column-wrapper-item">
                  <div class="column-wrapper-albums">
                    <div class="col-sm-6 col-display">
                      <div class="column-inner">
                      </div>
                    </div>
                    <div class="col-sm-6 col-display pl-4 pr-4">
                      <div class="column-inner">
                        <div class="album-list-wrapper">
                          <div class="album-cover">
                            <!-- <img class="image-cover" src="" alt=""> -->
                            <div class="image-blank"></div>
                            <div class="album-cover-overlay"><p>Complete album</p></div>
                          </div>
                          <div class="album-cover">
                            <!-- <img class="image-cover" src="" alt=""> -->
                            <div class="image-blank"></div>
                            <div class="album-cover-overlay"><p>Complete album</p></div>
                          </div>
                          <div class="album-cover">
                            <!-- <img class="image-cover" src="" alt=""> -->
                            <div class="image-blank"></div>
                            <div class="album-cover-overlay"><p>Complete album</p></div>
                          </div>
                          <div class="album-cover">
                            <!-- <img class="image-cover" src="" alt=""> -->
                            <div class="image-blank"></div>
                            <div class="album-cover-overlay"><p>Complete album</p></div>
                          </div>
                          <div class="album-cover">
                            <!-- <img class="image-cover" src="" alt=""> -->
                            <div class="image-blank"></div>
                            <div class="album-cover-overlay"><p>Complete album</p></div>
                          </div>
                          <div class="album-cover">
                            <!-- <img class="image-cover" src="" alt=""> -->
                            <div class="image-blank"></div>
                            <div class="album-cover-overlay"><p>Complete album</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="block-btn-holder">
                    <router-link to="Portfolio" class="position-relative primary-color overflow-hidden" style="margin-right: 15px;">My Portfolio<span></span></router-link>
                    <router-link to="Portfolio" class="position-relative primary-color overflow-hidden">Add New Stuff<span></span></router-link>
                  </div>
                </div>
              </div>
            </section>
            <div class="sec-dec"></div>
            <div class="end-line-dec"></div>
            <div class="back-to-top-btn text-right">
              <button class="position-relative primary-color">Back to top<span></span></button>
            </div>
          </div>
          <div v-else :key="2" id="story-rewriter" class="column-inner primary-background" style="height: calc(100vh - 250px);">
            <div class="flip-card">
              <div id="flip-card-inner" class="flip-card-inner">
                <div class="flip-card-front">
                  <form @submit="saveMyStory" class="form-b15">
                    <label for="desc" class="label-flex">
                      <h6>Description:</h6>
                      <span class="input-wrapper position-relative">
                             <input id="desc" v-model="aboutMeDesc" type="text" placeholder="Some small text">
                              <span class="input-border-b"></span>
                          </span>
                    </label>
                    <label for="subtitle" class="label-flex">
                      <h6>Subtitle:</h6>
                      <span class="input-wrapper position-relative">
                              <input id="subtitle" v-model="myStoryDesc" type="text" placeholder="Some little description">
                          <span class="input-border-b"></span>
                          </span>
                    </label>
                    <label for="story" style="height: 80%;">
                      <h6>Your story:</h6>
                      <span class="position-relative" style="height: 90%;">
                              <textarea rows="10" id="story" v-model="myStory" placeholder="Place for your story" style="height: 100%;"></textarea>
                              <span class="input-border-b"></span>
                          </span>
                    </label>

                  </form>
                </div>
                <div class="flip-card-back">
                  <form @submit="" class="form-b15 ">
                    <div style="width: 100%; height: 270px; padding: 12px 0;">
                      <div class="col-5">
                        <div id="upload-form-one" class="box advance-upload box-sm one-img-box" @dragenter="handleDragEnter('one')" @dragleave="handleDragLeave('one')" @drop="handleDropFiles($event, 'one')">
                          <div v-if="defaultViewP" class="box-input">
                            <svg xmlns="http://www.w3.org/2000/svg" class="box-icon" width="16" height="16" fill="rgb(255, 255, 255)" viewBox="0 0 16 16">
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                            <input id="file-profile" type="file" name="files[]" @change="selectImage($event, 'profile')"  accept="image/jpg" data-multiple-caption="{count} files selected" style="display: none;" ref="profileImg">
                            <label for="file-profile"><strong>Choose a file </strong><span>or drag it here</span>.</label>
                            <button type="submit" class="box-button">Upload</button>
                          </div>
                          <div v-if="uploadingP" class="box-uploading">
                            <p class="primary-color">Uploading...</p>
                          </div>
                          <div v-if="previewP" class="box-preview">
                            <div class="box-image-wrapper">
                              <div class="image-inner-wrapper">
                                <div class="box-image-preview" :style="{backgroundImage: 'url(' + profileImage.photo + ')'}"></div>
                                <span class="image-delete"> <!-- $refs.coverImg.click -->
                                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 255, 255)" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                                                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                                                  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                                              </svg>
                                                          </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-7" style="padding: 0 20px;">
                        <div class="section-title">
                          <h3>Profile Image</h3>
                          <div class="section-number">01.</div>
                        </div>
                        <div class="column-wrapper-text text-left">
                          <div class="inner-section">
                            <div>
                              <h6 class="inline mr-3">Name: </h6>
                              <p class="inline">{{profileImage.name}}</p>
                            </div>
                            <div>
                              <h6 class="inline mr-3">Type: </h6>
                              <p class="inline">{{profileImage.type}}</p>
                            </div>
                            <div>
                              <h6 class="inline mr-3">Size: </h6>
                              <p class="inline">{{profileImage.size}} bit</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style="width: 100%; height: 270px; padding: 12px 0;">
                      <div class="col-5">
                        <div id="upload-form-2" class="box advance-upload box-sm one-img-box" @dragenter="handleDragEnter($event, 'two')" @dragleave="handleDragLeave('two')" @drop="handleDropFiles($event, 'two')">
                          <div v-if="defaultViewC" class="box-input">
                            <svg xmlns="http://www.w3.org/2000/svg" class="box-icon" width="16" height="16" fill="rgb(255, 255, 255)" viewBox="0 0 16 16">
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                            <input id="file-cover" type="file" name="files[]" @change="selectImage($event, 'cover')"  accept="image/jpg" data-multiple-caption="{count} files selected" style="display: none;" ref="coverImg">
                            <label for="file-cover"><strong>Choose a file </strong><span>or drag it here</span>.</label>
                            <button type="submit" class="box-button">Upload</button>
                          </div>
                          <div v-if="uploadingC" class="box-uploading">
                            <p class="primary-color">Uploading...</p>
                          </div>
                          <div v-if="previewC" class="box-preview">
                            <div class="box-image-wrapper">
                              <div class="image-inner-wrapper">
                                <div class="box-image-preview" :style="{backgroundImage: 'url(' + coverImage.photo + ')'}"></div>
                                <span class="image-delete"> <!-- $refs.coverImg.click -->
                                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 255, 255)" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                                                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                                                  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                                              </svg>
                                                          </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-7" style="padding: 0 20px;">
                        <div class="section-title">
                          <h3>Cover Image</h3>
                          <div class="section-number">02.</div>
                        </div>
                        <div class="column-wrapper-text text-left">
                          <div class="inner-section">
                            <div>
                              <h6 class="inline mr-3">Name: </h6>
                              <p class="inline">{{coverImage.name}}</p>
                            </div>
                            <div>
                              <h6 class="inline mr-3">Type: </h6>
                              <p class="inline">{{coverImage.type}}</p>
                            </div>
                            <div>
                              <h6 class="inline mr-3">Size: </h6>
                              <p class="inline">{{coverImage.size}} bit</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="position-absolute" style="bottom: 0; left: 0; width: 100%;">
              <div class="block-btn-holder" style="margin-bottom: 0!important; border-top: 1px solid #eee; padding-top: 20px;">
                <div class="col-sm-6">
                  <a class="position-relative primary-color overflow-hidden" type="submit" style="margin-right: 15px;">Save<span></span></a>
                  <a class="position-relative primary-color overflow-hidden" @click="cancelStoryRewrite">Cancel<span></span></a>
                </div>
                <div class="col-sm-6 text-right">
                  <a class="position-relative primary-color" @click="handleRewriterTabs">Change profile of cover image<span></span></a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'about',
  data () {
    return {
      showRewriter: false,
      toggleRewriterTabs: true,
      uploadingP: false,
      defaultViewP: true,
      previewP: false,
      uploadingC: false,
      defaultViewC: true,
      previewC: false,
      profileImage: {},
      coverImage: {},
      aboutMeTitle: 'About me',
      aboutMeDesc: 'This is something about me. Some stupid text. Dumy text. Yes!!',
      myStoryTitle: 'My little story',
      myStoryDesc: 'Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa',
      myStory: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      tempData: {
        desc: '',
        storyDesc: '',
        story: ''
      },
      uploadFormOne: {},
      uploadFormTwo: {},
      flipCardInnerEl: ''
    }
  },
  methods: {
    // TEXT
    saveMyStory () {
      this.myStoryDesc = this.tempData.storyDesc;
      this.myStory = this.tempData.story;
      this.aboutMeDesc = this.tempData.desc;
      this.cancelStoryRewrite();
    },
    cancelStoryRewrite () {
      this.tempData.desc = '';
      this.tempData.storyDesc = '';
      this.tempData.story = '';
      this.showRewriter = !this.showRewriter;
    },
    // IMAGES
    selectImage (e, type) {
      e.preventDefault();
      if (type === 'profile') {
        this.defaultViewP = false;
        this.uploadingP = true;
        this.uploadFormOne.classList.remove('file-over');
      }
      else {
        this.defaultViewC = false;
        this.uploadingC = true;
        this.uploadFormTwo.classList.remove('file-over');
      }
      let name = null;
      let url = null;
      let file = null;
      let self = this;
      let reader = new FileReader();
      let value = e.target.files[0];
      file = new Blob([value]);
      let s = file.size;
      let t = value.type;
      console.log('type: ', t);
      reader.readAsDataURL(file);
      reader.onload = function () {
        file = reader.result;
        name = value.name.split('.');
        url = URL.createObjectURL(value);
        if (type === 'profile') self.profileImage = {name: name[0], fullName: name, photo: url, file: file, size: s, type: name[1]};
        else    self.coverImage = {name: name[0], fullName: name, photo: url, file: file, size: s, type: name[1]};
      }
      if (type === 'profile') {
        this.uploadingP = false;
        this.previewP = true;
      }
      else {
        this.uploadingC = false;
        this.previewC = true;
      }
      console.log('preview: ', this.coverImage);
    },
    handleDropFiles (e, box) {
      e.preventDefault();
      console.log('e: ', e, box);
    },
    handleDragEnter (box) {
      if (box === 'one')    this.uploadFormOne.classList.add('file-over');
      else  this.uploadFormTwo.classList.add('file-over');
    },
    handleDragLeave (box) {
      if (box === 'one')    this.uploadFormOne.classList.remove('file-over');
      else  this.uploadFormTwo.classList.remove('file-over');
    },
    handleRewriter () {
      this.showRewriter = !this.showRewriter;
      if (this.showRewriter && this.flipCardInnerEl === '') {
        console.log('#1');
        this.selectElementsFromHTML();
      }
    },
    selectElementsFromHTML () {
      console.log('here');
      this.flipCardInnerEl = document.querySelector('#flip-card-inner');
      this.uploadFormOne = document.querySelector('#upload-form-one');
      this.uploadFormTwo = document.querySelector('#upload-form-2');
      console.log('el: ', this.flipCardInnerEl, this.uploadFormOne, this.uploadFormTwo);
      if (this.uploadFormTwo === null) {
        setTimeout(() => {
          this.selectElementsFromHTML();
        }, 800)
      }
    },
    handleRewriterTabs () {
      if (this.toggleRewriterTabs)  this.flipCardInnerEl.style.transform = 'rotateY(180deg)';
      else  this.flipCardInnerEl.style.transform = 'rotateY(0deg)';
      this.toggleRewriterTabs = !this.toggleRewriterTabs;
    },
    isObjectEmpty (obj) {
      console.log('#1');
      return Object.keys(obj).length === 0 && obj.constructor === Object
    }
  }
}
</script>

<style>
.wrapper{
  width: 100%;
  padding-top: 80px;
  position: relative;
  display: flex;
  flex-direction: row;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
}
.fixed-column-left {
  float: left;
  width: 45%;
  height: calc(100% - 80px);
  position: fixed;
  z-index: 3;
}
.column-image {
  background-image: url("../static/temp/profile_01.jpg");
  padding: 50px;
}
.column-about {
  float:right;
  width:55%;
  position: relative;
  padding:80px 60px 90px;
  z-index:3;
}
.column-about section {
  margin-top: 80px;
}
.column-inner {
  width: 100%;
  height: auto;
  position: relative;
  display: grid;
}
.column-hidden .column-inner {
  padding: 80px 0;
}
.fixed-column-dec {
  top: 50px;
  right: 50px;
  width: 70px;
  height: 70px;
  border-top: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
}
.bg-atr {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.bottom-block {
  bottom: 0;
  left: 0;
  width: 100%;
}
.column-title {
  padding: 35px 0 80px 35px;
}
.column-title h2:before {
  content: '';
  position: absolute;
  left: 0;
  top: -35px;
  width: 40px;
  height: 2px;
  background: #fff;
}
.column-notifier {
  height: 90px;
  display: block;
  width: 50%;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.overlay-light-dark {
  background-color: rgba(0, 0, 0, .3821);
}
.section-title {
  width:100%;
  position:relative;
  padding-bottom: 10px;
  margin-bottom:15px;
  border-bottom:1px solid #eee;
  text-align: left;
}
.section-title h3 {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 700;
  width: 100%;
  padding-bottom:15px;
  color: #ffffff;
}
.section-number {
  position:absolute;
  top:12px;
  right:0;
  font-size:18px;
  font-weight:700;
  color:#999;
}
.section-number:before {
  content:'';
  position:absolute;
  left:-40px;
  width:15px;
  height:2px;
  background:#3d3d3d;
  top:50%;
  margin-top:-1px;
}
.column-wrapper-text {
  margin-bottom: 40px;
}
.column-wrapper-text p {
  line-height: 24px;
  letter-spacing: 1px;
  color: #ffffff;
}
.inline {
  display: inline-block;
}
.block-btn-holder, .back-to-top-btn {
  padding: 15px 10px;
  margin-bottom: 100px;
  text-align: left;
}
div.block-btn-holder .col-sm-6 {
  width: 50%;
  max-width: 50%;
  display: inline-block;
}
.block-btn-holder a, .block-btn-holder button, .back-to-top-btn button, .block-btn-holder .col-sm-6 a {
  padding: 12px 40px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #0E0E0E;
  text-decoration: none;
  border: none;
  overflow: hidden;
  transition: 100ms ease-out;
  transition-delay: 250ms;
  cursor: pointer;
}
.block-btn-holder a span, .block-btn-holder button span, .back-to-top-btn button span, .block-btn-holder .col-sm-6 a span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #0E0E0E;
  animation-direction: normal;
  animation-duration: 1800ms;
  z-index: 1;
}
.block-btn-holder a:before, .block-btn-holder button:before, .back-to-top-btn button:before, .block-btn-holder .col-sm-6 a:before {
  content: "\2192";
  position: absolute;
  top: 29%;
  right: 10px;
  font-size: 13px;
  color: inherit;
  transition: 300ms ease-out;
}
.back-to-top-btn button:before {
  content: "\2191" !important;
}
.block-btn-holder a:hover, .block-btn-holder button:hover, .back-to-top-btn button:hover, .block-btn-holder .col-sm-6 a:hover {
  color: #999999;
}
.block-btn-holder a:hover span, .block-btn-holder button:hover span, .back-to-top-btn button:hover span, .block-btn-holder .col-sm-6 a:hover span {
  animation-name: wide-cut;
}
@keyframes wide-cut {
  0% {width: 1%}
  50% {width: 100%}
  100% {transform: translateX(120%)}
}
.end-line-dec {
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background-color: #3d3d3d;
}
.slideLeft-enter-active, .slideLeft-leave-active {
  transition: all 500ms ease-out;
}
.slideLeft-enter, .slideLeft-leave-to {
  opacity: 0;
  -webkit-transform: translateX(750px);
  -moz-transform: translateX(750px);
  -ms-transform: translateX(750px);
  -o-transform: translateX(750px);
  transform: translateX(750px);

}
.slideLeft-enter-to, .slideLeft-leave {
  opacity: 1;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
}

/*****************  ALBUMS  **************************/
.album-list-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
}
.album-cover {
  position: relative;
  width: 235px;
  height: 235px;
  margin-bottom: 12px;
}
.album-cover-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .529);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}
.image-blank, .image-cover {
  background-color: #3d3d3d;
  display: block;
  width: 100%;
  height: 100%;
}
.album-cover-overlay p {
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-transform: uppercase;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.album-cover:hover .album-cover-overlay {
  height: 100%;
}
/*****************  FLIP-CARDS  **************************/
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: rgb(22, 22, 22);
}
.flip-card-back {
  background-color: rgb(22, 22, 22);
  transform: rotateY(180deg);
}
</style>
