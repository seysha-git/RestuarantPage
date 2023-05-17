console.log('hello')
const quoteTexts = document.querySelector('#authorText')
const authors = document.querySelector('#author')
const quoteReviews = document.querySelector('.reviews-quotes')


const quotes = [
    {
        author: 'Seyon Shanthan',
        text : 'The award-winning chefs use the best quality ingredients to produce dishes that are simply delightful. '
    },
    {
        author: ' J.K. Rowling',
        text : 'The food at this restaurant was exquisite! Every dish was bursting with flavor and beautifully presented. The service was also top-notch. '
    },
    {
        author: 'Michelle Obama',
        text : 'This restaurant exceeded my expectations in every way. The food was delicious, the service was exceptional, and the ambiance was perfect. '
    },
    {
        author: 'Neil Gaiman',
        text : 'I had an amazing time at this restaurant. The food was fresh, flavorful, and beautifully presented. The staff was attentive and knowledgeable.'
    },
    {
        author: 'Chimamanda Ngozi Adichie',
        text : 'If you are a foodie, you absolutely must try this restaurant. The dishes are innovative and delicious, and the attention to detail is impressive.'
    },
]

const quoteGenerator = () => {
    let quotesLength = quotes.length
    console.log(quotesLength)

    let randomNumber = Math.floor(Math.random() * quotesLength)

    let quoteText = quotes[randomNumber].text
    let quoteAuthor = quotes[randomNumber].author

    console.log(quoteTexts)
    quoteTexts.innerHTML = `${quoteText}`
    authors.innerHTML = `${quoteAuthor}`  
    
}
const quoteFade = () => {
    quoteReviews.classList.toggle('quotesActive')
}
setInterval(quoteFade, 3200)
setInterval(quoteGenerator, 5400)
