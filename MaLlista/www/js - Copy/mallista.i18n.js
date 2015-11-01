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
                ALL_LISTS: 'Totes les llistes',
                DELETE: "Eliminar",
                LISTS: "Llistes",
                NAME: "Nom",
                PENDING: "Pendent",
                PRODUCTS: "Productes",
            }
        },
        {
            name: "English",
            id: "en",
            tokens: {
                ACCEPT: "Accept",
                ALL_LISTS: 'All shopping lists',
                DELETE: "Delete",
                LISTS: "Shopping Lists",
                NAME: "Name",
                PENDING: "Pending",
                PRODUCTS: "Products",
            }
        },
        {
            name: "Castellano",
            id: "es",
            tokens: {
                ACCEPT: "Aceptar",
                ALL_LISTS: 'Todas las listas',
                DELETE: "Eliminar",
                LISTS: "Listas",
                NAME: "Nombre",
                PENDING: "Pendiente",
                PRODUCTS: "Productos",
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
        }
    };
});
