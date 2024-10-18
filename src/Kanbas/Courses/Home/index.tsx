import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div>
            <div className="d-flex" id="wd-home">
                <div className="flex-fill" >
                    <Modules />
                </div>
                <div className="d-none d-md-block" style={{padding: '20px' }}>
                    <CourseStatus />
                </div>
            </div>
        </div>
    );
}