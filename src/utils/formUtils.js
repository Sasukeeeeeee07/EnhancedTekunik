// Form validation functions
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[\d\s\-\+\(\)]{10,}$/;
  return re.test(phone);
};

// Form submission handler
export const handleFormSubmission = async (formData, endpoint) => {
  try {
    // Create FormData if file upload is included
    let submitData;
    if (formData instanceof FormData) {
      submitData = formData;
    } else {
      submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] instanceof File) {
          submitData.append(key, formData[key]);
        } else {
          submitData.append(key, formData[key]);
        }
      });
    }

    // Replace this with your actual API endpoint
    const response = await fetch(endpoint, {
      method: 'POST',
      body: submitData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      error: error.message || 'An error occurred while submitting the form' 
    };
  }
};

// Form field validation
export const validateField = (name, value) => {
  switch (name) {
    case 'email':
      if (!validateEmail(value)) {
        return 'Please enter a valid email address';
      }
      break;
    case 'phone':
      if (!validatePhone(value)) {
        return 'Please enter a valid phone number';
      }
      break;
    case 'name':
      if (value.length < 2) {
        return 'Name must be at least 2 characters long';
      }
      break;
    case 'message':
      if (value.length < 10) {
        return 'Message must be at least 10 characters long';
      }
      break;
    case 'resume':
      if (value && value instanceof File) {
        if (!value.type.includes('pdf')) {
          return 'Please upload a PDF file';
        }
        if (value.size > 5 * 1024 * 1024) { // 5MB limit
          return 'File size should be less than 5MB';
        }
      }
      break;
    default:
      if (typeof value === 'string' && !value.trim()) {
        return 'This field is required';
      }
  }
  return '';
};

// Form state management
export const createFormState = (initialState) => {
  return {
    values: { ...initialState },
    errors: {},
    touched: {},
    isSubmitting: false
  };
}; 