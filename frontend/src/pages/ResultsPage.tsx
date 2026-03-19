import { useLocation } from "react-router-dom";

export default function ResultsPage(){
    const location = useLocation();
    const fileName = (location.state as { fileName: string } | undefined)?.fileName

    // MOCK DATA for now
  const skills = ["JavaScript", "TypeScript", "React", "Node.js"];

  return(
    <div style={{ padding: "2rem" }}>
        <h2>Scan Results</h2>
        {fileName && <p>Scanned File: <strong>{fileName}</strong></p>}
        <h3>Extracted Skills:</h3>
        <ul>
            {skills.map((skill)=> (
                <li key={skill}>{skill}</li>
            ))}
        </ul>
    </div>

  )

}