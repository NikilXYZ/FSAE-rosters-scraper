let ppl_elements_array = Array.from(document.querySelectorAll('.panel-grid-cell'))

let ppl = ppl_elements_array.map(
    person_element => ({
        'school': 'Missouri S&T',
        'team type': 'Combustion',
        'role': person_element.querySelector('.sow-headline'),
        'name': person_element.querySelector('.sow-sub-headline'),
        'email': person_element.querySelector('.sow-icon-container a')
    })
)

ppl = ppl.filter(person => person.role !== null && person.name !== null && person.email !== null)

ppl = ppl.map(person => ({
    role: person.role.innerText,
    name: person.name.innerText,
    email: person.email.href.replace('%20', '').replace('mailto:', '')
})
)

copy(ppl)