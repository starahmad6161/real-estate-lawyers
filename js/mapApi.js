

let globalInputValue = '';

var placesInfo = [
    {
        locationId: 1,
        placeId: 1,
        locationName: 'Toronto',
        img: '1-1.jpg',
        firstTitle: 'Toronto, Ontario, M5X 1C7',
        secondTitle: 'Vaughan, Ontario, L4H 3S7',
        tel: '(647) 792-0413',
        fax: '855) 466-3803',
        email: 'Toronto@RealEstateLawyers.ca',
        location: {lat: 43.64877591724139, lng: -79.3810036077403},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 1,
        placeId: 2,
        locationName: 'Toronto',
        img: '1-2.jpg',
        firstTitle: '2 Bloor Street East: Suite 3500 (Yonge & Bloor)',
        secondTitle: 'Toronto, Ontario, M4W 1A8',
        tel: '(647) 792-0414',
        fax: '(855) 466-3803',
        email: 'Toronto@RealEstateLawyers.ca',
        location: {lat: 43.67008824668507, lng: -79.38543506726512},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 1,
        placeId: 3,
        locationName: 'Toronto',
        img: '1-3.jpg',
        firstTitle: '2300 Yonge Street: Suite 1600 (Yonge & Eglinton)',
        secondTitle: 'Toronto, Ontario, M4P 1E4',
        tel: '(647) 792-0414',
        fax: '(855) 466-3803',
        email: 'Toronto@RealEstateLawyers.ca',
        location: {lat: 43.707393369481, lng: -79.39819541991054},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 1,
        placeId: 4,
        locationName: 'Toronto',
        img: '1-4.jpg',
        firstTitle: '1 Dundas Street West: Suite 2500 (Yonge & Dundas)',
        secondTitle: 'Toronto, Ontario, M5G 1Z3',
        tel: '(647) 792-0414',
        fax: '(855) 466-3803',
        email: 'Toronto@RealEstateLawyers.ca',
        location: {lat: 43.65606859866607, lng: -79.38123858075659},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 2,
        placeId: 1,
        locationName: 'Etobicoke',
        img: '2-1.jpg',
        firstTitle: '10 Four Seasons Place: 10th Floor (427 & Burnhamthorpe)',
        secondTitle: 'Toronto (Etobicoke), Ontario, M9B 6H7',
        tel: '(647) 792-0418',
        fax: '(855) 466-3803',
        email: 'Etobicoke@RealEstateLawyers.ca',
        location: {lat: 43.647434947185054, lng: -79.56151033234424},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 3,
        placeId: 1,
        locationName: 'North York',
        img: '3-1.jpg',
        firstTitle: '251 Consumers Road: 12th Floor (401 & 404)',
        secondTitle: 'Toronto (North York), Ontario, M2J 4R3',
        tel: '(647) 792-0421',
        fax: '(855) 466-3803',
        email: 'NorthYork@RealEstateLawyers.ca',
        location: {lat: 43.76985529739421, lng: -79.32998306726886},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 3,
        placeId: 2,
        locationName: 'North York',
        img: '3-2.jpg',
        firstTitle: '5000 Yonge Street: Suite 1901 (Yonge & North York Blvd)',
        secondTitle: 'Toronto, Ontario, M2N 7E9',
        tel: '(647) 792-0421',
        fax: '(855) 466-3803',
        email: 'NorthYork@RealEstateLawyers.ca',
        location: {lat: 43.76638019928018, lng: -79.41241864028474},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 4,
        placeId: 1,
        locationName: 'Scarborough',
        img: '4-1.jpg',
        firstTitle: '100 Consilium Place: Suite 200 (401 & McCowan)',
        secondTitle: 'Scarborough, Ontario, M1H 3E3',
        tel: '(647) 792-0419',
        fax: '(855) 466-3803',
        email: 'Scarborough@RealEstateLawyers.ca',
        location: {lat: 43.77715562496484, lng: -79.25182345748118},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 5,
        placeId: 1,
        locationName: 'Markham',
        img: '5-1.jpg',
        firstTitle: '165 Main Street North (Markham Road & Hwy 7 East)',
        secondTitle: 'Markham, Ontario, L3P 1Y2',
        tel: '(289) 317-0276',
        fax: '(905) 477-6778',
        email: 'Markham@RealEstateLawyers.ca',
        location: {lat: 43.88024254481366, lng: -79.25972439848904},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 5,
        placeId: 2,
        locationName: 'Markham',
        img: '5-2.jpg',
        firstTitle: '5071 Highway 7 East (Hwy 7 & McCowan)',
        secondTitle: 'Unionville, Ontario, L3R 1N3',
        tel: '(289) 317-0277',
        fax: '(905) 477-6778',
        email: 'Markham@RealEstateLawyers.ca',
        location: {lat: 43.86599565130741, lng: -79.28733469610854},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 6,
        placeId: 1,
        locationName: 'Richmond Hill',
        img: '6-1.jpg',
        firstTitle: '9225 Leslie Street, Suite 201 (Leslie Street & 16th Avenue)',
        secondTitle: 'Richmond Hill, Ontario, L4B 3H6',
        tel: '(289) 317-0250',
        fax: '(289) 317-0274',
        email: 'RichmondHill@RealEstateLawyers.ca',
        location: {lat: 43.861718085203165, lng: -79.38518250960038},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 7,
        placeId: 1,
        locationName: 'Vaughan',
        img: '7-1.jpg',
        firstTitle: '[Head Office]: 321 Cityview Blvd, Unit 3 (Hwy 400 & Major Mackenzie)',
        secondTitle: 'Vaughan, Ontario, L4H 3S7',
        tel: '905-477-5151',
        fax: '905-477-6778',
        email: 'Vaughan@RealEstateLawyers.ca',
        location: {lat: 43.854665573911824, lng: -79.55091267706011},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 7,
        placeId: 2,
        locationName: 'Vaughan',
        img: '7-2.jpg',
        firstTitle: '400 Applewood Cres: Unit 100 (400 & Langstaff)',
        secondTitle: 'Vaughan, Ontario, L4K 0C3',
        tel: '905-477-5151',
        fax: '905-477-6778',
        email: 'Vaughan@RealEstateLawyers.ca',
        location: {lat: 43.8040647985852, lng: -79.54051483420218},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 8,
        placeId: 1,
        locationName: 'Mississauga',
        img: '8-1.jpg',
        firstTitle: '7111 Syntex Drive: 3rd Floor (401 & Derry)',
        secondTitle: 'Mississauga, Ontario, L5N 8C3',
        tel: '(289) 351-1192',
        fax: '(855) 466-3803',
        email: 'Mississauga@RealEstateLawyers.ca',
        location: {lat: 43.60683888940275, lng: -79.75606753234273},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 8,
        placeId: 2,
        locationName: 'Mississauga',
        img: '8-2.jpg',
        firstTitle: '2680 Matheson Blvd East: Suite 102 (401 & 427)',
        secondTitle: 'Mississauga, Ontario, L4W 0A5',
        tel: '(289) 351-1192',
        fax: '(855) 466-3803',
        email: 'Mississauga@RealEstateLawyers.ca',
        location: {lat: 43.661917440515936, lng: -79.59999553234482},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 8,
        placeId: 3,
        locationName: 'Mississauga',
        img: '8-3.jpg',
        firstTitle: '77 City Centre Dr. East Tower: Suite 501 (near Square One)',
        secondTitle: 'Mississauga, Ontario, L5B 1M5',
        tel: '(289) 351-1192',
        fax: '(855) 466-3803',
        email: 'Mississauga@RealEstateLawyers.ca',
        location: {lat: 43.59259015938337, lng: -79.6374327249342},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 9,
        placeId: 1,
        locationName: 'Brampton',
        img: '9-1.jpg',
        firstTitle: '2 County Court Blvd: Suite 400 (407 & Hurontario)',
        secondTitle: 'Brampton, Ontario, L6W 3W8',
        tel: '(289) 351-1198',
        fax: '(855) 466-3803',
        email: 'Brampton@RealEstateLawyers.ca',
        location: {lat: 43.66313274521787, lng: -79.72735425747682},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 10,
        placeId: 1,
        locationName: 'Oakville',
        img: '10-1.jpg',
        firstTitle: '277 Lakeshore Rd E., Suite 408',
        secondTitle: 'Oakville, Ontario, L6J 6J3',
        tel: '(289) 351-1202',
        fax: '(855) 466-3803',
        email: 'Oakville@RealEstateLawyers.ca',
        location: {lat: 43.44740695252002, lng: -79.66629401143672},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 11,
        placeId: 1,
        locationName: 'Burlington',
        img: '11-1.jpg',
        firstTitle: '1100 Burloak Dr: Suite 300 (QEW/403 & Burloak)',
        secondTitle: 'Burlington, Ontario, L7L 6B2',
        tel: '(289) 351-1199',
        fax: '(855) 466-3803',
        email: 'Burlington@RealEstateLawyers.ca',
        location: {lat: 43.39661189406153, lng: -79.75924147095881},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 12,
        placeId: 1,
        locationName: 'Hamilton',
        img: '12-1.jpg',
        firstTitle: '1 Hunter Street East, Ground Floor (Hunter & John)',
        secondTitle: 'Hamilton, Ontario, L8N 3W1',
        tel: '(289) 975-4371',
        fax: '(855) 466-3803',
        email: 'Hamilton@RealEstateLawyers.ca',
        location: {lat: 43.253931560704565, lng: -79.8682418082535},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 13,
        placeId: 1,
        locationName: 'Ottawa',
        img: '13-1.jpg',
        firstTitle: "251 Laurier Avenue West, Suite 900 (Laurier Ave W & O'Connor St.)",
        secondTitle: 'Ottawa, Ontario, K1P 5J6',
        tel: '(613) 903-4422',
        fax: '(613) 714-9882',
        email: 'Ottawa@RealEstateLawyers.ca',
        location: {lat: 45.419769861607385, lng: -75.69633444034838},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 13,
        placeId: 2,
        locationName: 'Ottawa',
        img: '13-2.jpg',
        firstTitle: "21730 St. Laurent Blvd., Unit 800 (St. Laurent Blvd., & Industrial Ave.)",
        secondTitle: 'Ottawa, Ontario, K1G 5L1',
        tel: '(613) 903-4422',
        fax: '(613) 714-9882',
        email: 'Ottawa@RealEstateLawyers.ca',
        location: {lat: 45.40608499628225, lng: -75.62761659008392},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 13,
        placeId: 3,
        locationName: 'Ottawa',
        img: '13-3.jpg',
        firstTitle: "555 Legget Drive, Tower A, Suite 304 (March Rd. & & Terry Fox Dr.)",
        secondTitle: 'Kanata, Ontario, K2K 2X3',
        tel: '(613) 903-4422',
        fax: '(613) 714-9882',
        email: 'Ottawa@RealEstateLawyers.ca',
        location: {lat: 45.34914188015843, lng: -75.91903781706561},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 13,
        placeId: 4,
        locationName: 'Ottawa',
        img: '13-4.jpg',
        firstTitle: "15 Fitzgerald Road, Suite 200 (Moodie Dr. & Robertson Rd.)",
        secondTitle: 'Ottawa, Ontario, K2H 9G1',
        tel: '(613) 903-4422',
        fax: '(613) 714-9882',
        email: 'Ottawa@RealEstateLawyers.ca',
        location: {lat: 45.32525897113012, lng: -75.83584281574076},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 14,
        placeId: 1,
        locationName: 'Stouffville',
        img: '14-1.jpg',
        firstTitle: '6323 Main Street (Main & Mill)',
        secondTitle: 'Stouffiville, Ontario, L4A 1G9',
        tel: '(289) 319-0430',
        fax: '(905) 477-6778',
        email: 'Stouffville@RealEstateLawyers.ca',
        location: {lat: 39.013041151988844, lng: -94.58761268429379},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 15,
        placeId: 1,
        locationName: 'Aurora',
        img: '15-1.jpg',
        firstTitle: '16 Industrial Parkway South, Unit 321 (Yonge Street & Wellington Street East)',
        secondTitle: 'Aurora, Ontario, L4G 0R4',
        tel: '(289) 319-0981',
        fax: '(289) 319-0982',
        email: 'Mississauga@RealEstateLawyers.ca',
        location: {lat: 44.00048675509498, lng: -79.4558448715096},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 16,
        placeId: 1,
        locationName: 'Barrie',
        img: '16-1.jpg',
        firstTitle: '92 Caplan Avenue, Suite 411 (Hwy 400 & Mapleview Drive West)',
        secondTitle: 'Barrie, Ontario, L4N 9J2',
        tel: '(705) 417-0206',
        fax: '(705) 417-0208',
        email: 'Barrie@RealEstateLawyers.ca',
        location: {lat: 44.33864255514727, lng: -79.69700881887857},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 17,
        placeId: 1,
        locationName: 'Pickering',
        img: '17-1.jpg',
        firstTitle: '1099 Kingston Road, Suite 5A (Kingston Road & Dixie Road)',
        secondTitle: 'Pickering, Ontario, L1V 1B5',
        tel: '(289) 539-0157',
        fax: '(855) 466-3803',
        email: 'Pickering@RealEstateLawyers.ca',
        location: {lat: 43.82797421940586, lng: -79.09642277705909},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 18,
        placeId: 1,
        locationName: 'Ajax',
        img: '18-1.jpg',
        firstTitle: '700 Finley Avenue, Units 4 & 5 (Finley Ave & Clements Rd West)',
        secondTitle: 'Ajax, Ontario, L1S 3Z2',
        tel: '(289) 539-0155',
        fax: '(289) 539-0156',
        email: 'Ajax@RealEstateLawyers.ca',
        location: {lat: 43.830075774279564, lng: -79.02564097891118},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 19,
        placeId: 1,
        locationName: 'Whitby',
        img: '19-1.jpg',
        firstTitle: '105 Consumers Drive: Unit 2 (Consumers & Hopkins)',
        secondTitle: 'Whitby, Ontario, L1N 1C4',
        tel: '(289) 351-1201',
        fax: '(855) 466-3803',
        email: 'Whitby@RealEstateLawyers.ca',
        location: {lat: 43.86883590002977, lng: -78.91764223050065},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 20,
        placeId: 1,
        locationName: 'Kitchener',
        img: '20-1.jpg',
        firstTitle: '22 Frederick St, Suite 700 (Frederick St & Duke St. E)',
        secondTitle: 'Kitchener, Ontario, N2H 6M6',
        tel: '(226) 213-4060',
        fax: '(855) 466-3803',
        email: 'Kitchener@RealEstateLawyers.ca',
        location: {lat: 43.45018250071661, lng: -80.48762953418883},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 21,
        placeId: 1,
        locationName: 'London',
        img: '21-1.jpg',
        firstTitle: '380 Wellington Street, Tower B, Suite 600 (Wellington & Dundas)',
        secondTitle: 'London, Ontario, N6A 5B5',
        tel: '(226) 213-4061',
        fax: '(855) 466-3803',
        email: 'London@RealEstateLawyers.ca',
        location: {lat: 42.981776368211726, lng: -81.24282491750328},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 22,
        placeId: 1,
        locationName: 'Waterloo',
        img: '22-1.png',
        firstTitle: '22 King Street South, Suite 300 (King Street South & Erb Street East)',
        secondTitle: 'Waterloo, Ontario, N2J 1N8',
        tel: '(226) 213-4420',
        fax: '(855) 466-3803',
        email: 'Waterloo@RealEstateLawyers.ca',
        location: {lat: 43.46485033139748, lng: -80.52162204768139},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 23,
        placeId: 1,
        locationName: 'Windsor',
        img: '23-1.jpg',
        firstTitle: '1501 Howard Ave Unit 101 (Howard Ave & Shepherd St. E)',
        secondTitle: 'Windsor, Ontario, N8X 3T5',
        tel: '',
        fax: '',
        email: 'Windsor@RealEstateLawyers.ca',
        location: {lat: 42.30288530966315, lng: -83.02032242065415},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 24,
        placeId: 1,
        locationName: 'North Bay',
        img: '24-1.png',
        firstTitle: '347 Sherbrooke St., Suite 504, Ontario, (Major Intersection: Main St. E & Sherbrooke St.)',
        secondTitle: 'North Bay, Ontario, P1B 2C1',
        tel: '(705) 995-3344',
        fax: '(855) 466-3803',
        email: 'NorthBay@RealEstateLawyers.ca',
        location: {lat: 46.30787643923462, lng: -79.46046802689143},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 25,
        placeId: 1,
        locationName: 'Sudbury',
        img: '25-1.png',
        firstTitle: '1191 Lansing Avenue, Unit 1 (Nearest Major Intersection: Lansing Ave & Lasalle Blvd.)&l',
        secondTitle: 'Sudbury, Ontario, P3A 5C5',
        tel: '(705) 419-2611',
        fax: '(855) 466-3803',
        email: 'Sudbury@RealEstateLawyers.ca',
        location: {lat: 46.523741029892754, lng: -80.93033386499607},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 26,
        placeId: 1,
        locationName: 'Peterborough',
        img: '26-1.png',
        firstTitle: '398 McDonnel St., Unit 4 (Major Intersection: Park St. N. & McConnel St.)',
        secondTitle: 'Peterborough, Ontario, K9H 2X4',
        tel: '(705) 419-2611',
        fax: '(855) 466-3803',
        email: 'Peterborough@RealEstateLawyers.ca',
        location: {lat: 44.30952696146046, lng: -78.32981276596544},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 27,
        placeId: 1,
        locationName: 'Niagara Falls',
        img: '27-1.jpg',
        firstTitle: '15 - 4025 Dorchester Road, Suite# 344 (Major Intersection: Thorold Stone Rd. & Dorchester Rd.)',
        secondTitle: 'Niagara Falls, Ontario , L2E 7K8',
        tel: '(365) 447-0080',
        fax: '(855) 466-3803',
        email: 'NiagaraFalls@RealEstateLawyers.ca',
        location: {lat: 43.11469508563387, lng: -79.11197561512824},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 28,
        placeId: 1,
        locationName: 'Kingston',
        img: '28-1.jpg',
        firstTitle: '221 Queen Street (Major Intersection Queen St. & Clergy St.E.)',
        secondTitle: 'Kingston, Ontario, K7K 1B4',
        tel: '(613) 417-3980',
        fax: '(855) 466-3803',
        email: 'Kingston@RealEstateLawyers.ca',
        location: {lat: 43.44729903897742, lng: -80.4910987709607},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 29,
        placeId: 1,
        locationName: 'St. Thomas',
        img: '29-1.jpg',
        firstTitle: '28 Princess Ave., Suite 20098 (Nearest Major Intersection: Princess Ave. & Centre St.)',
        secondTitle: 'St. Thomas, Ontario, N5R 3V4',
        tel: '(226) 213-4061',
        fax: '(855) 466-3803',
        email: 'StThomas@RealEstateLawyers.ca',
        location: {lat: 42.777229354625554, lng: -81.19205832834368},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 30,
        placeId: 1,
        locationName: 'Orangeville',
        img: '30-1.jpeg',
        firstTitle: '10 Zina Street (Nearest Major Intersection: Zina St. & First St.)',
        secondTitle: 'Orangeville, Ontario, L9W 1E1',
        tel: '(226) 916-5630',
        fax: '(855) 466-3803',
        email: 'Orangeville@RealEstateLawyers.ca',
        location: {lat: 43.920084859830304, lng: -80.09703538870261},
        getInfo: function() {
            return getPlaceCard(this);
        }
    },
    {
        locationId: 31,
        placeId: 1,
        locationName: 'Woodstock',
        img: '31-1.jpg',
        firstTitle: '(Nearest Major Intersection: Simcoe St. & Metcalf St.)',
        secondTitle: 'Woodstock, Ontario , N4S 1K1',
        tel: '(519) 290-2221',
        fax: '(905) 477-6778',
        email: 'Woodstock@RealEstateLawyers.ca',
        location: {lat: 43.12905675070632, lng: -80.75655097465278},
        getInfo: function() {
            return getPlaceCard(this);
        }
    }
]

let currentPlacesMarker = [];

var locations;
//let map;
let locationsOnView = [];
function addListToDom() {

    let obj = {};
    let parent = ``;
    let txt = '';
    for (const index of locationsOnView) {
        if (txt == placesInfo[index].locationName) {
            obj[placesInfo[index].locationName].push(
                [
                    placesInfo[index].marker,
                    placesInfo[index].secondTitle
                ]
            )
        } else {
            txt = placesInfo[index].locationName;
            obj[placesInfo[index].locationName] = [
                [
                    placesInfo[index].marker,
                    placesInfo[index].secondTitle
                ]
            ];
        }
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const places = obj[key];
            currentPlacesMarker.push({
                location: key,
                places: places,
            });
            parent += `<li class="list_item col-5 position-relative">
                        <div class="d-flex justify-content-between mb-2 pointer">
                            <span class="txt text-capitalize">${key}</span>
                            <span class="num">(${places.length})</span>
                        </div>
                        <ul class="sub-list list-unstyled pl-4">`;
            for (const [index, place] of places.entries()) {
                //markerIndex++;
                parent += `
                            <li class="sub-list-item pointer my-2" onclick='triggerMarker("${key}","${index}")'>${place[1]}</li>`
            }
            parent += `</ul>
                    </li>`;
        }
    }
    $("#location-list-items").html(parent);
    
    
}
let gmarkers = [];

function getPlaceCard($this) {
    return `<div class="card-overlay border-0">
    <div class="card position-relative border-0">
        <img class="card-img-top" src="./imgs/location/${$this.img}" alt="card image" />
        <div class="card-body">
            <div class="text">${$this.firstTitle}</div>
            <!--
            <div class="text">321 Cityview Blvd, Unit 3</div>
            <div class="text">(Hwy 400 & Major Mackenzie)</div>
            -->
            <h3 class="h6 card-text my-3 font-weight-bold">${$this.secondTitle}</h3>
            <ul class="list-unstyled contact-list fa-ul ml-4">
                <li class="contact-item mb-2">
                    <span class="fa-li icon">
                        <i class="fas fa-phone fa-rotate-90"></i>
                    </span>
                    <span class="txt text-muted">${$this.tel}</span>
                </li>
                <li class="contact-item mb-2">
                    <span class="fa-li icon">
                        <i class="fas fa-fax"></i>
                    </span>
                    <span class="txt text-muted">${$this.fax}</span>
                </li>
                <li class="contact-item mb-2">
                    <span class="fa-li icon">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="txt text-muted">${$this.email}</span>
                </li>
            </ul>
        </div>
    </div>
    </div>`    
}
var map;
var marker;
var infowindow;
var markers = [];
function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.854681047026794, lng: -79.55105215192812 }, 
        zoom: 8,
    });
    const card = document.getElementById("pac-card");
    const input2 = document.querySelector(".search-box-overlay input");
    let autocomplete2 =  new google.maps.places.Autocomplete(input2);
    
    
    const input = document.getElementById("search_input");
    let autocomplete =  new google.maps.places.Autocomplete(input);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
    //const autocomplete = new google.maps.places.Autocomplete(input);
    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    //autocomplete.bindTo("bounds", map);
    // Set the data fields to return when the user selects a place.
    //autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
    infowindow = new google.maps.InfoWindow();
    marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
        position: { lat: 43.854681047026794, lng: -79.55105215192812 }
    });
    loadAllLocationsWithHeadOffice();
    /*
    infowindow.setContent(placesInfo[11].getInfo());
    infowindow.open(map, marker);
    */
    autocomplete.addListener("place_changed", () => {
        //map.setOptions({zoom: 8});
        $('.search-txt').on('click', function() {

            if (($("#search_input").val()).trim() == '') {
                loadAllLocationsWithHeadOffice();
            } else {
                infowindow.close();
                marker.setVisible(false);
                resetAllMarkers();
                const place = autocomplete.getPlace();
                if (!place.geometry) {
                    // User entered the name of a Place that was not suggested and
                    // pressed the Enter key, or the Place Details request failed.
                    window.alert("No details available for input: '" + place.name + "'");
                    return;
                }
                map.setZoom(8);
                // If the place has a geometry, then present it on a map.
                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                    map.setZoom(10);
                } else {
                    map.setCenter(place.geometry.location);
                    map.setZoom(10); // Why 17? Because it looks good.
                }
                let currentPlaceLocation = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
                locationsOnView = [];
                for (let i = 0; i < placesInfo.length; i++) {
                    //console.log(arePointsNear(placesInfo[i].location, currentPlaceLocation));
                    if (arePointsNear(placesInfo[i].location, currentPlaceLocation)) {
                        //console.log(place.geometry.viewport);
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(placesInfo[i].location),
                            map: map
                        });
                        gmarkers.push(marker);
                        placesInfo[i].marker = marker;
                        locationsOnView.push(i);
                        google.maps.event.addListener(marker, 'click', (function (marker, i) {
                            return function () {
                                infowindow.setContent(placesInfo[i].getInfo());
                                infowindow.open(map, marker);
                            }
                        })(marker, i));
                    }
                    
                }
                if (locationsOnView.length == 0) {
                    $(".location-section .resultNotFound").removeClass('d-none');
                    setTimeout(function() {
                        $(".location-section .resultNotFound").addClass('d-none');
                    }, 2000);
                    loadAllLocationsWithHeadOffice();
                } else {
                    addListToDom();
                }
            }
            
            
            
            /*
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);
    
            google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                    infowindow.setContent(placesInfo[0].getInfo());
                    infowindow.open(map, marker);
                }
            })(marker));
            */
        });
        
    });

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
}

function loadAllLocationsWithHeadOffice() {
    //resetAllMarkers();
    infowindow.close();
    marker.setVisible(false);
    resetAllMarkers();
    locationsOnView = [];
    for (let i = 0; i < placesInfo.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(placesInfo[i].location),
            map: map
        });
        gmarkers.push(marker);
        placesInfo[i].marker = marker;
        locationsOnView.push(i);
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(placesInfo[i].getInfo());
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    /*
    */
    infowindow.setContent(placesInfo[11].getInfo());
    marker.setPosition({ lat: 43.854681047026794, lng: -79.55105215192812 });
    infowindow.open(map, marker);




    /*
    marker = new google.maps.Marker({
        position: new google.maps.LatLng({ lat: 43.854681047026794, lng: -79.55105215192812 }),
        map: map
    });
    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infowindow.setContent(placesInfo[11].getInfo());
            infowindow.open(map, marker);
            
            console.log(place.geometry.viewport);
        }
    })(marker));
    */
    
    
    
    /*
    marker = new google.maps.Marker({
        position: new google.maps.LatLng({ lat: 43.854681047026794, lng: -79.55105215192812 }),
        map: map
    });
    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infowindow.setContent("content from function");
            infowindow.open(map, marker);
        }
    })(marker));
    */
    //marker.setPosition(myLatlng);
    addListToDom();
}


function arePointsNear(checkPoint, centerPoint, km = 30) {
    let ky = 40000 / 360;
    let kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    let dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    let dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
}
/*
let checkPoint = { lat: 43.73651491980686, lng: -79.37049451731369 }; 
let centerPoint = {lat: 43.64877591724139, lng: -79.3810036077403};

let n = arePointsNear(vasteras, stockholm, 10);

console.log(n);


new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    center: {lat: 43.64877591724139, lng: -79.3810036077403},
    radius: Math.sqrt(2714856) * 5,
})
*/


function clickMarker(ele) {
    console.log(ele);
}



function triggerMarker(key, index) {
    //google.maps.event.trigger({lat: 43.70737785820043, lng: -79.39938632070653}, 'click');
    //console.log(locationLatLng.lat);
    //console.log(currentPlacesMarker);
    let filteredPlace = currentPlacesMarker.filter(item => item.location == key);
    let targetMarker = (filteredPlace[0].places[index])[0];
    google.maps.event.trigger(targetMarker, 'click');
    /*
    var e = {
        latLng: new google.maps.LatLng(locationLatLng.lat, locationLatLng.lng)
    };
    */
    //google.maps.event.trigger(e, 'click', map);
    //google.maps.event.trigger(markers[5], 'click');
}

function resetAllMarkers() {
    for(i=0; i<gmarkers.length; i++){
        gmarkers[i].setMap(null);
    }
    for (const location of placesInfo) {
        location.marker = null;
    }
}

$(function() {
    $('.search-box-overlay .search-txt').on('click', function(e) {
        let input = $(this).parents(".in-group").find('input');
        let inputValue = input.val();
        globalInputValue = inputValue;
        if ($(this).hasClass('location-search') == false) {
            $('.search-box-overlay').fadeOut();
            $('#search_input').val(inputValue);
        }
        //console.log($(this).hasClass('location-search'));
    });
    //const input = document.querySelector(".search-box-overlay input");
    //let autocomplete2 =  new google.maps.places.Autocomplete(input);
    
});