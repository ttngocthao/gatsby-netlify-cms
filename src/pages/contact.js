import React,{useState} from 'react'

const Contact = () => {
    const [inputVals,setInputVals]=useState({
        name:'',
        email:'',
        role:'leader',
        message:''
    })
    const {name,email,role,message} = inputVals
    const contactSubmitHandle =async(e)=>{
        e.preventDefault()
        console.log(inputVals)
        if(name==='' || email==='' || role==='' || message===''){
            alert('Input boxes cannot be empty')
            return
        }
        try {
            const res = await fetch('/',{
                method:'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact-form",
                    ...inputVals,
                // "g-recaptcha-response": token,
                })
            })
            if(res.status!==200){
                setInputVals(
                    {
                        ...inputVals,
                        name:'',
                        email:'',
                        role:'leader',
                        message:''
                    }
                            )
            }else{
                throw Error
            }
            
        } catch (error) {
            alert('error')
            console.log(error)
        }
        

    }
    const inputChangeHandle = (e)=>{
        setInputVals({
            ...inputVals,
            [e.target.name]: e.target.value
        })
    }
    const encode=(data)=> {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }
    return (
        <div>
            <h1>Contact Us</h1>
            <h2>This page's purpose is to use netlify forms to handle contact form for the site.</h2>
            <form onSubmit={contactSubmitHandle}
                name='contact-form' 
                data-netlify={true} 
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true">
                <p>
                    <label>Your Name: <input value={name} type="text" name="name" onChange={inputChangeHandle}/></label>   
                </p>
                <p>
                    <label>Your Email: <input value={email} type="email" name="email" onChange={inputChangeHandle}/></label>
                </p>
                <p>
                    <label>Your Role: 
                        <select name="role" onChange={inputChangeHandle} value={role}>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea value={message} name="message" onChange={inputChangeHandle}></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export default Contact
