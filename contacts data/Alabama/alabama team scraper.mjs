// weebly
let ppl_elements = Array.from(document.querySelectorAll(".paragraph"))

// remove the professor
ppl_elements = ppl_elements.slice(0, ppl_elements.length - 1)

let ppl = ppl_elements.map(person_element => {
    let person = {
        "school": "University of Alabama",
        "team type": "Combustion"
    }

    // ignore the name, and get rid of weird space characters
    let additional_details = person_element.innerText
        .replace(/[^\S\r\n]+/g, ' ')
        .split("\n")
        .slice(1)
        .map(detail_key_value_string => detail_key_value_string.split(": "))

    additional_details = Object.fromEntries(new Map(additional_details))


    person["role"] = additional_details["Role"]
    person["name"] = person_element.querySelector("a").innerText.replace(/[^\S\r\n]+/g, ' ').trim()
    person["major"] = additional_details["Major"]
    person["email"] = person_element.querySelector("a").href

    return person
})

copy(ppl)