let ppl_elements_array = Array.from(document.querySelectorAll(".summary-item"))

let ppl = ppl_elements_array.map(
    person_element => ({
        'role' : person_element.querySelector('.summary-excerpt > p:nth-child(1)'),
        'name' : person_element.querySelector('.summary-title'),
        'degree': person_element.querySelector('.summary-excerpt > p:nth-child(2)')
    })
)

ppl = ppl.filter(person => person.role !== null && person.name !== null && person.email !== null)

ppl = ppl.map(person => ({
    role: person.role.innerText.replace("Role: ",""),
    name: person.name.innerText,
    degree: person.degree.innerText.replace("Major: ","")
})
)

copy(ppl)