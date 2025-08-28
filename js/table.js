import { tablesData } from "./data.js";

export function createTable(tableData) {
  const table = document.createElement("table");

  // caption
  const caption = document.createElement("caption");
  caption.textContent = tableData.caption;
  table.appendChild(caption);

  // thead
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Icon Name", "Name", ...tableData.sizes.map(s => `${s}x${s}`)];

  headers.forEach(text => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // tbody
  const tbody = document.createElement("tbody");

  tableData.rows.forEach(row => {
    const tr = document.createElement("tr");

    // iconName
    const tdIcon = document.createElement("td");
    tdIcon.textContent = row.iconName;
    tr.appendChild(tdIcon);

    // name
    const tdName = document.createElement("td");
    tdName.scope = "row";
    tdName.textContent = row.name;
    tr.appendChild(tdName);

    // sizes
    tableData.sizes.forEach(size => {
      const td = document.createElement("td");
      td.scope = "col";

      if (!row.custom) {
        const img = document.createElement("img");
        if(size === 'scalable'){
            img.src = `${tableData.basePath}/${size}/${tableData.folder}/${row.name}.svg`;
            img.alt = row.name;
            td.appendChild(img);
        } else{
          let nameFolder;
          nameFolder = row.folder ? row.folder : tableData.folder; 

            

          if( size === 256 && row.sizesX256 === 'none' ){
            console.log(row.sizesX256)
          } else {
            img.src = `${tableData.basePath}/${size}x${size}/${nameFolder}/${row.name}.${tableData.type}`;
            img.alt = row.name;
            td.appendChild(img);
          }


            // img.src = `${tableData.basePath}/${size}x${size}/${tableData.folder}/${row.name}.${tableData.type}`;
        }
        

      } else if (row.name === "avatar-default-symbolic") {
        // спец. случай
            if(size === 256){
                const img = document.createElement("img");
                img.src = `${tableData.basePath}/scalable/status/${row.name}.svg`;
                img.width = 256;
                img.height = 256;
                img.alt = row.name;
                td.appendChild(img);
            } 
        }
      

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  return table;
}

export function renderAllTables(containerId) {
  const container = document.getElementById(containerId);
  tablesData.forEach(t => {
    const table = createTable(t);
    container.appendChild(table);
  });
}
