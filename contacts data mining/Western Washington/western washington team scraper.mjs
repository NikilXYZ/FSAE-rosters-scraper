// looks like they use bootstrap
let ppl_elements = Array.from(document.querySelectorAll(".mb-4"))

let ppl = ppl_elements.map(person_element => ({
    "school": "Western Washington University",
    "team type": "Combustion",
    "role": person_element.childNodes[3].childNodes[1].childNodes[1].textContent.trim() || undefined,
    "name": person_element.childNodes[3].childNodes[0].textContent.trim() || undefined,
    "major": person_element.childNodes[3].childNodes[1].childNodes[4].childNodes[0].childNodes[0].textContent.trim() || undefined,
    "email": person_element.childNodes[3].childNodes[1].childNodes[7].href.replace("mailto:", "").replace(" ", "") || undefined,
    "linkedin": ppl_elements[0].childNodes[3].childNodes[1].childNodes[8].href.trim() || undefined
}))

copy(ppl)