import fs from "fs"
import glob from "glob"

// TODO: Load the current json (if exists), and only commit the differences 
// That way if we have mannually added additional info like graduation date or linkedin, it will not delete those

let team_files = glob.sync("../contacts data mining/**/*.json")

let json_lists = team_files.map(team_file => JSON.parse(fs.readFileSync(team_file)))

let json_merger = (accumulator, current_value) => current_value.concat(accumulator)

let merged_json = json_lists.reduce(json_merger)

fs.writeFileSync("all fsae students.json", JSON.stringify(merged_json))