angular.module('mallista.services', [])

.factory('Translator', function() {
  // Might use a resource here that returns a JSON array
    var currentLanguage = 'ca';
    var defaultLanguage = 'ca';

    var languages = [{
            lan: 'ca',
            tokens: {
                ACCEPT: 'Acceptar',
                DELETE: 'Eliminar',
                NAME: 'Nom',
            }
        },
        {
            lan: 'en',
            tokens: {
                ACCEPT: 'Accept',
                DELETE: 'Delete',
                NAME: 'Name',
        }
        },
        {
            lan: 'es',
            tokens: {
                ACCEPT: 'Aceptar',
                DELETE: 'Eliminar',
                NAME: 'Nombre',
                }
        }
    ];

    function getLan() {
        if (currentLanguage == '')
            currentLanguage = defaultLanguage;
        return currentLanguage;
    }

    return {
        getToken: function (token) {
            var result = '';
            angular.forEach(languages, function (item) {
                if (item.lan == getLan()) {
                    angular.forEach(item.tokens, function (value, key) {
                        if (key == token)
                            result = value;
                    });
                }
            });
            return result;
        },
        getLanguage: function () {
            if (currentLanguage == '')
                currentLanguage = defaultLanguage;
            return currentLanguage;
        },
        setLanguage: function (language) {
            currentLanguage = language;
        }
    };
});
