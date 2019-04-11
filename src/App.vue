<template>
 <div class="display">
   <div class="left-bar">
     <div class="logo">
       <img src="./assets/img/logo.jpg" >
     </div>
     <div class="icons-back">
       <div class="icon">
         <i class="fa fa-home" ></i>
         <font-awesome-icon icon="home" />
       </div>
       <div class="icon">
         <i class="fa fa-sign-in"></i>
       </div>
       <div class="icon">
           <font-awesome-icon icon="tv" />
       </div>
       <div class="icon">
            <font-awesome-icon icon="th" />
       </div>
       <div class="icon">
          <font-awesome-icon icon="music" />
       </div>
       <div class="icon">
                 <font-awesome-icon icon="music" />
       </div>
       <div class="icon">
               <font-awesome-icon icon="file" />
       </div>
       <div class="icon">

          <font-awesome-icon icon="tablet" />
       </div>
       <div class="icon">
          <font-awesome-icon icon="music" />
       </div>
       <div class="icon">
            <font-awesome-icon icon="heart" />
       </div>
       <div class="icon">
         <font-awesome-icon icon="file" />
       </div>
     </div>
   </div>
     <div class="right-side">
       <div class="header">
         <div class="container">
           <div class="row">
             <div class="col-sm-3 header-display">
               <div class="hamberger whiteColor">
                 <font-awesome-icon icon="bars" />
               </div>
             </div>
             <div class="col-sm-6 header-display-2">
               <div class="search-div whiteColor">
                        <font-awesome-icon icon="search" />
               </div>
               <div class="music whiteColor">
                   <font-awesome-icon icon="backward" />
                   <font-awesome-icon icon="play" />
                   <font-awesome-icon icon="forward" />
                 <input type="range" min="1" max="100" value="1" class="slider">
               </div>
               <div class="volume">
                 <font-awesome-icon icon="volume-up" />
                 <i class="fa fa-volume-up" ></i>
                 <input type="range" min="1" max="100" value="1" class="slider">
               </div>
             </div>
             <div class="col-sm-3 header-display-3">
               <div class="login-btn">
                 <p>LOGIN</p>
                 <i class="fa fa-chevron-right" ></i>
               </div>
               <div class="signin-icon">
                   <i class="fa fa-sign-in"></i>
                 </div>
             </div>
           </div>
         </div>
       </div>
       <div class="container-fluid">
         <div class="row">
           <div class="col-sm-8" id="banner-slider">

               <div id="myCarousel" class="carousel slide" data-ride="carousel">
                   <!-- Wrapper for slides -->
                   <div class="carousel-inner">
                     <div class="item active">
                         <div class="banner">
                             <div class="col-sm-6 banner-inner">
                               <div class="trending">
                                 <p>TRENDING</p>
                               </div>
                               <div class="banner-content">
                                 <h1>LET YOUR HOME</h1>
                                 <p>Album by <span>Rock star</span></p>
                               </div>
                             </div>
                           </div>
                     </div>

                     <div class="item">
                         <div class="banner">
                             <div class="col-sm-6 banner-inner">
                               <div class="trending">
                                 <p>TRENDING</p>
                               </div>
                               <div class="banner-content">
                                 <h1>LET YOUR HOME</h1>
                                 <p>Album by <span>Rock star</span></p>
                               </div>
                             </div>
                           </div>
                     </div>

                     <div class="item">
                         <div class="banner">
                             <div class="col-sm-6 banner-inner">
                               <div class="trending">
                                 <p>TRENDING</p>
                               </div>
                               <div class="banner-content">
                                 <h1>LET YOUR HOME</h1>
                                 <p>Album by <span>Rock star</span></p>
                               </div>
                             </div>
                           </div>
                     </div>
                   </div>
                 </div>
                 <div class="indicators-div">
                   <!-- Indicators -->
                   <ol class="carousel-indicat">
                       <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                       <li data-target="#myCarousel" data-slide-to="1"></li>
                       <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                 </div>
                 <div class="row new-releases-head">
                   <div class="col-sm-6 header-display">
                     <h1>New Releases</h1>
                     <div class="new-btn"><p>New</p></div>
                   </div>
                   <div class="col-sm-6 see-all">
                       <a href="">See all</a>
                     </div>
                 </div>
                 <div class=" row new-releases">
                   <div class="col-sm-3 card-display">
                     <div>
                         <img src="Assets/song1.jpeg" alt="">
                     </div>
                     <p>LISTEN NOW</p>
                   </div>
                   <div class="col-sm-3 card-display">
                       <div>
                           <img src="Assets/song2.jpeg" alt="">
                       </div>
                       <p>LISTEN NOW</p>
                     </div>
                     <div class="col-sm-3 card-display">
                         <div>
                             <img src="Assets/song1.jpeg" alt="">
                         </div>
                         <p>LISTEN NOW</p>
                       </div>
                     <div class="col-sm-3 card-display">
                         <div>
                             <img src="Assets/song2.jpeg" alt="">
                         </div>
                         <p>LISTEN NOW</p>
                       </div>
                       <div class="col-sm-3 card-display">
                           <div>
                               <img src="Assets/song1.jpeg" alt="">
                           </div>
                           <p>LISTEN NOW</p>
                         </div>
                       <div class="col-sm-3 card-display">
                           <div>
                               <img src="Assets/song2.jpeg" alt="">
                           </div>
                           <p>LISTEN NOW</p>
                         </div>
                         <div class="col-sm-3 card-display">
                             <div>
                                 <img src="Assets/song1.jpeg" alt="">
                             </div>
                             <p>LISTEN NOW</p>
                           </div>
                         <div class="col-sm-3 card-display">
                             <div>
                                 <img src="Assets/song2.jpeg" alt="">
                             </div>
                             <p>LISTEN NOW</p>
                           </div>
                 </div>
           </div>
           <div class="col-sm-4 video-panal">
             <div class="video-div">
               <iframe width=100% height=100% src="https://www.youtube.com/embed/gv9hrQzU0cA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
             <div class="songs-div">
               <ul class="songs-name">
                 <li>1. Ellie-Goulding</li>
                 <li>2. Ellie-Goulding</li>
                 <li>3. Ellie-Goulding</li>
                 <li>4. Ellie-Goulding</li>
                 <li>5. Ellie-Goulding</li>
                 <li>6. Ellie-Goulding</li>
                 <li>7. Ellie-Goulding</li>
               </ul>
             </div>
             <div class="music-div">
               <h1>Mosaic now availabla</h1>
             </div>
               <div class="music-name-div">
                 <ul class="music-name">
                   <li>1. Ellie-Goulding</li>
                   <li>2. Ellie-Goulding</li>
                   <li>3. Ellie-Goulding</li>
                   <li>4. Ellie-Goulding</li>
                   <li>5. Ellie-Goulding</li>
                   <li>6. Ellie-Goulding</li>
                   <li>7. Ellie-Goulding</li>
                 </ul>
               </div>
           </div>
         </div>
       </div>
     </div>
 </div>
</template>


<script>

export default {
  name: "App",
  components: {
  },
  data() {

    },
  methods: {

    }
};
</script>





<style scoped>
@import "/src/assets/css/space.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
