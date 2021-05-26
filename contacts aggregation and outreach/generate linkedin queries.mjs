import fs from "fs"

let students = JSON.parse(fs.readFileSync("./all fsae students.json"))

let linkedin_query_generator = (queries_so_far, student) => {
    if (!student.linkedin) {
        let linkedin_query = encodeURI(`https://www.linkedin.com/search/results/all/?keywords=${student.name} ${student.university}`)
        queries_so_far.push(linkedin_query)
    }
    return queries_so_far
}

let linkedin_queries = students.reduce(linkedin_query_generator, [])

fs.writeFileSync("all linkedin queries.json", JSON.stringify(linkedin_queries))

let x = 2