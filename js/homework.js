"use sctict";
/**
 *? Функція має повертати рядок, в якому кожна літера, яку приймає функція розділена тире, але також кожна літера має повторитись певну кількість разів, залежно від її розташування
 */
const decodeAbbreviature = string =>
    string
        .toUpperCase()
        .split("")
        .reduce((acc, letter, i) => `${acc}-${letter}${letter.toLowerCase().repeat(i)}`);

console.log(decodeAbbreviature("abc"));
console.log(decodeAbbreviature("xyz"));

// Alina's solution
// const returnNewString = (str) => {
//     let arrayOfCapitals = str.toUpperCase().split("");
//     return arrayOfCapitals.reduce((acc, letter, index) => {
//         let newString = `${acc}-${letter}`;
//         for (let i = 0; i < index; i++) {
//             newString += letter.toLowerCase();
//         }
//         return newString;
//     });
// };

/**
 *? Поверніть об'єкт, в якому вказано кількість тегів.
 *? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
 */
const tweets = [
    {id: "000", likes: 5, tags: ["js", "nodejs"]},
    {id: "001", likes: 2, tags: ["html", "css"]},
    {id: "002", likes: 17, tags: ["html", "js", "nodejs"]},
    {id: "003", likes: 8, tags: ["css", "react"]},
    {id: "004", likes: 0, tags: ["js", "nodejs", "react"]},
];
function countTags(tweets) {
    const tagCounts = {};

    tweets.forEach(tweet => {
        tweet.tags.forEach(tag => {
            console.log(tag, tagCounts[tag]);
            // tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
            console.log(tagCounts);
        });
    });

    return tagCounts;
}

const tagCounts = countTags(tweets);
console.log(tagCounts);

// Alina's solution
// const returnObjTagsCount = array => {
//     const arrayOfTags = array.flatMap(tweet => tweet.tags);
//     return arrayOfTags.reduce((acc, tag) => (tag in acc ? {...acc, [tag]: ++acc[tag]} : {...acc, [tag]: 1}), {});
// };
// console.log(returnObjTagsCount(tweets));
