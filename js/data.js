export const tablesData = [
  {
    caption: "breeze",
    basePath: "./img/alt-kworkstation-11.1/breeze",
    type: "svg",
    folder: "places",
    sizes: [16, 22, 32, 48],
    sizeOne: true,
    pathLink2: true,
    rows: [
      // { iconName: "OBJECT_CATEGORY_DOMAIN_DNS", name: "network-server" },
      { iconName: "OBJECT_CATEGORY_CONTAINER", name: "folder" },
      { iconName: "OBJECT_CATEGORY_OU", name: "folder-documents", sizesX22: 'none' },
      { iconName: "OBJECT_CATEGORY_GROUP", name: "system-users", folder: "actions", sizesX16: 'none', sizesX22: 'none', sizesX48: 'none' },
      { iconName: "OBJECT_CATEGORY_PERSON", name: "im-user",  folder: "actions", sizesX32: 'none', sizesX48: 'none' },
      { iconName: "OBJECT_CATEGORY_COMPUTER", name: "computer", folder: "devices", sizesX32: 'none', sizesX48: 'none' },
      { iconName: "OBJECT_CATEGORY_VOLUME", name: "folder-templates" },
      { iconName: "OBJECT_CATEGORY_SERVERS_CONTAINER", name: "folder" },
      { iconName: "OBJECT_CATEGORY_SITE", name: "go-home",  folder: "actions", sizesX32: 'none', sizesX48: 'none' },
      { iconName: "ADMC_CATEGORY_QUERY_ITEM", name: "document-send", folder: "actions", sizesX32: 'none', sizesX48: 'none' },
      { iconName: "ADMC_CATEGORY_QUERY_FOLDER", name: "folder" },
      { iconName: "ADMC_CATEGORY_ALL_POLICIES_FOLDER", name: "folder" },
      { iconName: "ADMC_CATEGORY_FSMO_ROLE_CONTAINER", name: "applications-system", folder: "categories", sizesX16: 'none', sizesX32: 'none', sizesX48: 'none' },
      // { iconName: "ADMC_CATEGORY_FSMO_ROLE", name: "emblem-system", folder: "emblems" },
      { iconName: "ADMC_CATEGORY_DOMAIN_INFO_ITEM", name: "network-workgroup" },
      { iconName: "ADMC_CATEGORY_GO_PREVIOUS_ACTION", name: "go-previous", folder: "actions", sizesX48: 'none'},
      { iconName: "ADMC_CATEGORY_GO_NEXT_ACTION", name: "go-next", folder: "actions", sizesX32: 'none', sizesX48: 'none' },
      { iconName: "ADMC_CATEGORY_GO_UP_ACTION", name: "go-up", folder: "actions", sizesX32: 'none', sizesX48: 'none' },
      { iconName: "ADMC_CATEGORY_REFRESH_ACTION", name: "view-refresh", folder: "actions", sizesX48: 'none' },
      // { iconName: "ADMC_CATEGORY_MANUAL_ACTION", name: "help", folder: "actions", sizesX32: 'none', sizesX48: 'none'},
      // { iconName: "OBJECT_CATEGORY_BUILTIN", name: "emblem-system", folder: "emblems", sizesX256: 'none' },
      // { iconName: "OBJECT_CATEGORY_LOST_AND_FOUND", name: "emblem-system", folder: "emblems", sizesX256: 'none' },
      // { iconName: "OBJECT_CATEGORY_LOST_AND_FOUND", name: "emblem-system-symbolic",  folder: "emblems", custom: true },
    ]

  },
  {
    caption: "mate",
    basePath: "./img/alt-workstation-10.4/mate",
    type: "png",
    folder: "places",
    sizes: [16, 22, 32, 48, 256],
    rows: [
      { iconName: "OBJECT_CATEGORY_DOMAIN_DNS", name: "network-server" },
      { iconName: "OBJECT_CATEGORY_CONTAINER", name: "folder" },
      { iconName: "OBJECT_CATEGORY_OU", name: "folder-documents" },
      { iconName: "OBJECT_CATEGORY_GROUP", name: "system-users" },
      { iconName: "OBJECT_CATEGORY_PERSON", name: "avatar-default" },
      { iconName: "OBJECT_CATEGORY_PERSON", name: "avatar-default-symbolic", folder: "status", custom: true },
      { iconName: "OBJECT_CATEGORY_COMPUTER", name: "computer" },
      { iconName: "OBJECT_CATEGORY_GP_CONTAINER", name: "preferences-other", folder: "categories", sizesX256: 'none' },
      { iconName: "OBJECT_CATEGORY_VOLUME", name: "folder-templates" },
      { iconName: "OBJECT_CATEGORY_SERVERS_CONTAINER", name: "folder" },
      { iconName: "OBJECT_CATEGORY_SITE", name: "go-home",  folder: "actions", sizesX256: 'none' },
      { iconName: "ADMC_CATEGORY_QUERY_ITEM", name: "document-send", folder: "actions", sizesX256: 'none' },
      { iconName: "ADMC_CATEGORY_QUERY_FOLDER", name: "folder" },
      { iconName: "ADMC_CATEGORY_ALL_POLICIES_FOLDER", name: "folder" },
      { iconName: "ADMC_CATEGORY_FSMO_ROLE_CONTAINER", name: "applications-system", folder: "categories" },
      { iconName: "ADMC_CATEGORY_FSMO_ROLE", name: "emblem-system", folder: "emblems", sizesX256: 'none' },
      { iconName: "ADMC_CATEGORY_DOMAIN_INFO_ITEM", name: "network-workgroup" },
      { iconName: "ADMC_CATEGORY_GO_PREVIOUS_ACTION", name: "go-previous", folder: "actions" },
      { iconName: "ADMC_CATEGORY_GO_PREVIOUS_ACTION", name: "go-previous-symbolic",  folder: "actions", custom: true },
      { iconName: "ADMC_CATEGORY_GO_NEXT_ACTION", name: "go-next", folder: "actions" },
      { iconName: "ADMC_CATEGORY_GO_NEXT_ACTION", name: "go-next-symbolic",  folder: "actions", custom: true },
      { iconName: "ADMC_CATEGORY_GO_UP_ACTION", name: "go-up", folder: "actions", sizesX256: 'none' },
      { iconName: "ADMC_CATEGORY_GO_UP_ACTION", name: "go-up-symbolic",  folder: "actions", custom: true },
      { iconName: "ADMC_CATEGORY_REFRESH_ACTION", name: "view-refresh", folder: "actions", sizesX256: 'none' },
      { iconName: "ADMC_CATEGORY_REFRESH_ACTION", name: "view-refresh-symbolic",  folder: "actions", custom: true },
      { iconName: "ADMC_CATEGORY_MANUAL_ACTION", name: "help", custom: true},
      { iconName: "OBJECT_CATEGORY_BUILTIN", name: "emblem-system", folder: "emblems", sizesX256: 'none' },
      { iconName: "OBJECT_CATEGORY_LOST_AND_FOUND", name: "emblem-system", folder: "emblems", sizesX256: 'none' },
      { iconName: "OBJECT_CATEGORY_LOST_AND_FOUND", name: "emblem-system-symbolic",  folder: "emblems", custom: true },
    ]
  },
  {
    caption: "Papirus",
    basePath: "./img/alt-workstation-10.4/Papirus",
    type: "svg",
    folder: "devices",
    sizes: [16, 22, 32, 48, 64],
    rows: [
      { iconName: "OBJECT_CATEGORY_DOMAIN_DNS", name: "network-server" }
    ]
  },
  {
    caption: "ContrastHigh",
    basePath: "./img/alt-workstation-10.4/ContrastHigh",
    type: "png",
    folder: "places",
    sizes: [16, 22, 24, 32, 48, 256, "scalable"],
    rows: [
      { iconName: "OBJECT_CATEGORY_DOMAIN_DNS", name: "network-server" }
    ]
  },
  {
    caption: "Adwaita",
    basePath: "./img/alt-workstation-10.4/Adwaita",
    type: "png",
    folder: "places",
    sizes: [16, 22, 24, 32, 48, 256],
    rows: [
      { iconName: "OBJECT_CATEGORY_DOMAIN_DNS", name: "network-server" }
    ]
  },
  {
    caption: "gnome",
    basePath: "./img/alt-workstation-10.4/gnome",
    type: "png",
    folder: "places",
    sizes: [16, 22, 24, 32, 48, 256],
    rows: [
      { iconName: "OBJECT_CATEGORY_DOMAIN_DNS", name: "network-server" }
    ]
  },
  {
    caption: "Papirus-Dark",
    basePath: "./img/alt-workstation-10.4/Papirus-Dark",
    type: "svg",
    folder: "devices",
    sizes: [16, 22, 24, 32, 48, 64, 96, 128],
    rows: [
      { iconName: "OBJECT_CATEGORY_DOMAIN_DNS", name: "network-server" }
    ]
  }
];
