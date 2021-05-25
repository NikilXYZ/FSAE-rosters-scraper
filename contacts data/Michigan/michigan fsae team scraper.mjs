let ppl_elements_array = Array.from(document.querySelectorAll('.summary-item'))

let ppl = ppl_elements_array.map(
    person_element => ({
        'school': 'University of Michigan',
        'team_type': 'Combustion',
        'role': person_element.querySelector('.summary-excerpt > p:nth-child(1)'),
        'name': person_element.querySelector('.summary-title'),
        'degree': person_element.querySelector('.summary-excerpt > p:nth-child(2)')
    })
)

ppl = ppl.filter(person => person.role !== null && person.name !== null && person.email !== null)

ppl = ppl.map(person => ({
    school: person.school,
    team_type: person.team_type,
    role: person.role.innerText.replace('Role: ', ''),
    name: person.name.innerText,
    degree: person.degree.innerText.replace('Major: ', '')
})
)

copy(ppl)