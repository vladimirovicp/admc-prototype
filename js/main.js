import { tablesData } from "./data.js";
import { createTable } from "./table.js";

document.addEventListener("DOMContentLoaded", () => {
  // ---------- создаём каркас ----------
  const body = document.body;

  // header
  const header = document.createElement("header");
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("container");

  // select
  const select = document.createElement("select");
  select.classList.add("select__theme");
  select.innerHTML = `
    <option value="all">All</option>
    ${tablesData.map(t => `<option value="${t.caption}">${t.caption}</option>`).join("")}
  `;
  headerContainer.appendChild(select);
  header.appendChild(headerContainer);

  // main
  const main = document.createElement("main");
  main.id = "app";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");

  main.appendChild(mainContainer);


  // добавляем всё в body
  body.appendChild(header);
  body.appendChild(main);

  // ---------- логика рендера таблиц ----------
  function renderTables(filter) {
    mainContainer.innerHTML = ""; // очищаем main

    if (filter === "all") {
      tablesData.forEach(t => mainContainer.appendChild(createTable(t)));
    } else {
      const tableData = tablesData.find(t => t.caption === filter);
      if (tableData) {
        mainContainer.appendChild(createTable(tableData));
      }
    }
  }

  // обработчик выбора темы
  select.addEventListener("change", e => {
    renderTables(e.target.value);
  });

  // показываем все таблицы по умолчанию
  renderTables("all");
});
