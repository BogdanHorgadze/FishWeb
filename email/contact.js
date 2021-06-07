module.exports = function (email, text) {
    return {
      from: 'umtexcost@gmail.com',
      to: email,
      subject: 'Contact Us',
      html:
        `
            <h1>We will contact you</h1>
            <p>Your message</p>
            <p>${text}</p>
        `
    }
  }