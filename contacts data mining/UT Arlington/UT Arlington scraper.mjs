let ppl_elements_array = Array.from(document.querySelectorAll('.t-entry'))

let ppl = ppl_elements_array.map(
    person_element => ({
        'school': 'University of Texas Arlington',
        'team type': 'Combustion',
        'role': person_element.querySelector('.t-entry-meta'),
        'name': person_element.querySelector('.t-entry-title')
    })
)

ppl = ppl.filter(person => person.role !== null && person.name !== null && person.major !== null)

ppl = ppl.map(person => ({
    role: person.role.innerText,
    name: person.name.innerText
})
)

copy(ppl)