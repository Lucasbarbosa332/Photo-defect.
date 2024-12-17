<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
    <template>
        <div id="app">
          <div class="photo-colle">
              <div class="photo-colle__title">
                <h1>L.B.DEV<a target="_blank" href="https://e-s.tw">FULL STACK</a><br>
                  Follow us on <a target="_blank" href="#">GitHub</a> <a target="_blank" href="#">Portifolio</a>
                </h1>
                <img src="https://res.cloudinary.com/dmzmxuujv/image/upload/v1722073404/CLICK_SCALE_GALLERY_wd82i1.png" alt="">
              </div>
              <div 
                  class="photo-colle__wrap"
                  ref="photoColleWrap"
              >
                  <section class="photo-colle__gallery"
                      v-for="(group, idx) in pageData"
                      :key="idx"
                  >
                      <div class="photo-colle__gallery-item"
                          v-for="item in group"
                          :key="item.id"
                      >
                          <figure @click="clickScrollToImgTop">
                              <video 
                                v-if="item.type"
                                preload autoplay="autoplay" loop="loop" playsinline="" muted="">
                                  <source :src="item.url" type="video/mp4">
                              </video>
                              <img v-else :src="item.url" >
                          </figure>
                      </div>
                  </section>
              </div>
          </div>
        </div>
      </template>
      
      <script setup>
        import { ref } from 'vue'
        const pageData = ref([
          [
            {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070570/jellyfish-6_n6cxdt.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1651668284843-f942213ffe96?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }, {
              url: 'https://images.unsplash.com/photo-1513569536235-bf46baacc948?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }, {
              url: 'https://images.unsplash.com/photo-1535408190508-be4c21946da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1515467437228-3b2db0d9502e?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }, {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070566/jellyfish-1_vk8lwh.mp4'
            }, {
              url: 'https://i0.wp.com/motherofcorals.org/wp-content/uploads/2022/01/david-clode-EknN2SI7X80-unsplash.jpg?resize=1200%2C1200&ssl=1'
            }, {
              url: 'https://images.unsplash.com/photo-1493839523149-2864fca44919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
            }, {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070579/jellyfish-4_eveef7.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1430631551618-8db1f56e2857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'
            }, {
              url: 'https://images.unsplash.com/photo-1437813865984-32f38e58daea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8'
            }
          ], 
          [
            {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070573/jellyfish-2_dy644o.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1530639063864-05276c8c452b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1543007168-5fa9b3c5f5fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1667597447113-04528c024461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1550638063-85180effb4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D'
            }, {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722073966/croal-1_qqotfu.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1501561942-ec1065e470aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1567784055803-b9d0a50d88e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDQyNDAwfHxlbnwwfHx8fHw%3D'
            }, {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070577/jellyfish-7_f8w9nn.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1583297016081-23a9753cd364?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }, {
              url: 'https://images.unsplash.com/photo-1582012446386-1682363c2f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8'
            }
          ],
          [
            {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070570/jellyfish-6_n6cxdt.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1651668284843-f942213ffe96?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }, {
              url: 'https://images.unsplash.com/photo-1513569536235-bf46baacc948?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }, {
              url: 'https://images.unsplash.com/photo-1535408190508-be4c21946da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1515467437228-3b2db0d9502e?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }, {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070566/jellyfish-1_vk8lwh.mp4'
            }, {
              url: 'https://i0.wp.com/motherofcorals.org/wp-content/uploads/2022/01/david-clode-EknN2SI7X80-unsplash.jpg?resize=1200%2C1200&ssl=1'
            }, {
              url: 'https://images.unsplash.com/photo-1493839523149-2864fca44919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
            }, {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070579/jellyfish-4_eveef7.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1430631551618-8db1f56e2857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'
            }, {
              url: 'https://images.unsplash.com/photo-1437813865984-32f38e58daea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8'
            }
          ], 
          [
            {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070573/jellyfish-2_dy644o.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1530639063864-05276c8c452b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1543007168-5fa9b3c5f5fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1667597447113-04528c024461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1550638063-85180effb4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D'
            }, {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722073966/croal-1_qqotfu.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1501561942-ec1065e470aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
            }, {
              url: 'https://images.unsplash.com/photo-1567784055803-b9d0a50d88e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDQyNDAwfHxlbnwwfHx8fHw%3D'
            }, {
              type: 'mp4',
              url: 'https://res.cloudinary.com/dmzmxuujv/video/upload/v1722070577/jellyfish-7_f8w9nn.mp4'
            }, {
              url: 'https://images.unsplash.com/photo-1583297016081-23a9753cd364?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }, {
              url: 'https://images.unsplash.com/photo-1582012446386-1682363c2f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8'
            }
          ],
        ])
        
        
        const photoColleWrap = ref()
        let scrollListener = null
        const clickScrollToImgTop = (e) => {
              const imgRect = e.target.getBoundingClientRect();
              const viewportHeight = window.innerHeight;
      
              const scaleValue = viewportHeight / imgRect.height * 0.96
      
              const centerOfImgPositionTop = window.scrollY + imgRect.top + imgRect.height / 2;
              const centerOfImgPositionLeft = imgRect.left + imgRect.width / 2;
      
              const winCenterX = window.innerWidth / 2;
              const winCenterY = window.innerHeight / 2;
      
              const orignY = centerOfImgPositionTop / photoColleWrap.value.clientHeight * 100;
              const orignX = centerOfImgPositionLeft / photoColleWrap.value.clientWidth * 100;
      
              // const moveX = imgRect.width * scaleValue
              const imgWinCenterY = (imgRect.top + imgRect.height / 2) - winCenterY;
              const imgWinCenterX = (imgRect.left + imgRect.width / 2) - winCenterX;
       
              // photoColleWrap.value.style.transform = `translate3d(${-imgWinCenterX}px, ${-imgWinCenterY}px, 0)`;
      
              photoColleWrap.value.style.left = `${-imgWinCenterX}px`;
              photoColleWrap.value.style.top = `${-imgWinCenterY}px`;
              photoColleWrap.value.style.transformOrigin = `${orignX}% ${orignY}%`;
              photoColleWrap.value.style.transform = `scale(${scaleValue})`;
      
      
              // 設定延遲以避免立即取消放大
              setTimeout(() => {
                  if (!scrollListener) {
                      scrollListener = true;  // 標記已添加監聽器
                      window.addEventListener('scroll', handleScroll);
                  }
              }, 300);
          }
        
        
          const handleScroll = () => {
              // console.log('close');
              photoColleWrap.value.style.left = `0px`;
              photoColleWrap.value.style.top = `0px`;
              photoColleWrap.value.style.transform = `scale(1)`;
              scrollListener = null;
          }
      </script>
      
      <style lang="scss">
        
      @mixin size($w, $h: $w) {
          width: $w;
          height: $h;
      }
        body {
          width: 100%;
          background: #000;
          color: #fff;
          
          a {
            color: #fff;
            text-decoration: none;
          }
        }
          .photo-colle {
            
            &__title {
              top: 40%;
              left: 50%;
              transform: translate(-50%, -50%);
              position: fixed;
              z-index: 90;
              mix-blend-mode: difference;
              
              > h1 {
                text-align: center;
                font-size: 14px;
                font-weight: 300;
                line-height: 1.4;
                
                a {
                  color: #FF00C7;
                }
              }
              
              img {
                width: auto;
                height: 100px;
                pointer-events: none;
                position: absolute;
                left: -50%;
              }
            }
      
              &__wrap {
                  left: 0;
                  top: 0;
                  min-height: 100vh;
                  transition: transform .6s, left .6s, top .6s;
                  transform-origin: 0 0;
                  position: relative;
              }
      
              &__gallery {
                  top: 0;
                  left: 0;
                  height: 1500px;
                  display: grid;
                  grid-template-columns: repeat(10, 1fr);
                  grid-template-rows: repeat(8, 1fr);
                  grid-column-gap: 10px;
                  grid-row-gap: 10px;
                  margin-bottom: 10px;
      
                  &-item {
                      figure {
                          width: 100%;
                          height: 100%;
                          position: relative;
                          overflow: hidden;
                          cursor: pointer;
                          margin: 0;
                          border: 1px solid #000;
                          transition: border-color .2s;
      
                          img, video {
                              width: 100%;
                              height: 100%;
                              position: absolute;
                              left: 0;
                              top: 0;
                              object-fit: cover;
                              transition: opacity .6s;
                              // opacity: 0;
                          }
                          &.is-inview {
                              img {
                                  opacity: 1;
                              }
                          }
                        
                        &:hover {
                          border-color: #FF00C7;
                        }
      
                      }
      
                      @for $i from 1 through 11 {
                          &:nth-child(11n + #{$i}) {
                              @for $i from 1 through 11 {
                                  &:nth-child(11n + #{$i}) {
                                      @if $i == 1 { grid-area: 1 / 1 / 5 / 5; }
                                      @else if $i == 2 { grid-area: 1 / 5 / 3 / 7; }
                                      @else if $i == 3 { grid-area: 1 / 7 / 3 / 9; }
                                      @else if $i == 4 { grid-area: 1 / 9 / 3 / 11; }
                                      @else if $i == 5 { grid-area: 3 / 5 / 5 / 7; }
                                      @else if $i == 6 { grid-area: 3 / 7 / 7 / 11; }
                                      @else if $i == 7 { grid-area: 5 / 1 / 7 / 3; }
                                      @else if $i == 8 { grid-area: 7 / 1 / 9 / 3; }
                                      @else if $i == 9 { grid-area: 5 / 3 / 9 / 7; }
                                      @else if $i == 10 { grid-area: 7 / 7 / 9 / 9; }
                                      @else if $i == 11 { grid-area: 7 / 9 / 9 / 11; }
                                  }
                              }
                          }
                      }
      
                  }
              }
      
          }
      </style>