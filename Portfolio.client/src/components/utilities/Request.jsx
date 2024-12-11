// import { useState } from "react";
// import "./Request.css";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

// export default function Request() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     helpOption: "",
//     projectDetails: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   return (
//     <div className="request">
//       <div className="requestupperlabel">
//       <div className="text-container">
//       <h1>
//           Have A Product Idea Or A Business Challenge You’d Like To Discuss?
//         </h1>
//         <p>
//           To get started, simply fill out the form to set up a free consultation
//           with our team.
//         </p>
//         </div>
//       </div>
    //   <div className="text-container">
    //   {/* <h1>
    //       Have A Product Idea Or A Business Challenge You’d Like To Discuss?
    //     </h1>
    //     <p>
    //       To get started, simply fill out the form to set up a free consultation
    //       with our team.
    //     </p> */}
    //   </div>
//       <div className="form-container">
       
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//           <PhoneInput
//               defaultCountry="PK"
//               name="phone"
//               placeholder="+92"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             <select
//               name="helpOption"
//               value={formData.helpOption}
//               onChange={handleChange}
//               required
//             >
//               <option value="" disabled>
//                 How we can help you?
//               </option>
//               <option value="Consultation">Consultation</option>
//               <option value="Development">Development</option>
//               <option value="Support">Support</option>
//             </select>
            
//           </div>
//           <textarea
//             name="projectDetails"
//             placeholder="Tell us about your project"
//             value={formData.projectDetails}
//             onChange={handleChange}
//             rows="5"
//             required
//           ></textarea>
//           <button type="submit">Submit Request</button>
//           <p className="privacy">
//             By clicking submit, I confirm that I have read and accept Privacy
//             Policy
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import "./Request.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Request() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    helpOption: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({
      ...prevData,
      phone,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Send data to API
    fetch("http://localhost:5000/request/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="request">
      <div className="requestupperlabel">
        <div className="text-container">
          <h1>
            Have A Product Idea Or A Business Challenge You’d Like To Discuss?
          </h1>
          <p>
            To get started, simply fill out the form to set up a free
            consultation with our team.
          </p>
        </div>
      </div>
      <div className="text-container">
      {/* <h1>
          Have A Product Idea Or A Business Challenge You’d Like To Discuss?
        </h1>
        <p>
          To get started, simply fill out the form to set up a free consultation
          with our team.
        </p> */}
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <PhoneInput
              defaultCountry="PK"
              placeholder="+92"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
            />
            <select
              name="helpOption"
              value={formData.helpOption}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                How we can help you?
              </option>
              <option value="Consultation">Consultation</option>
              <option value="Development">Development</option>
              <option value="Support">Support</option>
            </select>
          </div>
          <textarea
            name="projectDetails"
            placeholder="Tell us about your project"
            value={formData.projectDetails}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit">Submit Request</button>
          <p className="privacy">
            By clicking submit, I confirm that I have read and accept Privacy
            Policy
          </p>
        </form>
      </div>
    </div>
  );
}
