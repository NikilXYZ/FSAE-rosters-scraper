let ppl_elements_array = Array.from(document.querySelectorAll("._2bafp"))

// get rid of the subteam title
ppl_elements_array = ppl_elements_array.filter(element => element.querySelector("h2") == null)

let ppl = ppl_elements_array.map(person_element => ({
    "role": person_element.querySelector("p:nth-child(2)"),
    "name": person_element.querySelector("p:nth-child(1)"),
    "major": person_element.querySelector("p:nth-child(3)")
}))

ppl = ppl.filter(person => person.role !== null && person.name !== null && person.major !== null)
ppl = ppl.filter(person => person.role.innerText !== "​" && person.name.innerText !== "​" && person.major.innerText !== "​")

ppl = ppl.map(person => ({
    "school": "University of Michigan",
    "team type": "Baja",
    role: person.role.innerText,
    name: person.name.innerText,
    major: person.major.innerText.match(/[A-Za-z ]+/)[0],
    "graduation year": parseInt(person.major.innerText.match(/[0-9]+/)[0], 10)
}))

// apparently, there are some elements for people who already graduated but they"re not visible but not hidden either 🤷‍♀️
let current_year = new Date().getFullYear()

// this really ought to have error checking to make sure there even is a grad year after the comma
ppl = ppl.filter(person => person["graduation year"] >= current_year)

// the last few elements in this aren"t really ppl. I"m just manually deleting them after copy, because this could be a variable number

copy(ppl)