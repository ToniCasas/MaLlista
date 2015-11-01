angular.module('mallista.i18n', [])

.factory('Translator', function() {
    // Might use a resource here that returns a JSON array
    //var acceptedlanguages = ['ca', 'en', 'es'];
    var currentLan;
    var defaultLan = "ca";

    var languages = [{
            name: "Català",
            id: "ca",
            tokens: {
                ACCEPT: "Acceptar",
                ALL_LISTS: "Totes les llistes",
                DELETE: "Eliminar",
                ESTATISTICS: "Estadístiques",
                HOME: "Inici",
                LANGUAGE: "Idioma",
                LISTS: "Llistes",
                MAINTENANCE: "Manteniment",
                MENU_TOOLS: "Eines",
                NAME: "Nom",
                PENDING: "Pendent",
                PRODUCTS: "Productes",
                SETTINGS: "Configuració",
            }
        },
        {
            name: "English",
            id: "en",
            tokens: {
                ACCEPT: "Accept",
                ALL_LISTS: 'All shopping lists',
                DELETE: "Delete",
                ESTATISTICS: "Statistics",
                HOME: "Home",
                LANGUAGE: "Language",
                LISTS: "Shopping Lists",
                MAINTENANCE: "Mantenance",
                MENU_TOOLS: "Tools",
                NAME: "Name",
                PENDING: "Pending",
                PRODUCTS: "Products",
                SETTINGS: "Settings",
            }
        },
        {
            name: "Castellano",
            id: "es",
            tokens: {
                ACCEPT: "Aceptar",
                ALL_LISTS: 'Todas las listas',
                DELETE: "Eliminar",
                ESTATISTICS: "Estadísticas",
                HOME: "Inicio",
                LANGUAGE: "Idioma",
                LISTS: "Listas",
                MAINTENANCE: "Mantenimiento",
                MENU_TOOLS: "Herramientas",
                NAME: "Nombre",
                PENDING: "Pendiente",
                PRODUCTS: "Productos",
                SETTINGS: "Configuración",
            }
        }
    ];
    function getCurrentLan() {
        if (getLanIds().indexOf(currentLan) < 0)
            currentLan = getSelectedLan();
        return currentLan;
    }
    function getLanIds() {
        var result = [];
        var i = 0;
        angular.forEach(languages, function (item) {
            result[i] = item.id;
            i++;
        })
        return result;
    }
    function getSelectedLan() {
        //TODO - Recover value from database
        return defaultLan;
    }
    return {
        getToken: function (token) {
            var result = null;
            angular.forEach(languages, function (item) {
                if (item.id == getCurrentLan()) {
                    angular.forEach(item.tokens, function (value, key) {
                        if (key == token)
                            result = value;
                    });
                }
            });
            return result;
        },
        getCurrentLanguage: function () {
            return getCurrentLan();
        },
        setCurrentLanguage: function (lan) {
            currentLan = lan;
        },
        getLanguageList: function () {
            var result = null;
            result = [];
            angular.forEach(languages, function (item) {
                result.push({ id: item.id, name: item.name, selected: item.id == currentLan });
            });
            return result;
        }
    };
});
