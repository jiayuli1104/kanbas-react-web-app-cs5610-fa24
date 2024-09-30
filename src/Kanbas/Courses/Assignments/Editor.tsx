export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br /><br />
            <textarea id="wd-description" cols={60} rows={8}>
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br /><br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="1">ASSIGNMENTS</option>
                            <option value="2">QUIZZES</option>
                            <option value="3">EXAMS</option>
                            <option value="4">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="1">Percentage</option>
                            <option value="2">Letter</option>
                            <option value="3">Score</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="1">Online</option>
                            <option value="2">File</option>
                            <option value="3">Text</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-online-entry-options">Online Entry Options</label>
                    </td>
                    <td>
                        <input type="checkbox" id="wd-text-entry" name="wd-text-entry" value="1" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" id="wd-website-url" name="wd-website-url" value="2" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" id="wd-media-recordings" name="wd-media-recordings" value="3" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" id="wd-student-annotation" name="wd-student-annotation" value="4" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" id="wd-file-upload" name="wd-file-upload" value="5" />
                        <label htmlFor="wd-file-upload">File Upload</label><br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" type="text" placeholder="Everyone" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due Date</label>
                    </td>
                    <td>
                        <input id="wd-due-date" type="date" value="2024-05-13" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td>
                        <input id="wd-available-from" type="date" value="2024-05-06" />
                    </td>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input id="wd-available-until" type="date" value="2024-05-06" />
                    </td>
                </tr>
            </table>
            <div style={{ textAlign: 'right', padding: '20px' }}>
                <hr />
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    );
}