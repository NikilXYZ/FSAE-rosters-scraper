import fs from "fs"
import glob from "glob"

let team_files = glob.sync("../contacts data mining/**/*.json")

let json_lists = team_files.map(team_file => JSON.parse(fs.readFileSync(team_file)))

let json_merger = (accumulator, current_value) => current_value.concat(accumulator)

let merged_json = json_lists.reduce(json_merger)

fs.writeFileSync("all fsae students.json", JSON.stringify(merged_json))