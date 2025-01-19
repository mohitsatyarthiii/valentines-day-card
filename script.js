document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle("visible", i === index);
    });
  }

  document.getElementById("open-btn").addEventListener("click", function () {
    showPage(1);
    document.getElementById("love-song").play();
  });
  document.getElementById("open-btn").addEventListener("click", function () {
    const balloons = document.querySelector(".balloons");
    balloons.classList.add("show");
    setTimeout(function () {
      balloons.classList.remove("show");
    }, 3000);
  });

  document.getElementById("next-btn1").addEventListener("click", function () {
    showPage(2);
  });

  document.getElementById("next-btn2").addEventListener("click", function () {
    showPage(3);
  });

  document.getElementById("next-btn3").addEventListener("click", function () {
    showPage(4);
  });

  document.getElementById("yes-btn").addEventListener("click", function () {
    showPage(5);
  });

  document.getElementById("no-btn").addEventListener("mouseover", function () {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    this.style.transform = `translate(${x}px, ${y}px)`;
  });

  showPage(currentPage);
});
