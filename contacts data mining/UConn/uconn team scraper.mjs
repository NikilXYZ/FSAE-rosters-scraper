// this is possibly the simplest one in the group since everything is in a properly formatted table

// class name starts with "person"
let ppl_elements = Array.from(document.querySelectorAll("tr[class^=person]"))

let ppl = ppl_elements.map(person_element => ({
    "school": "University of Connecticut",
    "team type": "Combustion",
    "role": person_element.children[4].innerText.trim(),
    "name": person_element.children[3].innerText.trim(),
    "email": person_element.children[5].innerText.trim()
}))

copy(ppl)