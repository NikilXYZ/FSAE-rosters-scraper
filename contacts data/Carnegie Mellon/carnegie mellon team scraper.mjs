// Executive board and structures are arranged the same way
// energetics looks totally different for some reason

let executive_board_and_structures = Array.from(document.querySelectorAll(".flex_display.flex_vbox")).map(element => element.innerText)
executive_board_and_structures = executive_board_and_structures.filter(element => !!element)

let executive_board_and_structures_ppl = executive_board_and_structures.map(person_text => {
    person_text_items = person_text.split("\n\n")
    return {
        "role": person_text_items[1],
        "name": person_text_items[0],
    }
})

let energetics_containers = Array.from(document.querySelectorAll("[data-testid=mesh-container-content]"))
energetics_containers = energetics_containers.filter(container => container.innerText.includes("Captain"))
energetics_containers = energetics_containers.slice(1)
// first container actually holds the executive board and structures teams

let energetics_ppl = []

energetics_containers.forEach(container => {
    let text_elements = Array.from(container.children).filter(child_element => !!child_element.innerText)

    let subteam_captain = text_elements[0].innerText

    let subteam_captain_role = text_elements[1].innerText

    energetics_ppl.push({
        "role": subteam_captain_role,
        "name": subteam_captain,
    })

    subteam = subteam_captain_role.replace(" Captain", "")

    let subteam_members = Array.from(text_elements[2].querySelectorAll("ul li"))
    subteam_members = subteam_members.map(element => element.innerText)

    subteam_members.forEach(member => {
        energetics_ppl.push({
            "role": subteam,
            "name": member
        })
    })
})

let ppl = executive_board_and_structures_ppl.concat(energetics_ppl)

copy(ppl)