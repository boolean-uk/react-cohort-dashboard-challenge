import imgElon from '../images/elon.jpg'
import imgZuck from '../images/zuck.jpg'
import imgTom from '../images/tom.jpg'

export default [
    {
        profileImage: imgElon,
        name: 'Elon Musk',
        handle: '@elonmusk',
        date: 'Jul 9',
        content: 'I\'m a jenius!',
        commentCount: 4,
        retweetCount: 13,
        heartCount: '5.2k',
        analyticsCount: '22.7k'
    },
    {
        profileImage: imgZuck,
        name: 'Mark Zuckerberg',
        handle: '@markzuckerberg',
        date: '9h',
        content: 'lol',
        commentCount: '1.5k',
        retweetCount: '2.3k',
        heartCount: '15.2k',
        analyticsCount: '82.9k',
        article: {
            image: imgElon,
            site: 'twitter.com',
            title: 'Elon: "Cheating isn\'t fair! WAGH!"',
            content: 'Billionaire cries that other billionaires are mean whilst millions starve amidst economic collapse.'
        }
    },
    {
        profileImage: imgTom,
        name: 'Tom',
        handle: '@myspacetom',
        date: '32m',
        content: 'This is wild',
        commentCount: '1.4k',
        retweetCount: '420k',
        heartCount: '45.7k',
        analyticsCount: '210k'
    },
]