import styles from '@/styles/Transfer.module.css'
import { useState } from 'react'
import { message } from 'antd'


export default function Transfer() {
    const [files, setFiles] = useState(null)
    const [messageApi, contextHolder] = message.useMessage();

    const handleFileChange = async (evt) => {
        const { files } = evt?.target || {}
        // console.log('djch file', files)
        setFiles(files)
    }

    const sendFiles = () => {
        if (!files) {
            messageApi.info('请先选择文件哦!');
            return
        }

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open('post', 'api/handler')
            xhr.setRequestHeader('Content-Type', 'multipart/form-data')

            const formData = new FormData()
            formData.append('file', files?.[0])
            xhr.send(formData)
            xhr.onload = evt => {
                // 这个日志会在浏览器里显示出来，毕竟是客户端嘛
                // console.log('djch 收到响应', evt.target)
                resolve({
                  data: evt.target.response
                });
            };
        })
    }

    return (
        <>
            {contextHolder}
            <main className={styles.main}>
                <div>下面是一个断点续传的案例</div>

                <div>
                    <input type="file" onChange={handleFileChange}/>
                    <button onClick={sendFiles}>发送</button>
                </div>
            </main>
        </>
    )
}