//you can add elements/values to the html by using this code
//it doesnt have to be called body as lon as document.body remains the same
const body=document.body
//now that weve created it we need to append it

//we use append to attach an element/value to body it also lets you
// append muliple things at a time example body.append(`hello world`,`by`)
// im going to start calling them elements. you can creat elements
// by using
const div=document.createElement(`div`)
//now we have to append the body to the page
//now if you inspect it you will see div in the body
//body.append(div)
//you can attach strings to div their are 2 methodes you can use
//you can inspect it in your browser inspection inside div
//div.innerText=`hELLO WORLD`
div.textContent=`Hello world 2`
//you should use textcontent since it shows you exactly what you
//type out without any of the invisible elementsare variables.
//if you want to add html methodes to the string then you use
// innerhtml ex
//body.innerHTML=`<strong>hello world 3</strong>`
//now if you check your browser you can see the text is inbolden 
//you can also get the same results by doing
const strong=document.createElement("strong")
strong.innertext="helloworld"
//body.append(strong)//if you do it this wayyou wont have any security
//risks but it will take longer since you manually type everything
//you can edit id by using a document.queryselector
const spanhi=document.querySelector("#hi")
const spanby=document.querySelector("#by")
//if you want to remove an element from a html you use the remove
//methode
spanby.remove()