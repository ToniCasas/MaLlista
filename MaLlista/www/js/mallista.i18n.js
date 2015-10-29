angular.module('mallista.i18n', [])

.factory('Translator', function() {
    // Might use a resource here that returns a JSON array
    var acceptedLanguages = ['ca', 'en', 'es'];
    var currentLanguage;
    var defaultLan = 'en';

    var languages = [{
            name: 'Català',
            key: 'ca',
            tokens: {
                ACCEPT: 'Acceptar',
                DELETE: 'Eliminar',
                LISTS: 'Llistes',
                NAME: 'Nom',
                PENDING: 'Pendent',
                PRODUCTS: 'Productes',
            }
        },
        {
            name: 'English',
            key: 'en',
            tokens: {
                ACCEPT: 'Accept',
                DELETE: 'Delete',
                LISTS: 'Shopping Lists',
                NAME: 'Name',
                PENDING: 'Pending',
                PRODUCTS: 'Products',
            }
        },
        {
            name: 'Castellano',
            key: 'es',
            tokens: {
                ACCEPT: 'Aceptar',
                DELETE: 'Eliminar',
                LISTS: 'Listas',
                NAME: 'Nombre',
                PENDING: 'Pendiente',
                PRODUCTS: 'Productos',
            }
        }
    ];

    function getConfiguredLanguage() {
        //TODO - Recover value from database
        return defaultLan;
    }

    function getLan() {
        if (acceptedLanguages.indexOf(currentLanguage) < 0)
            currentLanguage = getConfiguredLanguage();
        return currentLanguage;
    }

    return {
        getToken: function (token) {
            var result = '';
            angular.forEach(languages, function (item) {
                if (item.key == getLan()) {
                    angular.forEach(item.tokens, function (value, key) {
                        if (key == token)
                            result = value;
                    });
                }
            });
            return result;
        },
        getLanguage: function () {
            return getLan();
        },
        setLanguage: function (language) {
            currentLanguage = language;
        }
    };
});
