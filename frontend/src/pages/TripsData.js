import React from 'react';
import ReactDOM from 'react-dom';

export let TripsData = [
    {
        id: "italy",
        title: "Italy",
        emoji: "🇮🇹",
        date: "9th of Oct. to 15th of Oct. 2022",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
        members: [
            {
                username: "Ju",
                img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            },
            {
                username: "Nick",
                img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            },
            {
                username: "José",
                img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
        ],
        checklist: [
            {
                title: "Buy plane tickets",
                notes: "google flights option",
                status: "completed"
            },
            {
                title: "Make restaurant reservations",
                notes: "",
                status: "to-do"
            }
        ],
        lists: [
            {
                title: "Restaurants",
                icon: "restaurant",
                img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                items: [
                    {
                        title: "Marco Martini Restaurant",
                        description: "Marco Martini defines cuisine in three words: eyes, stomach, head – it is memories of flavours from bygone days that provide the impetus for his own creations.",
                        position: {lat: 41.880549484164426, lng: 12.48471773530235},
                        link: "https://goo.gl/maps/2uifYqkZAnRF1pps5"
                    },
                    {
                        title: "Trattoria Pennestri",
                        description: "You'll feel immediately at ease in this restaurant, which has the warm, simple atmosphere of a typical trattoria.",
                        position: {lat: 41.873364, lng: 12.479696},
                        link: "https://goo.gl/maps/2uifYqkZAnRF1pps5"
                    },
                    {
                        title: "Green T.",
                        description: "Not far from the Pantheon, this original restaurant arranged over four floors serves the type of fine Chinese cuisine which has graced official banquets in China ever since the time of Chairman Mao.",
                        position: {lat: 41.897558631883264, lng: 12.479295860690605},
                        link: "https://goo.gl/maps/2uifYqkZAnRF1pps5"
                    }
                ]
            },
            {
                title: "Museums",
                icon: "museum_archeological",
                img: "https://images.unsplash.com/photo-1513038630932-13873b1a7f29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
                items: [
                    {
                        title: "Capitoline Museums",
                        description: "Classical Roman, Greek & Egyptian sculptures & Renaissance art in 15th-century-designed palaces.",
                        position: {lat: 41.892954758938224, lng: 12.482579155508137},
                        link: "https://goo.gl/maps/2uifYqkZAnRF1pps5"
                    },
                    {
                        title: "Vatican Museums",
                        description: "Multiple galleries of classical & Renaissance art masterpieces, plus the Sistine Chapel frescoes.",
                        position: {lat: 41.906467817254324, lng: 12.453641297837967},
                        link: "https://goo.gl/maps/2uifYqkZAnRF1pps5"
                    }
                ]
            },
            {
                title: "Hotels",
                icon: "hotel_0star",
                img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
                items: [
                    {
                        title: "Horti 14 Borgo Trastevere Hotel",
                        description: "Classical Roman, Greek & Egyptian sculptures & Renaissance art in 15th-century-designed palaces.",
                        position: {lat: 41.89397674585364, lng: 12.46309920130514},
                        link: "https://goo.gl/maps/2uifYqkZAnRF1pps5"
                    },
                    {
                        title: "Villa Agrippina Gran Meliá",
                        description: "Villa Agrippina Gran Meliá - The Leading Hotels of the World is a 5-star hotel located in the center of Rome, and includes an elegant interior and well-designed guest rooms overlooking the views of the Vatican, Castel Sant'Angelo , Vicolo di Sant'Onofrio or to the hotel's garden.",
                        position: {lat: 41.8989585987013, lng: 12.461110453197874},
                        link: "https://goo.gl/maps/2uifYqkZAnRF1pps5"
                    }
                ]
            },
            {
                title: "Coffee Shops",
                icon: "coffee",
                img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
                items: [
                    {
                        title: "Sant’ Eustachio Il Caffè",
                        description: "Coffee shop famed for its home-roast beans, blended with water from an ancient aqueduct.",
                        position: {lat: 41.898289172808006, lng: 12.475423902406682},
                        link: "https://goo.gl/maps/2uifYqkZAnRF1pps5"
                    },
                    {
                        title: "Antigua Tazza d'Oro",
                        description: "Villa Agrippina Gran Meliá - The Leading Hotels of the World is a 5-star hotel located in the center of Rome, and includes an elegant interior and well-designed guest rooms overlooking the views of the Vatican, Castel Sant'Angelo , Vicolo di Sant'Onofrio or to the hotel's garden.",
                        position: {lat: 41.89943532771305, lng: 12.477399974671577},
                        link: "https://goo.gl/maps/2uifYqkZAnRF1pps5"
                    }
                ]
            }
        ]
    },
    {
        id: "spain",
        title: "Spain",
        emoji: "🇪🇸",
        date: "3th of Nov. to 8th of Nov. 2022",
        image: "https://images.unsplash.com/photo-1593368858664-a7fe556ab936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        members: [
            {
                username: "Ju",
                img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            }
        ],
        checklist: [
            {
                title: "Buy plane tickets",
                notes: "google flights option",
                status: "completed"
            },
            {
                title: "Make restaurant reservations",
                notes: "",
                status: "to-do"
            }
        ]
    },
    {
        id: "brazil",
        title: "Brazil",
        emoji: "🇧🇷",
        date: "3th of Jan. to 13th of Jan. 2023",
        image: "https://images.unsplash.com/photo-1551312183-66bca7944e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
        members: [
            {
                username: "Ju",
                img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            },
            {
                username: "Nick",
                img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            },
            {
                username: "José",
                img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
        ],
        checklist: [
            {
                title: "Buy plane tickets",
                notes: "google flights option",
                status: "completed"
            },
            {
                title: "Talk to family about hotel and also arrange visa appointment",
                notes: "google flights option",
                status: "completed"
            },
            {
                title: "Pick out second hotel for the third and sixthh nightPick out second hotel for the third and sixthh nightPick out second hotel for the third and sixthh nightPick out second hotel for the third and sixthh night",
                notes: "google flights option",
                status: "to-do"
            },
            {
                title: "Make restaurant reservations",
                notes: "",
                status: "to-do"
            }
        ]
    },
    {
        id: "japan",
        title: "Japan",
        emoji: "🇯🇵",
        date: "1th of Jul. to 7th of July. 2023",
        image: "https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        members: [
            {
                username: "Ju",
                img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            },
            {
                username: "Nick",
                img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            },
            {
                username: "José",
                img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
        ],
        checklist: [
            {
                title: "Buy plane tickets",
                notes: "google flights option",
                status: "completed"
            },
            {
                title: "Make restaurant reservations",
                notes: "",
                status: "to-do"
            }
        ]
    },
    {
        id: "australia",
        title: "Australia",
        emoji: "🇦🇺",
        date: "2th of Sep. to 10th of Sep. 2023",
        image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1739&q=80",
        members: [
            {
                username: "Ju",
                img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            },
            {
                username: "Nick",
                img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
        ],
        checklist: [
            {
                title: "Buy plane tickets",
                notes: "google flights option",
                status: "completed"
            },
            {
                title: "Make restaurant reservations",
                notes: "",
                status: "to-do"
            }
        ]
    },
    {
        id: "canada",
        title: "Canada",
        emoji: "🇨🇦",
        date: "21th of Sep. to 29th of Sep. 2023",
        image: "https://images.unsplash.com/photo-1501114676295-bbbcc7a12466?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        members: [
            {
                username: "Ju",
                img: "https://images.unsplash.com/photo-1534184241306-2d7eb0ddbbde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            },
            {
                username: "Nick",
                img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            },
            {
                username: "José",
                img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
        ],
        checklist: [
            {
                title: "Buy plane tickets",
                notes: "google flights option",
                status: "completed"
            },
            {
                title: "Make restaurant reservations",
                notes: "",
                status: "to-do"
            }
        ]
    },
]