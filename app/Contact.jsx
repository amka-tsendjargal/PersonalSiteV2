'use client'

import { useEffect, useState } from "react"
import { SuccessAlert, ErrorAlert } from "./alerts"



export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [response, setResponse] = useState(null)
    const [status, setStatus] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    async function onSubmit(event) {
        event.preventDefault()

        const response = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({name, email, subject, message})
        })

        setResponse(response)
    }

    useEffect(() => {
        if (response) {
            setStatus(response.ok)
            setShowAlert(true)
        }
    }, [response])

    useEffect(() => {
        console.log(showAlert)
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            }, 5000)
        }
    }, [showAlert])

    return (
        <div id="contact" className="flex w-screen min-h-screen">
            <div className="flex flex-col justify-center items-center w-full h-screen p-28">
                <h1 className="text-4xl mb-10">Get In Touch</h1>
                <form onSubmit={onSubmit} className="flex flex-col justify-center w-1/3">
                    <div className="relative z-0 mb-5">
                        <input type="text" id="name" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer" 
                            placeholder=" " 
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                        <label htmlFor="name" className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
                    </div>
                    <div className="relative z-0 mb-5">
                        <input type="email" id="email" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer" 
                            placeholder=" " 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="email" className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                    </div>
                    <div className="relative z-0 mb-5">
                        <input type="text" id="subject" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer" 
                            placeholder=" " 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}/>
                        <label htmlFor="subject" className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Subject</label>
                    </div>
                    <div className="relative z-0 mb-10">
                        <textarea id="message" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer resize-none" 
                            placeholder=" " 
                            rows={3} 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required/>
                        <label htmlFor="message" className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Message</label>
                    </div>
                    <div className="w-full text-center mb-10">
                        <button type='submit' className="w-1/3 min-w-[115px] border-sm border-2 border-sky-600 rounded-sm font-bold text-sky-600 hover:bg-sky-600 hover:text-white transition duration-300 ease-in-out">Submit</button>
                    </div>
                    <div className="w-full text-center h-20">
                        { showAlert ? <>{(status ? <SuccessAlert /> : <ErrorAlert />)}</> : <></> }
                    </div>
                </form>
            </div>
        </div>
    )
}