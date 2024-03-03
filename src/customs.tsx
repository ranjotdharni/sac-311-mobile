//                              //
//             Imports          //
//                              //

import { StyleSheet } from 'react-native'

//                              //
//      Static Types Section    //
//                              //

export interface responseType {
    attributes: {
        ReferenceNumber : string, 
        CategoryLevel1 : string, 
        CategoryLevel2 : string, 
        CategoryName : string, 
        CouncilDistrictNumber : string, 
        DateCreated : number, 
        DateUpdated : number, 
        DateClosed : number, 
        CrossStreet : string, 
        ZIP : string, 
        SFTicketID : string, 
        Address : string, 
        Data_Source : string, 
        PublicStatus : string, 
        Neighborhood : string, 
        SourceLevel1 : string
    },
    geometry: {
        x: number, //longitude
        y: number  //latitude
    }
}

//                              //
//      Dummy Data Section      //
//                              //

const symbolReference = [
    {category: 'Animal Control', url: '9750d7d29ebe0f642bb414e7bb60a4d4'},
    {category: 'Building and Planning', url: '6f30eb2bf6323ab0383e57efab6c3dc1'},
    {category: 'Code Enforcement', url: 'e3dea662e30e1a880f31107ed2743d65'},
    {category: 'Drains', url: 'eedca6fac77ce62660fb33ee2b1e26a5'},
    {category: 'Facilities', url: '6fa0605b4d17e4fe7323cbbd0a40f3d2'},
    {category: 'Non-City', url: 'dbc53d72aa7fd12b0e35b259d8d05bc3'},
    {category: 'Homeless Camp', url: 'f0b03999436715744d4f42082d55837d'},
    {category: 'Parking', url: '3628d2b19fb65fa59c7760ac37ff392a'},
    {category: 'Parks', url: '88af0c6e7fd1f8f47e1283175cee8852'},
    {category: 'Sewer', url: '293d2daab0bc638de963005561a98a58'},
    {category: 'Solid Waste', url: '768a6272c424eb7c57837e0e5c4d0813'},
    {category: 'Streets', url: '86b083a8af0adc7acfc753f0d052689e'},
    {category: 'Urban Forestry', url: '2aee2d289cca97d5dc7c8c380b325ed8'},
    {category: 'Utility Billing', url: '77150615e9ef53a65a6cae6612e17c2d'},
    {category: 'Water', url: '334ddb09d796886d797edc23f896a2c2'},
    {category: 'Email Review', url: '48c427e81f51f55c6dfe8cd916106429'},
    {category: 'Shared Rideables', url: 'bc4c127d82817d628a6015ccdf073e63'},
    {category: 'Escalation', url: 'f3a7dd9487d9ca03b00ce5f015b8061c'},
    {category: 'Other', url: 'a7427c700f875c2e789f93802fc4d1fd'},
]

export const dummyDataHome = [
    {
        category: 'Dead Animal',
        type: 'Animal',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'Open'
    },
    {
        category: 'Parking Violation',
        type: 'Auto',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'In-Progress'
    },
    {
        category: 'Irrigation',
        type: 'Water',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'In-Progress'
    },
    {
        category: 'General Parking',
        type: 'Auto',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'Closed'
    },
    {
        category: 'Stray or Loose Animal',
        type: 'Animal',
        number: Math.floor( Math.random() * 1000000 ),
        date: new Date(),
        status: 'Closed'
    },
]

export const dummyDataFAQ = [
    {
        tags: '',
        type: 'App Functionality',
        key: 1,
        question: 'How can I make requests on the map?',
        answer: 'Choose any address on the map, then click "Make A New Request" to make a new request.'
    },
    {
        tags: '',
        type: 'App Functionality',
        key: 2,
        question: 'How can I make a request in the app?',
        answer: 'You can make a request by clicking on the blue plus button on the center of the navigation bar.'
    },
    {
        tags: '',
        type: 'Services',
        key: 3,
        question: 'What services are offered by 311?',
        answer: '311 offers a large variety of services, all of which can be found on the Services page, which can be found under the Resources tab.'
    },
    {
        tags: '',
        type: 'Services',
        key: 4,
        question: 'How can I find more information about a particular service offered?',
        answer: 'You can find more information by clicking on one of the offered services on the Services page, which can be found under the Resources tab.'
    },
    {
        tags: '',
        type: 'General',
        key: 5,
        question: 'How long will it take for my request to be serviced?',
        answer: 'Request service times vary, but if your request has been submitted, we assure we are working on it. In case of an emergency, please instead call 911.'
    },
    {
        tags: '',
        type: 'General',
        key: 6,
        question: 'Who can I contact if I am having issues making requests?',
        answer: 'If you would like to talk directly to a city employee, please dial 311 to make a request over the phone.'
    },
]

export const dummyDataNews = [
    {
        title: 'Modern Innovations in Forensic Technology Show Promising Results',
        uri: 'https://media.wired.co.uk/photos/606db6c4e46630a583ab3275/master/w_1600,c_limit/iStock_92896435_LARGE.jpg',
        url: 'https://www.wired.co.uk/article/crime-scene-technology',
        description: 'Sir Bernard Spilsbury was - by modern standards - an unlikely celebrity. As a forensic pathologist, he delved inside dead bodies to discover the truth behind some of the most notorious murders in the first half of the 20th century.',
    },
    {
        title: 'Tribute for Maine Mass Shooting Attracts Thousands',
        uri: 'https://i0.wp.com/sacramentocityexpress.com/wp-content/uploads/2021/08/stephen-leonardi-ExpyK79Dx_w-unsplash.jpg?fit=5407%2C3605&ssl=1',
        url: 'https://fox40.com/news/national/ap-us-news/ap-more-than-1000-pay-tribute-to-maines-mass-shooting-victims-on-day-of-prayer-reflection-and-hope/',
        description: 'LEWISTON, Maine (AP) — Authorities in Maine spent Monday continuing to piece together the events that led to the worst mass shooting in the state’s history — with the suspect’s record of interaction with police and warning signs involving mental illness and violent threats emerging as key threads.',
    },
    {
        title: 'Domestic Violence Awareness Month',
        uri: 'https://www.saccounty.gov/news/latest-news/SiteAssets/Domestic%20Violence%20Awareness%20Month.png',
        url: 'https://www.saccounty.gov/news/latest-news/Pages/Uniting-Against-Domestic-Violence.aspx',
        description: 'October is Domestic Violence Awareness Month. Sacramento County’s Department of Child, Family and Adult Services (DCFAS) partners with several organizations to help victims of domestic violence. This month, DCFAS is raising awareness about domestic violence and sharing information about the services available.',
    },
]

//                                      //
//       Custom Functions Section       //
//                                      //

export function inclusiveRandom(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateSudoId(digits: number)
{
    return Math.floor(Math.random() * Math.pow(10, Math.max(1, digits)))
}

//=====================================================================================================================================================================================//
//The below function generates a date string in a given format from a given Date object, the format string paramter is case insensitive                                                //
//arg1 can be any string but must include the following 3 substrings IN ANY ORDER ANYWHERE IN THE STRING (CASE INSENSITIVE): ('mm' OR 'mmm') AND ('dd' OR 'ddd') AND ('yy' OR 'yyyy')  //
//=====================================================================================================================================================================================//
//                                                                                                                                                                                     //
//FORMAT EXAMPLES: Using a Date object generated on 10/31/2023 (the date at the time of writing this [ Happy Halloween :) ])                                                           // 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//  Use         Format           Output                                                                                                                                                //
// Month    'mm' OR 'MM'     :     10                                                                                                                                                  //
// Month    'mmm' OR 'MMM'   :    Oct                                                                                                                                                  //
//  Day     'dd' OR 'DD'     :     31                                                                                                                                                  //
//  Day     'ddd' OR 'DDD'   :    Tue                                                                                                                                                  //
// Year     'yy' OR 'YY'     :     23                                                                                                                                                  //
// Year     'yyyy' OR 'YYYY' :   2023                                                                                                                                                  //
//                                                                                                                                                                                     //
//USAGE EXAMPLE: Using a Date object generated on 10/31/2023                                                                                                                           //
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// dateToFormat('MMM dd, yYyY', new Date()) -> outputs string 'Oct 31, 2023'            !!!!!!!!!!!!!!!!EXAMPLE ON THIS LINE!!!!!!!!!!!!!!!!                                           //
//                                                                                                                                                                                     //
//=====================================================================================================================================================================================//
export function dateToFormat(arg1: string, arg2: Date): string
{
    let str = arg1.toLowerCase().slice()
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    let mm = (str.includes('mmm') ? 'mmm' : 'mm')
    let dd = (str.includes('ddd') ? 'ddd' : 'dd')
    let yy = (str.includes('yyyy') ? 'yyyy' : 'yy')

    str = str.replace(mm, (mm === 'mm' ? (arg2.getMonth() + 1).toString().padStart(2, '0') : monthNames[arg2.getMonth()]))
    str = str.replace(dd, (dd === 'dd' ? (arg2.getDate()).toString().padStart(2, '0') : dayNames[arg2.getDay()]))
    str = str.replace(yy, (yy === 'yyyy' ? (arg2.getFullYear()).toString() : arg2.getFullYear().toString().slice(-2)))

    return str
}

//==============================================================//
//  Encodes query paramters according to arcGIS specifications  //
//==============================================================//

function encodeQueryParamter(query: string): string {
    let encodedString = encodeURIComponent(query)                   //basic URI encoding
    encodedString = encodedString.replace(/%20/g, '+')              //replace whitespaces with '+'
    encodedString = encodedString.replace(/'/g, '%' + (`'`).charCodeAt(0).toString(16))  //encode `'`, `(`, and `)` characters
    encodedString = encodedString.replace(/\(/g, '%' + ('(').charCodeAt(0).toString(16))
    encodedString = encodedString.replace(/\)/g, '%' + (')').charCodeAt(0).toString(16))
    return encodedString
}

//====================================================================//
//  Generates full request string to arcGIS endpoint, ready to fetch  //
//====================================================================//

export function generateEndpointUrl(whereClause: string | undefined, resultCount: number, paramters: Array<[string, string]>): string {
    // The endpoint's origin
    const endpointOrigin: string = 'https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/SalesForce311_View/FeatureServer/0/query?'

    // A where clause is necessary for every query so set default (I used OBJECTID to accomplish this because it should never be null)
    const defaultWhereClause: string = 'where=' + encodeQueryParamter('OBJECTID IS NOT NULL') + (whereClause !== undefined ? encodeQueryParamter(` AND ${whereClause}`) : '')

    // Set the required response fields, specify geometry required, specify spatial reference, specify json response format
    const defaultParameters: string = '&outFields=ReferenceNumber%2C+CategoryLevel1%2C+CategoryLevel2%2C+CategoryName%2C+CouncilDistrictNumber%2C+DateCreated%2C+DateUpdated%2C+DateClosed%2C+CrossStreet%2C+ZIP%2C+SFTicketID%2C+Address%2C+Data_Source%2C+PublicStatus%2C+Neighborhood%2C+SourceLevel1&returnGeometry=true&outSR=4326&inSR=4326&f=pjson'

    // initialize query string
    let queryString = endpointOrigin + defaultWhereClause

    // append any passed in parameters
    paramters.forEach((item) => {
        queryString += `&${item[0]}=${encodeQueryParamter(item[1])}`
    })

    queryString += `&resultRecordCount=${Math.max(1, resultCount)}` // append the required number of response results
    queryString += defaultParameters                                // append the default parameters

    return queryString
}

//==========================================================================================================//
//  Generate full request string to icon images endpoint based on CategoryLevel1 of object, ready to fetch  //
//  Also provides default url in case CategoryLevel1 is not matched to any existing value                   //
//==========================================================================================================//

export function generateSymbolUrl(categoryLevel1: string): string {
    const endpointOrigin: string = 'https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/SalesForce311_View/FeatureServer/0/images/'  // the image endpoint origin

    for (let i = 0; i < symbolReference.length; i++) {  // loop through symbol reference
        let subject = symbolReference[i]

        if (subject.category === categoryLevel1) {  // if category match...
            return endpointOrigin + subject.url     // return image endpoint origin with corresponding url appended
        }
    }

    return endpointOrigin + '361c2dfe548d1b53b9da23f9219a630d'  // no category match found? Return image endpoint origin with default url appended
}

//==========================================//
//  Get date from given number of days ago  //
//==========================================//

export function dateAtDaysAgo(daysAgo: number): Date {
    const dateNow: Date = new Date()
    dateNow.setDate(dateNow.getDate() - daysAgo)
    return dateNow
}

//                                      //
//         Custom Styles Section        //
//                                      //

export const shadowUniversal = StyleSheet.create({ 
    default: {
        shadowColor: 'black', 
        shadowOffset: { 
            width: -2, 
            height: 4 
        }, 
        shadowOpacity: 0.33, 
        shadowRadius: 10,
        elevation: 5,
    },
    
    homeHeader: {
        shadowColor: 'black', 
        shadowOffset: { 
            width: 0,
            height: 4 
        }, 
        shadowOpacity: 0.33, 
        shadowRadius: 2,
        elevation: 5,
    }
})

//                                      //
//         Global Values Section        //
//                                      //

export const global = {
    baseBackground100: '#ffffff',

    baseBlue100: '#2F2DA3',
    baseBlue200: 'rgba(47, 45, 163, 0.5)',

    baseGold100: '#BEA315',
    baseGold200: 'rgba(190, 163, 21, 0.5)',
    baseGold300: 'rgba(190, 163, 21, 0.33)',

    baseGrey100: '#6F6F6F',
    baseGrey200: 'rgba(112, 112, 112, 0.7)'
}


//                                      //
//         Global Font Section          //
//                                      //
// this value is designed to be read by every entity that displays text
// the user may change the font of the entire app, by making a selection in the settings page

let chosenFont: string = 'jbm';

export const globalFont= {
    chosenFont : chosenFont
}

export function fontSetter(newFont:string){
    globalFont.chosenFont = newFont;
}

export function fontGetter(){
    return globalFont.chosenFont;
}

//                                      //
//         Global Color Theme Section   //
//                                      //
// this value is designed to be read by every entity that displays color
// the user may change the color theme of the entire app, by making a selection in the settings page

let chosenColorTheme: any = 'lightMode';


export const globalColorTheme= {
    chosenColorTheme : chosenColorTheme,
    backgroundColor : '#808080',
    color : '#ffffff',
    theme : 'globalTheme'

}

export function colorThemeSetter(newTheme:string){
    globalColorTheme.chosenColorTheme = newTheme;
    if (newTheme == 'lightTheme'){
        chosenColorTheme.backgroundColor = '#000000';
        chosenColorTheme.color = '#ffffff';
        globalColorTheme.theme = 'lightTheme';
        globalColorTheme.backgroundColor = '#000000';
        globalColorTheme.color = '#ffffff';
    }
    
    else if (newTheme == 'darkTheme'){
        chosenColorTheme.backgroundColor = '#ffffff';
        chosenColorTheme.color = '#000000';
        globalColorTheme.theme = 'darkTheme';
        globalColorTheme.backgroundColor = '#ffffff';
        globalColorTheme.color = '#000000';
    }

}

export function colorThemeGetter(){
    return globalColorTheme.color;
    

}
