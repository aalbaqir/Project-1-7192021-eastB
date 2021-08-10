// console.log("hey")

document.addEventListener("DOMContentLoaded", () => {

    // let mascara = document.querySelector('div')

    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline") 
    .then(response => response.json())
    .then(makeup => {
         makeup.slice(47)
         console.log(makeup.slice(47));

        // console.log(makeup)
       
           
            const cardDiv = document.querySelector('.image-card')
            const card1 = document.querySelector('.image')
            card1.src = "https://d3t32hsnjxo7q6.cloudfront.net/i/6b4d354890177a73b4d6630d723c2f21_ra,w158,h184_pa,w158,h184.jpeg"
            console.log(card1)
            cardDiv.append()


            const cardDiv2 = document.querySelector('.image-card2')
            const card2 = document.querySelector('.image2')
            card2.src = "https://d3t32hsnjxo7q6.cloudfront.net/i/5d6e0d96f6dedbc3aadd88d9403cb26e_ra,w158,h184_pa,w158,h184.jpeg"
            console.log(card2)
            cardDiv2.append()


            //Mascara Name 

           
            // const addMascaraName = document.createElement ('h2')
            const mascaraName = document.querySelector ('.title')
            // console.log(mascaraName)
            mascaraName.textContent = makeup[47].name
            mascaraName.append()

            //  const addMascaraPrice = document.createElement ('h2')
             const mascaraPrice2 = document.querySelector ('.price')
             mascaraPrice2.textContent = makeup[47].price
             mascaraPrice2.append()

             const mascaraName2 = document.querySelector ('.title2')
             // console.log(mascaraName)
             mascaraName2.textContent = makeup[48].name
             mascaraName2.append()
 
             //  const addMascaraPrice = document.createElement ('h2')
              const mascaraPrice = document.querySelector ('.price2')
              mascaraPrice.textContent = makeup[48].price
              mascaraPrice.append()



             const addToCart = document.querySelector('.likes-section')
             // console.log(addToCart)
             const cartButton = document.querySelector('.cart2')
             // console.log(cartButton)
             cartButton.addEventListener('click' , e => { e.preventDefault()
                 // console.log('I was clicked')
                 const addedAppend = document.querySelector('.likes')
                 console.log(addedAppend)
                 addedAppend.append("Added To Cart💋")
 
             })

             const reviewForm = document.querySelector('.comment-form')
             console.log (reviewForm)
             const addThis = document.querySelector('.comment-button')
             reviewForm.addEventListener("submit", (event)=> {event.preventDefault()
                 // event.stopImmediatePropagation();
                 // const reveiewP = document.createElement ('p')
                 // const reviewBox = document.querySelector('.comment-input')    
                 const addReviewHe = document.querySelector('.add-reviews')
                 const addReviewHere = document.createElement('p')
                 addReviewHe.appendChild(addReviewHere)
                 const reviews = event.target.comment.value
                 addReviewHe.append(reviews)
 
             })
 





             
             
             
             
             
             
             // // const headerPicture = document.querySelector('header')
             // // headerPicture.src = makeup.image_link
             // // console.log(headerPicture)
             // // headerPicture.append
 
             
             // let card2 = document.querySelector('.image-container img')
             // card2.classList.add("image")
             // let arrayOfMascara= makeup.slice(48).forEach(mkp => {
             // card2.src = makeup.image_link
             
             //Add To Cart

            // const addToCart = document.querySelector('.likes-section')
            // // console.log(addToCart)
            // const cartButton = document.querySelector('.cart2')
            // // console.log(cartButton)
            // cartButton.addEventListener('click' , e => { e.preventDefault()
            //     // console.log('I was clicked')
            //     const addedAppend = document.querySelector('.likes')
            //     console.log(addedAppend)
            //     addedAppend.append("Added To Cart💋")

            // })

            //Add to Cart 2 

            // const addToCart2 = document.querySelector('.likes-section2')
            // // console.log(addToCart)
            // const cartButton2 = document.querySelector('.cart')
            // // console.log(cartButton)
            // cartButton2.addEventListener('click' , e => { e.preventDefault()
            //     // console.log('I was clicked')
            //     const addedAppend2 = document.querySelector('.likes2')
            //     console.log(addedAppend2)
            //     addedAppend2.append("Added To Cart💋")
            // })


            // Review Form 

            // const reviewForm = document.querySelector('.comment-form')
            // console.log (reviewForm)
            // const addThis = document.querySelector('.comment-button')
            // reviewForm.addEventListener("submit", (event)=> {event.preventDefault()
            //     // event.stopImmediatePropagation();
            //     // const reveiewP = document.createElement ('p')
            //     // const reviewBox = document.querySelector('.comment-input')    
            //     const addReviewHe = document.querySelector('.add-reviews')
            //     const addReviewHere = document.createElement('p')
            //     addReviewHe.appendChild(addReviewHere)
            //     const reviews = event.target.comment.value
            //     addReviewHe.append(reviews)

            // })


            // //Post Button 
            // const reviewForm = document.querySelector('.comment-form')
            // console.log(reviewForm)

            // const reviewButton = document.querySelector('.cart)
            // console.log(reviewButton)
            
            // reviewButton.addEventListener("submit", e => { e.preventDefault()
            // console.log("clicked")
            // const addReview = commentForm.querySelector('.comment-input')
            // reviews = e.target.comment.value

            // const pToAppend = document.createElement ('h4')
            // reviewForm.append(reviews)
            //  })
             
        // });
        
        
    })

   
});



