angular.module('gdgXBoomerang')
    .factory('Config', function () {
        return {
            // TODO Modify these to configure your app
            'name': 'GDG Goiânia',
            'id': '113297226237632387507',
            'googleApi': 'AIzaSyAcQ9smZMBe856V1m8_5ZzZ7XpQxiRFo4A',
            'pwaId': '6199218429003869809', // Picasa Web Album id, must belong to Google+ id above
            'domain': 'http://www.gdggoiania.org',
            'twitter': 'gdggoiania',
            'facebook': 'gdggoiania',
            'meetup': 'pt/GDG-Goiania',
            // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
            'dateFormat': 'EEEE, MMMM d, y - H:mm a',
            'cover': {
                title: 'Eventos GDG através do mundo',
                subtitle: 'Eventos organizados por diversos GDGS',
                button: {
                    text: 'Procure um evento GDG',
                    url: 'http://gdg.events/'
                }
            },
            'activities': {
                techTalks: true,
                codeLabs: true,
                hackathons: true,
                devFests: true,
                appClinics: true,
                panels: true,
                designSprints: true,
                roundTables: true
            }
            // To update the snippet which is used for sharing, see the TODO in the index.html.
        };
    });
