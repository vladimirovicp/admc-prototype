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

        let nameFolder;
        nameFolder = row.folder ? row.folder : tableData.folder; 

        if(size === 'scalable'){

            // img.src = `${tableData.basePath}/${size}/${tableData.folder}/${row.name}.svg`;
            img.src = `${tableData.basePath}/${size}/${nameFolder}/${row.name}.svg`;
            img.alt = row.name;
            td.appendChild(img);

        } else{
          if( (size === 256 && row.sizesX256 === 'none') || 
          (size === 48 && row.sizesX48 === 'none') || 
          (size === 32 && row.sizesX32 === 'none') || 
          (size === 22 && row.sizesX22 === 'none') || 
          (size === 16 && row.sizesX16 === 'none')){
            console.log(row.sizesX256)
          } else {

            const pathSize = tableData.sizeOne ? `${size}` : `${size}x${size}`;

            const mainPath = tableData.pathLink2 ? `${nameFolder}/${pathSize}` : `${pathSize}/${nameFolder}`;

            img.src = `${tableData.basePath}/${mainPath}/${row.name}.${tableData.type}`;
            img.width = size;
            img.height = size;
            img.alt = row.name;
            td.appendChild(img);
          }


            // img.src = `${tableData.basePath}/${size}x${size}/${tableData.folder}/${row.name}.${tableData.type}`;
        }
        

      } else if (row.name === "avatar-default-symbolic" || 
                  row.name === "go-previous-symbolic" || 
                  row.name === "go-next-symbolic" || 
                  row.name === "go-up-symbolic" || 
                  row.name === "view-refresh-symbolic" ||
                  row.name === "emblem-system-symbolic"
                ) {
        // спец. случай
            if(size === 256){
                const img = document.createElement("img");
                img.src = `${tableData.basePath}/scalable/${row.folder}/${row.name}.svg`;
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
