// this works for both their electric 20 team as well as combustion 20 team

// this is a squarespace site
let text_elements = Array.from(document.querySelectorAll(".sqs-block-html .sqs-block-content"))

// ignore the section headers

// people's information are only the blocks that start with an h3 and have at least one p
let ppl_elements = text_elements.filter(element => {
    try {
        return element.children[0].matches("h3") && element.children[1].matches("p")
    } catch (error) {
        return false
    }
})

let ppl = ppl_elements.map(person_element => {
    let person = {
        "school": "University of Akron",
        "team_type": "Electric",
        "role": person_element.children[1].innerText,
        "name": person_element.children[0].textContent
        // the CSS has a text-transform that makes the names all caps.
        // innerText shows up as all caps, but textContent has the raw text
        // of course, if they typed the name weirdly to begin with, just have to manually fix those names
    }
    let email = undefined
    try { 
        email = person_element.children[2].innerText
    } catch (error) {}
    if (email) person.email = email
    return person
})

copy(ppl)