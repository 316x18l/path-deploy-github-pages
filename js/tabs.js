// ここからコードを書いてください
export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterLink = document.querySelector('[data-tab="converter"]');
  const homeSection = document.querySelector("#home");
  const converterSection = document.querySelector("#converter");

  homeLink.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  converterLink.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });
}
