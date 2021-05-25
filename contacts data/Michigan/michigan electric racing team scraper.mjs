// utility functions
// inspired by https://zellwk.com/blog/case-conversion/ and https://masteringjs.io/tutorials/fundamentals/capitalize-first-letter
toTitleCase = (string) => string.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")


// team leads
let ppl_elements_array = Array.from(document.querySelectorAll(".elementor-widget-wrap"))

let team_leads_elements = ppl_elements_array.slice(0, 10)


let team_leads = team_leads_elements.map(
    person_element => ({
        "school": "University of Michigan",
        "team_type": "Electric",        
        'role': toTitleCase(person_element.querySelector(".elementor-widget-text-editor > div > p:nth-child(2)").innerText),
        'name': toTitleCase(person_element.querySelector(".elementor-widget-text-editor > div > p:nth-child(1)").innerText),
        'degree': toTitleCase(person_element.querySelector(".elementor-widget-text-editor > div > p:nth-last-child(2)").innerText),
        'email': person_element.querySelector(".elementor-widget-text-editor > div > p:last-child").innerText
    })
)
// We're using nth-last-child on some because 
// Neel's is broken: they added an extra line to his role to fit the word "LEAD"
// and nth-last-child doesn't work for the first 2 because there's an empty p tag at the bottom for some reason

ppl = ppl.filter(person => person.role !== null && person.name !== null && person.email !== null)

ppl = ppl.map(person => ({
    role: person.role.innerText,
    name: person.name.innerText,
    email: person.email.href.replace("%20", "").replace("mailto:", "")
})
)

copy(ppl)

// rest of team
let sub_team_elements = ppl_elements_array.slice(11, 28)
sub_team_elements = sub_team_elements.filter(element => element.classList.contains("elementor-element-populated"))
// honestly it's just easier to copy manually