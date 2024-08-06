
function updateOptions() {
    const education = document.querySelector('input[name="education"]:checked');
    const optionsContainer = document.getElementById('educationOptions');
    optionsContainer.innerHTML = '';

    if (education) {
        let options = [];
        switch (education.value) {
            case 'elementary':
                options = ['1st', '2nd', '3rd', '4th', '5th'];
                break;
            case 'primary':
                options = ['6th', '7th', '8th', '9th', '10th'];
                break;
            case 'inter':
                options = ['1st Year', '2nd Year'];
                break;
            case 'degree':
                options = ['1st Year', '2nd Year', '3rd Year'];
                break;
            case 'btech':
                options = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
                break;
        }
        if (options.length > 0) {
            const select = document.createElement('select');
            select.name = 'educationLevel';
            select.required = true; 
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            optionsContainer.appendChild(select);
        }
    }
}


function updateContactMethod() {
    const contact = document.querySelector('input[name="contact"]:checked');
    const contactMethodContainer = document.getElementById('contactMethod');
    contactMethodContainer.innerHTML = '';

    if (contact) {
        let input = document.createElement('input');
        input.type = contact.value === 'mail' ? 'email' : 'tel';
        input.name = contact.value;
        input.placeholder = contact.value === 'mail' ? 'Enter your email' : 'Enter your phone number';
        input.required = true;  // Make sure this field is required
        contactMethodContainer.appendChild(input);
    }
}


function handleSubmit(event) {
    console.log('Form submitted');
    event.preventDefault(); 

    
    const name = document.getElementById('name').value.trim();
    const education = document.querySelector('input[name="education"]:checked');
    const educationLevel = document.querySelector('select[name="educationLevel"]');
    const contact = document.querySelector('input[name="contact"]:checked');
    const contactMethod = document.querySelector('input[name="mail"], input[name="phone"]');
    const institute = document.getElementById('institute').value.trim();

  
    if (!name) {
        alert('Name is required.');
        return;
    }
    if (!education) {
        alert('Education level is required.');
        return;
    }
    if (!educationLevel || !educationLevel.value) {
        alert('Education level selection is required.');
        return;
    }
    if (!contact) {
        alert('Contact method is required.');
        return;
    }
    if (!contactMethod || !contactMethod.value.trim()) {
        alert('Contact information is required.');
        return;
    }
    
   
    if (contact.value === 'mail') {
       
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(contactMethod.value.trim())) {
            alert('Please enter a valid email address.');
            return;
        }
    } else if (contact.value === 'phone') {
        
        const phonePattern = /^(\+?\d{1,4})?[\s\-]?(\(?\d{3}\)?)?[\s\-]?(\d{3})[\s\-]?(\d{4})$/; 
        if (contactMethod.value.length!==10 || !phonePattern.test(contactMethod.value.trim())) {
            alert('Please enter a valid phone number.');
            return;
        }
    }
    
    if (!institute) {
        alert('Name of Institute is required.');
        return;
    }


    alert('Form submitted successfully!');
    window.location.href="index.html"
     
}


