import React, { useState } from 'react';


const ContactForm = () => {
    const [contact, setContact] = useState({ feedback: '', name: 'Name', email: 'email@example.com' });

	const handleChange = (e)  => {
        setContact({feedback: e.target.value})
      }

    const handleSubmit = e => {
    e.preventDefault();
    console.log(contact.feedback)
    }

	return (
  	<form className="test-mailing">
    	<h1>Let's see if it works</h1>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={contact.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={handleSubmit} />
  	</form>
	)
}

export default ContactForm