/usr/share/icons

find /usr/share/icons -name network-server

/usr/share/icons/mate/24x24/places/network-server.png
/usr/share/icons/mate/256x256/places/network-server.png
/usr/share/icons/mate/16x16/places/network-server.png
/usr/share/icons/mate/32x32/places/network-server.png
/usr/share/icons/mate/22x22/places/network-server.png
/usr/share/icons/mate/48x48/places/network-server.png



/usr/share/icons/Papirus/64x64/devices/network-server.svg
/usr/share/icons/Papirus/24x24/devices/network-server.svg
/usr/share/icons/Papirus/16x16/devices/network-server.svg
/usr/share/icons/Papirus/32x32/devices/network-server.svg
/usr/share/icons/Papirus/22x22/devices/network-server.svg
/usr/share/icons/Papirus/48x48/devices/network-server.svg

/usr/share/icons/ContrastHigh/scalable/places/network-server.svg
/usr/share/icons/ContrastHigh/24x24/places/network-server.png
/usr/share/icons/ContrastHigh/256x256/places/network-server.png
/usr/share/icons/ContrastHigh/16x16/places/network-server.png
/usr/share/icons/ContrastHigh/32x32/places/network-server.png
/usr/share/icons/ContrastHigh/22x22/places/network-server.png
/usr/share/icons/ContrastHigh/48x48/places/network-server.png


/usr/share/icons/Adwaita/24x24/places/network-server.png
/usr/share/icons/Adwaita/256x256/places/network-server.pn
/usr/share/icons/Adwaita/16x16/places/network-server.png
/usr/share/icons/Adwaita/32x32/places/network-server.png
/usr/share/icons/Adwaita/22x22/places/network-server.png
/usr/share/icons/Adwaita/48x48/places/network-server.png

/usr/share/icons/gnome/24x24/places/network-server.png
/usr/share/icons/gnome/256x256/places/network-server.png
/usr/share/icons/gnome/16x16/places/network-server.png
/usr/share/icons/gnome/32x32/places/network-server.png
/usr/share/icons/gnome/22x22/places/network-server.png
/usr/share/icons/gnome/48x48/places/network-server.png

/usr/share/icons/Papirus-Dark/16x16/devices/network-server.svg



IconManager::IconManagerImpl::IconManagerImpl(IconManager *parent) : q(parent) {
    // NOTE: use a list of possible icons because
    // default icon themes for different DE's don't
    // fully intersect
    category_icon_names_map = {
        {OBJECT_CATEGORY_DOMAIN_DNS, {"network-server"}},
        {OBJECT_CATEGORY_CONTAINER, {"folder"}},
        {OBJECT_CATEGORY_OU, {"folder-documents"}},
        {OBJECT_CATEGORY_GROUP, {"system-users"}},
        {OBJECT_CATEGORY_PERSON, {"avatar-default", "avatar-default-symbolic"}},
        {OBJECT_CATEGORY_COMPUTER, {"computer"}},
        {OBJECT_CATEGORY_GP_CONTAINER, {"preferences-other"}},
        {OBJECT_CATEGORY_VOLUME, {"folder-templates"}},
        {OBJECT_CATEGORY_SERVERS_CONTAINER, {"folder"}},
        {OBJECT_CATEGORY_SITE, {"go-home"}},

        // These categories are not AD object categories. They are used within ADMC context
        {ADMC_CATEGORY_QUERY_ITEM, {"document-send"}},
        {ADMC_CATEGORY_QUERY_FOLDER, {"folder"}},
        {ADMC_CATEGORY_ALL_POLICIES_FOLDER, {"folder"}},
        {ADMC_CATEGORY_GP_OBJECTS, {"folder"}},
        {ADMC_CATEGORY_FSMO_ROLE_CONTAINER, {"applications-system"}},
        {ADMC_CATEGORY_FSMO_ROLE, {"emblem-system"}},
        {ADMC_CATEGORY_DOMAIN_INFO_ITEM, {"network-workgroup"}},
        {ADMC_CATEGORY_GO_PREVIOUS_ACTION, {"go-previous", "go-previous-symbolic"}},
        {ADMC_CATEGORY_GO_NEXT_ACTION, {"go-next", "go-next-symbolic"}},
        {ADMC_CATEGORY_GO_UP_ACTION, {"go-up", "go-up-symbolic"}},
        {ADMC_CATEGORY_REFRESH_ACTION, {"view-refresh", "view-refresh-symbolic"}},
        {ADMC_CATEGORY_MANUAL_ACTION, {"help"}},

        // Icons for some system containers and objects
        {OBJECT_CATEGORY_BUILTIN, {"emblem-system", "emblem-system-symbolic"}},
        {OBJECT_CATEGORY_LOST_AND_FOUND, {"emblem-system", "emblem-system-symbolic"}},
        {OBJECT_CATEGORY_MSDS_QUOTA_CONTAINER, {"Container", "emblem-system", "emblem-system-symbolic"}},
        {OBJECT_CATEGORY_PSO, {"preferences-desktop-personal"}},
        {OBJECT_CATEGORY_PSO_CONTAINER, {"preferences-desktop"}},

        // Indicator icons (aren't AD object categories too)
        {inheritance_indicator, {"changes-prevent"}},
        {enforced_indicator, {"stop"}},
        {block_indicator, {"dialog-error"}},
        {link_indicator, {"mail-forward"}},
        {search_indicator, {"system-search"}},
        {warning_indicator, {"dialog-warning"}},

        // NOTE: Error icon used when no icon is
        // defined for given object category
        {error_icon_name, {"dialog-question", "dialog-question-symbolic"}}
    };
}

