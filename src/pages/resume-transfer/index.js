import styles from '@/styles/Transfer.module.css'
import { useState } from 'react'

export default function Transfer() {
    const [files, setFiles] = useState(null)

    const handleFileChange = (evt) => {
        const { files } = evt?.target || {}
        console.log('djch file', files)
        setFiles(files)
    }

    return (
        <>
            <main className={styles.main}>
                <div>下面是一个断点续传的案例</div>

                <div>
                    <input type="file" onChange={handleFileChange}/>
                </div>
            </main>
        </>
    )
}