let ppl_name_elements = Array.from(document.querySelectorAll("td h2"))
let ppl_description_elements = Array.from(document.querySelectorAll("td div.paragraph"))

let ppl_names = ppl_name_elements.map(name_element => name_element.innerText)
let ppl_descriptions = ppl_description_elements.map(description_element => description_element.innerText)

let current_school_year = parseInt(document.querySelector(".wsite-content-title").innerText.split("-")[0])

let ppl = ppl_names.map((person_name, person_index) => {
    let person = {}

    let person_descriptions = ppl_descriptions[person_index].split("\n")

    person["school"] = "University of Nebraska"
    person["team type"] = "Combustion"
    person["role"] = person_descriptions[0]
    person["name"] = person_name
    person["major"] = person_descriptions[2]

    let grade_in_current_year = person_descriptions[1]
    let graduation_year = current_school_year

    switch (grade_in_current_year) {
        case "Freshman": graduation_year += 4
        case "Sophomore": graduation_year += 3
        case "Junior": graduation_year += 2
        case "Senior": graduation_year += 1
    }

    person["graduation year"] = graduation_year

    return person
})

copy(ppl)