// the 2020 team leads are listed below, so I'm just looking at that list
// if I wanted 2021 team, then scraping would make more sense. Maybe for next year's hires!

let team_containers = document.querySelectorAll(".gtr-uniform")

let current_team = Array.from(team_containers[0].children[0].children[0].children)
let past_teams = team_containers[1].children

let just_finished_team = Array.from(past_teams[0].children[0].children)

let just_finished_team_year = parseInt(just_finished_team[0].innerText, 10)

let just_finished_team_members = just_finished_team.slice(1)

let ppl_nested_arrays = just_finished_team_members.map(person_element => person_element.innerText.replace(/[\s]+/g, " ").split(": "))

ppl = ppl_nested_arrays.map(person_nested_array => ({
    "school": "University of Minnesota",
    "team type": "Combustion",
    "role" : person_nested_array[0],
    "name": person_nested_array[1]
}))

copy(ppl)