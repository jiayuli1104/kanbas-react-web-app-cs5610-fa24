import { Link } from "react-router-dom";

export default function LandingNavigation() {
    return (
        <div id="wd-landing-navigation">
            <h2>Lab Assignments</h2>
            <Link to="../Labs" id="wd-labs-link">Labs</Link><br />
            <Link to="../Labs/Lab1" id="wd-labs-link">Lab 1</Link><br />
            <Link to="../Labs/Lab2" id="wd-labs-link">Lab 2</Link><br />
            <Link to="../Labs/Lab3" id="wd-labs-link">Lab 3</Link><br />
            <h2>Kanbas Application</h2>
            <Link to="../Kanbas" id="wd-kanbas-link">Kanbas</Link><br />
            <h2>Source Code Repositories</h2>
            <a href="https://github.com/jiayuli1104/kanbas-react-web-app-cs5610-fa24" id="wd-github">GitHub Repo</a>
        </div>
    );
}