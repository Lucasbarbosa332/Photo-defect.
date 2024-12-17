const { ref, openBlock, createElementBlock, createElementVNode, Fragment, renderList, createStaticVNode } = Vue;

const _hoisted_1 = { id: "app" };
const _hoisted_2 = { class: "photo-colle" };
const _hoisted_3 = /*#__PURE__*/createStaticVNode("<div class=\"photo-colle__title\"><h1>Made By <a target=\"_blank\" href=\"https://e-s.tw\">ES Design</a><br> Follow us on <a target=\"_blank\" href=\"https://www.instagram.com/esdesigntpe/\">Instagram</a> <a target=\"_blank\" href=\"https://www.threads.net/@esdesigntpe\">Threads</a></h1><img src=\"https://res.cloudinary.com/dmzmxuujv/image/upload/v1722073404/CLICK_SCALE_GALLERY_wd82i1.png\" alt=\"\"></div>", 1);
const _hoisted_4 = {
  key: 0,
  preload: "",
  autoplay: "autoplay",
  loop: "loop",
  playsinline: "",
  muted: ""
};
const _hoisted_5 = ["src"];
const _hoisted_6 = ["src"];
  
var script = {
  setup(__props) {

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
  ]);
  
  
  const photoColleWrap = ref();
  let scrollListener = null;
  const clickScrollToImgTop = (e) => {
        const imgRect = e.target.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const scaleValue = viewportHeight / imgRect.height * 0.96;

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
    };
  
  
    const handleScroll = () => {
        // console.log('close');
        photoColleWrap.value.style.left = `0px`;
        photoColleWrap.value.style.top = `0px`;
        photoColleWrap.value.style.transform = `scale(1)`;
        scrollListener = null;
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      createElementVNode("div", {
        class: "photo-colle__wrap",
        ref: (_value, _refs) => {
          _refs['photoColleWrap'] = _value;
          photoColleWrap.value = _value;
        }
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(pageData.value, (group, idx) => {
          return (openBlock(), createElementBlock("section", {
            class: "photo-colle__gallery",
            key: idx
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(group, (item) => {
              return (openBlock(), createElementBlock("div", {
                class: "photo-colle__gallery-item",
                key: item.id
              }, [
                createElementVNode("figure", { onClick: clickScrollToImgTop }, [
                  (item.type)
                    ? (openBlock(), createElementBlock("video", _hoisted_4, [
                        createElementVNode("source", {
                          src: item.url,
                          type: "video/mp4"
                        }, null, 8 /* PROPS */, _hoisted_5)
                      ]))
                    : (openBlock(), createElementBlock("img", {
                        key: 1,
                        src: item.url
                      }, null, 8 /* PROPS */, _hoisted_6))
                ])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 512 /* NEED_PATCH */)
    ])
  ]))
}
}

};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "body {\n  width: 100%;\n  background: #000;\n  color: #fff;\n}\nbody a {\n  color: #fff;\n  text-decoration: none;\n}\n.photo-colle__title {\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  z-index: 90;\n  mix-blend-mode: difference;\n}\n.photo-colle__title > h1 {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n.photo-colle__title > h1 a {\n  color: #FF00C7;\n}\n.photo-colle__title img {\n  width: auto;\n  height: 100px;\n  pointer-events: none;\n  position: absolute;\n  left: -50%;\n}\n.photo-colle__wrap {\n  left: 0;\n  top: 0;\n  min-height: 100vh;\n  transition: transform 0.6s, left 0.6s, top 0.6s;\n  transform-origin: 0 0;\n  position: relative;\n}\n.photo-colle__gallery {\n  top: 0;\n  left: 0;\n  height: 1500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n  margin-bottom: 10px;\n}\n.photo-colle__gallery-item figure {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  margin: 0;\n  border: 1px solid #000;\n  transition: border-color 0.2s;\n}\n.photo-colle__gallery-item figure img, .photo-colle__gallery-item figure video {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  object-fit: cover;\n  transition: opacity 0.6s;\n}\n.photo-colle__gallery-item figure.is-inview img {\n  opacity: 1;\n}\n.photo-colle__gallery-item figure:hover {\n  border-color: #FF00C7;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+1):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+2):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+3):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+4):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+5):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+6):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+7):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+8):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+9):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+10):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+1) {\n  grid-area: 1/1/5/5;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+2) {\n  grid-area: 1/5/3/7;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+3) {\n  grid-area: 1/7/3/9;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+4) {\n  grid-area: 1/9/3/11;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+5) {\n  grid-area: 3/5/5/7;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+6) {\n  grid-area: 3/7/7/11;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+7) {\n  grid-area: 5/1/7/3;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+8) {\n  grid-area: 7/1/9/3;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+9) {\n  grid-area: 5/3/9/7;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+10) {\n  grid-area: 7/7/9/9;\n}\n.photo-colle__gallery-item:nth-child(11n+11):nth-child(11n+11) {\n  grid-area: 7/9/9/11;\n}";
styleInject(css_248z);

script.__file = "tmp/codepen/vuejs/src/pen.vue";

export { script as default };