// make video start from x sec of its original time
let cont1Vid = document.querySelector(".cont1 video");
cont1Vid.currentTime = 19;
// make video start from x sec of its original time
let cont1CircleOnVid = document.querySelector(".cont1 .circleOnVid");
let cont1VidCont = document.querySelector(".cont1 .videoCont");
cont1Vid.addEventListener("mousemove", (dets) => {
  cont1CircleOnVid.style.position = "fixed";
  cont1CircleOnVid.style.left = dets.x + "px";
  cont1CircleOnVid.style.top = dets.y + "px";
  cont1CircleOnVid.style.opacity = 1;
  cont1CircleOnVid.style.scale = 1;
});
// this code makes the mousefolloweronvid to disaappear whenver the mouse leaeves the intended div by any means viz scroll or basic movement
cont1Vid.addEventListener("mouseleave", () => {
  cont1CircleOnVid.style.position = "absolute";
  cont1CircleOnVid.style.left = "50%";
  cont1CircleOnVid.style.top = "50%";
  cont1CircleOnVid.style.transform = "translate(-50%,-50%)";
});
// this code makes the mousefolloweronvid to disaappear whenver the mouse leaeves the intended div by any means viz scroll or basic movement
cont1Vid.addEventListener("click",()=>{
  cont1Vid.removeAttribute("muted")
})