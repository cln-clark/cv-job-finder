import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadPage(){
    const [file, setFile] = useState<File | null>(null)
    const navigate = useNavigate()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0){
            setFile(e.target.files[0])
        }
    }

    const handleScan = async () => {

        console.log("Uploaded")
        if(!file){
            console.log("No file selected")
            return
        }

        const formData = new FormData()
        formData.append("cv", file)

        try{
            const res = await fetch("http://localhost:8080/scan", {
                method: "POST",
                body: formData,
            })

            const data = await res.json()

            navigate("/results", {
                state: { fileName: data.fileName },
            })

        }catch(error){
             console.error("Scan error:", error);
        }
    }

    return(
        <div style={{ padding: "2rem"}}>
            <h2>Upload your CV</h2>

            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />

            {file && (
                <p style={{ padding: "1rem"}}></p>

            )}

            <button onClick={handleScan}
                    style={{ marginTop: "1rem", padding: "0.5rem 1rem"}}
            >
            Scan CV          
            </button>
            
        </div>
    )
}
