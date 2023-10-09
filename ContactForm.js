import React from "react"
import "./ContactForm.css"

function ContactForm (){
 return (
    <div className="contact">
       <form name="contact" method="POST" className="contact_form" data-netlify="true" onSubmit="submit">
        
       <input type="hidden" name="form-name" value="contact" />
           <label for="name">Votre nom : *</label>
           <input type="text" name="name" placeholder="Par exemple Brice" required/>
           
           <label for="email"> Votre e-mail : *</label>
           <input type="email" name="email" placeholder="monadresse@....." required/>
                 
           <label for="message">Vos remarques : *</label>
           <textarea name="message" placeholder=" Ecrivez ici votre message..." required></textarea>
                 
          <button type="submit">Envoyer mon message</button> 
       </form>
   </div>
 )
}

export default ContactForm


