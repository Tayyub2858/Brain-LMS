

const HandleNavSocialicons = () => {

  const Handlelocation = () => {
    window.open('https://goo.gl/maps/ZVmd7zboqz4jsAgf7?coh=178573&entry=tt')
  }
  const HandleGmail = () => {
    window.open('https://mail.google.com/mail/u/0/#sent?compose=new')
  }
  const Handlephone = () => { window.open('cell:0418787246');}
  // open the social media icons with links 
  const HandleWhatsapp = () => {
    window.open('https://api.whatsapp.com/send/?phone=923032238734&text&type=phone_number&app_absent=0');
    // alert('Brain Analytics Conntecting Comming Soon..')
  }
  const HandleFacebook = () => {
    window.open('https://www.facebook.com/groups/1211645802304086/user/100028465427480');
  }
  const HandleLinkedin = () => {
    window.open('https://www.linkedin.com/company/brainanalytics/')
  }
  const HandleInstagram = () => {
    alert("Brain Analytic on instrgram links comming soon...")
  }
  const Handletwitter = () => {
    alert("Brain analytics on twitter links comming soon...")
  }
  return {
    Handlelocation,
    HandleGmail,
    Handlephone,
    HandleWhatsapp,
    HandleFacebook,
    HandleLinkedin,
    Handletwitter,
    HandleInstagram,
  }
}

export default HandleNavSocialicons