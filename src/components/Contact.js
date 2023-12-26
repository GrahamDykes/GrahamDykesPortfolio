import './Contact.css'


const Contact = () => {
  return (
   <div className='contact'>
    Contact Me:
    <a href="https://github.com/GrahamDykes/"><ion-icon className='contacticon' name="logo-github"></ion-icon></a>
    <a href="https://www.linkedin.com/in/graham-dykes-19b10312"><ion-icon className='contacticon' name="logo-linkedin"></ion-icon></a>
    <a href="mailto:grahamdykes@gmail.com"><ion-icon name="mail-outline"></ion-icon></a>
   </div>
  )
}

export default Contact