// elementor
let ppl_elements = Array.from(document.querySelectorAll("main .elementor-row > * > * > * > *"))

let ppl_string_arrays = ppl_elements.map(element => element.innerText.replace(/[^\S\r\n]+/g, ' ').split("\n"))

// filter out empty strings
ppl_string_arrays = ppl_string_arrays.filter(array => array[0] !== "")


// filter out advisors
ppl_string_arrays = ppl_string_arrays.filter(array => !array[0].toLowerCase().includes("advisor"))

// ppl string_arrays w/ 1 element are headers
// ppl string_arrays w/ 2 element are role, name
// ppl string_arrays w/ 3+ element are lists of names

// I only really care about leads. I don't care about core members or alumni
ppl_string_arrays = ppl_string_arrays.filter(array => array.length === 2)

let ppl = ppl_string_arrays.map(person_details => ({
    "school": "University of California San Diego",
    "team type": "Combustion",
    "role": person_details[0],
    "name": person_details[1]
}))

copy(ppl)