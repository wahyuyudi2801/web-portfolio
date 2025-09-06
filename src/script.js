const skills = [
  {
    id: 1,
    name: "HTML",
    url: "./img/skills/html.png",
  },
  {
    id: 2,
    name: "CSS",
    url: "./img/skills/css.png",
  },
  {
    id: 3,
    name: "JS",
    url: "./img/skills/JavaScript.png",
  },
  {
    id: 4,
    name: "Bootstrap",
    url: "./img/skills/bootstrap.png",
  },
  {
    id: 5,
    name: "TailwindCSS",
    url: "./img/skills/tailwindcss.png",
  },
  {
    id: 6,
    name: "React JS",
    url: "./img/skills/reactjs.png",
  },
  {
    id: 7,
    name: "Vue JS",
    url: "./img/skills/vuejs.png",
  },
  {
    id: 8,
    name: "PHP",
    url: "./img/skills/PHP.png",
  },
  {
    id: 9,
    name: "laravel",
    url: "./img/skills/laravel.png",
  },
  {
    id: 10,
    name: "REST API",
    url: "./img/skills/REST.png",
  },
  {
    id: 11,
    name: "MySQL",
    url: "./img/skills/MySQL.png",
  },
  {
    id: 12,
    name: "Git",
    url: "./img/skills/Git.png",
  },
  {
    id: 13,
    name: "Figma",
    url: "./img/skills/Figma.png",
  },
  {
    id: 13,
    name: "Typescript",
    url: "./img/skills/Typescript.png",
  },
];

let elementSkills = document.querySelector("#skills .skills");

skills.forEach((skill) => {
  elementSkills.insertAdjacentHTML(
    "beforeend",
    `
    <a
    href="javascript:void(0)"
    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
    >
        <img
            src="${skill.url}"
            alt="${skill.name}"
            class="h-20 w-full photos-skills"
        />
    </a>
    `
  );
});

// portfolio
const dataPortfolios = [
    {
        name: "Aplikasi CAT (KUIS)",
        img: "cat-app.jpg"
    },
    {
        name: "Aplikasi Lelang Online",
        img: "lelang-online.jpg"
    },
    {
        name: "Aplikasi Referance Online",
        img: "referance-app.jpg"
    },
    {
        name: "Landing Page Schoot",
        img: "schoot.jpg"
    },
    {
        name: "Landing Page VISX",
        img: "visx.jpg"
    },
    {
        name: "Landing Page Qwords",
        img: "qwords.png"
    },
];

const elementPortfolio = document.querySelector("#portfolio .portfolio");
dataPortfolios.forEach((portfolio) => {
  elementPortfolio.insertAdjacentHTML(
    "beforeend",
    `
        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
            <div class="relative mb-12">
                <div class="overflow-hidden rounded-[10px]">
                    <img
                        src="./img/portofolio/${portfolio.img}"
                        alt="${portfolio.name}"
                        class="w-full h-[280px] object-cover"
                    />
                </div>
                <div class="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
                    <h3 class="text-dark dark:text-white mb-5 text-xl font-bold">
                        ${portfolio.name}
                    </h3>
                    <a
                        href="javascript:void(0)"
                        class="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
                    >
                        Lihat Detail
                    </a>
                </div>
            </div>
        </div>
    `
  );
});
