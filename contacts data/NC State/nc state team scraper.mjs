// they're using tables
// and there's no separator between the name and the role
// I can assume that first 2 words are the name and all subsequent words are team name
// and just manually correct the last few

let ppl_elements_array = Array.from(document.querySelectorAll('td'))

ppl_elements_array = ppl_elements_array.filter(element => element.childElementCount == 0)

ppl = ppl_elements_array.map(person_element => {
    const person_string = person_element.innerText
    const tokens = person_string.split(" ")
    const person = {
        "school": "North Carolina State University",
        "team type": "Combustion",
        "role":tokens.slice(2).join(" "), 
        "name":tokens.slice(0,2).join(" "), 
    }
    return person
})

copy(ppl)