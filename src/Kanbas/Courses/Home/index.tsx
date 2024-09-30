import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div>
        <div>
            <button id="wd-add-assignment-group">Collapse All</button>
            <button id="wd-add-assignment-group">View Progress</button>
            <select id="wd-select-one-publish">
                <option selected value="PUBLISHALL">Publish All</option>
                <option value="PUBLISH1">Publish 1</option>
                <option value="PUBLISH2">Publish 2</option>
                <option value="PUBLISH3">Publish 3</option>
            </select>
            <button id="wd-add-assignment">+ Module</button>
        </div>
        <table id="wd-home">
            <tbody>
                <tr>
                    <td valign="top">
                        <Modules />
                    </td>
                    <td valign="top">
                        <CourseStatus />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );}
   
