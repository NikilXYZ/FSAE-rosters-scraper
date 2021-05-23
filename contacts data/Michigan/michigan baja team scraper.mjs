let ppl_elements_array = Array.from(document.querySelectorAll("._2bafp"))

// get rid of the subteam title
let ppl = ppl_elements_array.filter(element => element.querySelector("h2") == null)

let ppl = ppl_elements_array.map(
    person_element => ({
        'role': person_element.querySelector('p:nth-child(2)'),
        'name': person_element.querySelector('p:nth-child(1)'),
        'degree': person_element.querySelector('p:nth-child(3)')
    })
)

ppl = ppl.filter(person => person.role !== null && person.name !== null && person.degree !== null)

ppl = ppl.map(person => ({
    role: person.role.innerText,
    name: person.name.innerText,
    degree: person.degree.innerText
})
)

// apparently, there are some elements for people who already graduated but they're not visible but not hidden either 🤷‍♀️
let current_year = new Date().getFullYear()

// this really ought to have error checking to make sure there even is a grad year after the comma
ppl = ppl_elements_array.filter(person => person.degree.split(", ")[1] >= current_year)

// the last few elements in this aren't really ppl. I'm just manually deleting them after copy, because this could be a variable number

copy(ppl)