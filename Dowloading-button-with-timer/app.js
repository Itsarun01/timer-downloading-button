const downloadBtn = document.querySelector(".dowload-btn");
const fileLink =
  "https://drive.google.com/uc?export=download&id=1em2n7HsDi-15mVkK2UPUef8B4aIiT89-";

const initTimer = () => {
  // if downloadBtn contains disbale-timer class then only if conditonal code will run

  if (downloadBtn.classList.contains("disable-timer")) {
    return (location.href = fileLink);
  }

  // getting data-timer attribute from html..
  let timer = downloadBtn.dataset.timer;
  downloadBtn.classList.add("timer");
  downloadBtn.innerHTML = `Your File Will Dowload in <b>${timer}</b> Second`;
  // creating initCounter Varibale with sethInterval function
  const initCounter = setInterval(() => {
    if (timer > 0) {
      timer--;
      return (downloadBtn.innerHTML = `Your File Will Dowload in <b>${timer}</b> Second`);
    }
    clearInterval(initCounter);
    location.href = fileLink;
    downloadBtn.textContent = "Your file is Downloading..";

    setTimeout(() => {
      downloadBtn.classList.replace("timer", "disable-timer");
      downloadBtn.innerHTML = ` <span class="icon material-symbols-outlined">vertical_align_bottom</span>
      <span class="text"> Dowload Again </span>`;
    }, 3000);
  }, 1000);
};
downloadBtn.addEventListener("click", initTimer);
