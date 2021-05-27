import fs from "fs"

let students = JSON.parse(fs.readFileSync("all fsae students.json"))

let graduates_in_2021 = (student) => (student["graduation year"] == 2021)
let we_dont_know_graduation_year = (student) => !student["graduation year"]
let we_know_email = (student) => !!student["email"]
let we_know_linkedin = (student) => !!student["linkedin"]

// these are the students we may want to hire full-time
let students_to_email = students.filter(student => (
    (graduates_in_2021(student) || we_dont_know_graduation_year(student)) &&
    (we_know_email(student))
))

let students_to_linkedin = students.filter(student => (
    (graduates_in_2021(student) || we_dont_know_graduation_year(student)) &&
    (we_know_linkedin(student))
))
let linkedin_urls = students_to_linkedin.map(student => student.linkedin)

// this means there will be a few people that we contact in 2 ways, and that is good!
let students_to_email_and_linkedin = students.filter(student => (
    (graduates_in_2021(student) || we_dont_know_graduation_year(student)) &&
    (we_know_linkedin(student) && we_know_email(student))
))

// export students_to_email to csv so I can import into hunter.io
// save as json and then use json2csv from command line
fs.writeFileSync("people to contact/students to email.json", JSON.stringify(students_to_email))
fs.writeFileSync("people to contact/students to linkedin.json", JSON.stringify(students_to_linkedin))
fs.writeFileSync("people to contact/linkedin urls.json", JSON.stringify(linkedin_urls))
fs.writeFileSync("people to contact/people we contact twice.json", JSON.stringify(students_to_email_and_linkedin))


let x = 2