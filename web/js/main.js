(() => {
  let audio = document.querySelector('audio'),
      playButton = document.querySelector('.controls button');
      typeAnim = gsap.timeline({paused: true});

      typeAnim.to("#but1",{ opacity:1, duration: 0.1})
               .to("#no", { opacity:1, duration: 0.2})
               .to("#matter", { opacity:1, duration: 0.3})
               .to("#what", { opacity:1, duration: 0.35})
               .to("#you1", { opacity:1, duration: 0.4})
               .to("#do", { opacity:1, duration: 0.45})
               .to("#that", { opacity:1, duration: 0.3})
               .to("#seed", { opacity:1, duration: 0.2})
               .to("#type_layout", {  opacity:1, duration: 0.3, rotate:-90, scaleX:1.5, scaleY:1.5, x: -225, y: -600}, "<")
               .to("#will", { opacity:1, duration: 0.2})
               .to("#type_layout", {  opacity:1, duration: 0.4, rotate:0, scaleX:1.5, scaleY:1.5, x: -39, y: 400})
               .to("#grow", { opacity:1, duration: 0.3})
               .to("#toBe", { opacity:1, duration: 0.3})
               .to("#a", { opacity:1, duration: 0.3})
               .to(".peach1", { opacity:1, duration: 0.4})
               .to("#tree", { opacity:1, duration: 0.5})
               .to(".peach1", { opacity:0, duration: 0.1})
                .to("#type_layout", {  opacity:1, duration: 0.4, rotate:360, scaleX:1.5, scaleY:1.5, x: -39, y: -75})
               .to("#you2", { opacity:1, duration: 0.3})
               .to("#may", { opacity:1, duration: 0.3})
               .to("#wish", { opacity:1, duration: 0.3})
               .to("#for", { opacity:1, duration: 0.3})
               .to("#an", { opacity:1, duration: 0.3})
               .to(".apple", { opacity:1, duration: 0.4})
               .to("#or", { opacity:1, duration: 0.2})
               .to(".orange", { opacity:1, duration: 0.4})
               .to(".apple", { opacity:0, duration: 0.2})
               .to(".orange", { opacity:0, duration: 0.2})
               .to("#type_layout", {  opacity:1, duration: 0.4, rotate:0, scaleX:1.5, scaleY:1.5, x: 650, y: -480})
               .to("#but2", { opacity:1, duration: 0.2})
               .to("#you3", { opacity:1, duration: 0.2})
               .to("#but2", { opacity:0, duration: 0.1})
               .to("#type_layout", {  opacity:1, duration: 0.3, rotate:-90, scaleX:1.5, scaleY:1.5, x: -680, y: -700},"<")
               .to("#will1", { opacity:1, duration: 0.2})
                .to("#type_layout", {  opacity:1, duration: 0.3, rotate:0, scaleX:1.5, scaleY:1.5, x: 300, y: -580},"<")
               .to("#get", { opacity:1, duration: 0.2})
               .to("#a2", { opacity:1, duration: 0.2})
               .to(".peach2", { opacity:1, duration: 0.7})
               .to("#peach", { opacity:1, duration: 0.6})
               .to("#cannot", { opacity:1, duration: 0.5})
               .to("#defeat", { opacity:1, duration: 0.3})
               .to(".peach2", { opacity:0, duration: 0.1})
               .to("#tai", { opacity:1, duration: 0.5})
               .to("#type_layout", {  opacity:1, duration: 0.3, rotate:0, scaleX:1.5, scaleY:1.5, x: -100, y: -580},"<")
               .to("#lung", { opacity:1, duration: 0.7})
               .to("#maybe", { opacity:1, duration: 0.9})
               .to("#type_layout", {  opacity:1, duration: 0.7, rotate:-90, scaleX:1.5, scaleY:1.5, x: -450, y: 100},"<")
                .to("#it1", { opacity:1, duration: 0.6})
                .to("#type_layout", {  opacity:1, duration: 0.3, rotate:0, scaleX:2.5, scaleY:2.5, x: -655, y: -300},"<")
                .to("#can", { opacity:1, duration: 1.4})
                .to("#if", { opacity:1, duration: 0.9})
                .to("#you4", { opacity:1, duration: 0.4})
                .to("#are", { opacity:1, duration: 0.4})
                .to("#willing", { opacity:1, duration: 0.3})
                .to("#lung", { opacity:0, duration: 0.1})
                .to("#type_layout", {  opacity:1, duration: 0.2, rotate:0, scaleX:1.7, scaleY:1.7, x: -655, y: -300},"<")
                .to("#to", { opacity:1, duration: 0.2})
                .to("#guide", { opacity:1, duration: 0.8})
                .to("#it2", { opacity:1, duration: 0.4})
                .to("#nurture", { opacity:1, duration: 0.8})
                .to("#it3", { opacity:1, duration: 0.5})
                .to("#believe", { opacity:1, duration: 0.8})
                .to("#in", { opacity:1, duration: 0.5})
                .to("#it4", { opacity:1, duration: 0.4})
                .to("#but3", { opacity:1, duration: 0.5})
                .to("#type_layout", {  opacity:1, duration: 0.2, rotate:-90, scaleX:6, scaleY:6, x: 50, y: 1400},"<")
                .to("#how", { opacity:1, duration: 1})
                .to("#type_layout", {  opacity:1, duration: 0.8, rotate:0, scaleX:3, scaleY:3, x: -1125, y: 50},"<")
                .to("#type_layout", {  opacity:1, duration: 0.7, rotate:0, scaleX:5, scaleY:5, x: -1900, y: 50})
                .to("#i", { opacity:1, duration: 0.4})
                .to("#type_layout", {  opacity:1, duration: 0.3, rotate:0, scaleX:4.5, scaleY:4.5, x: -1800, y: -50},"<")
                .to("#need", { opacity:1, duration: 0.6})
                .to("#your", { opacity:1, duration: 0.6})
                .to("#help", { opacity:1, duration: 0.4})
                .to("#master", { opacity:1, duration: 0.6})
                .to("#type_layout", {  opacity:1, duration: 0.3, rotate:0, scaleX:4, scaleY:4, x: -1650, y: -50},"<")
                  .to("#you5", { opacity:1, duration: 1.3})
                  .to("#type_layout", {  opacity:1, duration: 0.7, rotate:0, scaleX:3, scaleY:3, x: -1050, y: 700},"<")
                  .to("#just", { opacity:1, duration: 0.6})
                  .to("#need-2", { opacity:1, duration: 0.5})
                  .to("#to2", { opacity:1, duration: 0.3})
                  .to("#believe2", { opacity:1, duration: 1})
                  .to("#promise", { opacity:1, duration: 1.4})
                  .to("#type_layout", {  opacity:1, duration: 0.7, rotate:-90, scaleX:5.2, scaleY:5.2, x: 30, y: -120},"<")
                  .to("#me", { opacity:1, duration:1 })
                  .to("#type_layout", {  opacity:1, duration: 0.4, rotate:0, scaleX:3, scaleY:3, x: 65, y: 50},"<")
                  .to("#shifu", { opacity:1, duration: 0.7})
                  .to("#promise2", { opacity:1, duration: 0.7})
                  .to("#me2", { opacity:1, duration: 0.6})
                  .to("#you6", { opacity:1, duration: 0.6})
                  .to("#will2", { opacity:1, duration: 0.3})
                  .to("#type_layout", {  opacity:1, duration: 0.6, rotate:0, scaleX:1, scaleY:1, x: 0, y: 0},"<")
                  .to("#believe3", { opacity:1, duration: 0.6});










  function playAnimation() {
    typeAnim.play();
    audio.play();
   }



  playButton.addEventListener("click", playAnimation);

})();
