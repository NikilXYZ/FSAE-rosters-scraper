// unfortunately, roles under each person are generic, so I need to fetch the subteams and then merge that to the title given under each person

let sections = Array.from(document.querySelectorAll("[data-testid=mesh-container-content]"))

// remove other sections like header and footer
let subteams = subteams.slice(4, 13)

let ppl = []

subteams.forEach(subteam => {
    // get rid of all image children
    // it's a wix site, so text containers have a class of "._2bapf"
    let text_elements_array = Array.from(subteam.querySelectorAll("._2bafp"))

    // first child of each container is the subteam name
    let subteam_name = text_elements_array[0].innerText

    let ppl_elements_array = text_elements_array.slice(1)

    ppl_elements_array.forEach(person_element => {
        // for each subsequent child
        person_detail_elements = Array.from(person_element.children)

        try {
            person = {}
            // second child is subteam role
            person.school = "North Carolina State University"
            person.team type = "Baja"
            subteam_role = person_detail_elements[1].innerText
            person.role = `${subteam_name} ${subteam_role}`

            // first child is name
            person.name = person_detail_elements[0].innerText

            ppl.push(person)
        } catch (error) { }
    })
})

copy(ppl)