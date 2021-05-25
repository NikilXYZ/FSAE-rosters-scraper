// wix, except every element is at the same level
// people aren't in any sort of wrapper
// so 
// get all children of the container, keep only items with class of "._2bafp"
let text_elements = Array.from(document.querySelectorAll("[data-mesh-id=Containerfo60pinlineContent-gridContainer] > ._2bafp"))

// get rid of section titles
// section titles are all UPPERCASE
// from https://stackoverflow.com/questions/46579247/what-is-the-best-way-to-check-whether-a-string-is-all-upper-case-in-javascript
let isUpperCase = str => str == str.toUpperCase()
text_elements = text_elements.filter(element => !(isUpperCase(element.innerText)))

// inspired by https://stackoverflow.com/questions/11318680/split-array-into-chunks-of-n-length
let ppl = Array.from(
    new Array(Math.ceil(text_elements.length / 2)),
    (_, i) => text_elements.slice(i * 2, i * 2 + 2)
)
// every even text is the role
// every odd text is the name

// ppl is currently an array of arrays of divs
ppl = ppl.map(person => ({
    "school": "Rutgers University",
    "team_type": "Combustion",
    "role": person[1].innerText,
    "name": person[0].innerText,
}))

copy(ppl)