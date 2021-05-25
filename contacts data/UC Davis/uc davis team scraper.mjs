// they are using elementor and wordpress

let ppl_elements = Array.from(document.querySelectorAll(".elementor-accordion"))

// thank you for including a ton of info including grad year and email!

let ppl = ppl_elements.map(person_element => {
    let person = {
        "school": "University of California Davis",
        "team type": "Combustion",
        "role": person_element.children[1].children[0].innerText,
        "name": person_element.children[0].innerText,
    }

    // some reason, they use a non-breaking space 0xA0. Converting that to regular space first
    let additional_details = person_element.children[1].children[1].innerText
        .replace(/[^\S\r\n]+/g, ' ')
        .split("\n")
        .map(detail_key_value_string => detail_key_value_string.split(": "))

    additional_details = Object.fromEntries(new Map(additional_details))

    person["major"] = additional_details["Major"]

    // get rid of the month since they have listed month as well
    person["graduation year"] = parseInt(additional_details["Grad Date"].replace(/[^\d]/g, ''), 10)

    person["email"] = additional_details["Contact"]

    if (additional_details["Career Ambitions"]) person["career ambitions"] = additional_details["Career Ambitions"].replace(/ and /g, ", ").split(", ")
    if (additional_details["Hobbies"]) person["hobbies"] = additional_details["Hobbies"].replace(/ and /g, ", ").split(", ")

    return person
})