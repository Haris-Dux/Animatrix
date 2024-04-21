import react, { useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios'

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/api/support/createSupport",
        formData
      ).then(()=>{
        setFormData({
          firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
        })
      })
      
      toast.success("Successfully Submitted");
    } catch (error) {
      console.error("Failed to save contact:", error);
    }
  };

  return (
    <>
      <main class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div class="max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 class="text-indigo-600 font-semibold">Contact</h3>
            <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Get in touch 
            </p>
            <p>We’d love to hear from you! Please fill out the form bellow.</p>
          </div>
          <div class="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} class="space-y-5">
              <div class="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                <div>
                  <label class="font-medium">First name</label>
                  <input
                    value={formData.firstName}
                    onChange={handleChange}
                    name="firstName"
                    type="text"
                    required
                    class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label class="font-medium">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label class="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label class="font-medium">Phone number</label>
                <div class=" mt-2">
                  <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+44 20 7123 4567"
                    required
                    class="w-full pl-[.7rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label class="font-medium">Message</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  class="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Form;
