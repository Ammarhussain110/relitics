import Password from "antd/lib/input/Password";
import axios from "axios";

class Acount {
  constructor() {
    this.result = [];
  }

  Registeration = (data, id, settingErrors) => {
    // alert('1')
    const res = async () => {
      const resp = await axios
        .post("/users", {
          firstName: data.firstName,
          lastName: data.familyName,
          username: data.username,
          city: data.city,
          state: data.state,
          dob: data.dob,
          phone: data.phone,
          image: data.profilePic,
          packageID: data.pkgId,
          email: data.email,
          password: data.password
        })

        .catch(function (error) {
          console.log(error.response)
          alert('2')
          settingErrors(error.response.data.message);
        });
      return resp;
    };
    return res();
  };
  Login = (username, password, setError, setModel, setOtpModal) => {
    const res = async () => {

      const resp = await axios
        .post("/users/login", {

          email: username,
          password: password
        })

        .catch(function (error) {
          console.log(error.response.data);
          setError(error.response.data.message);
          if (error.response.data.message == "Email is not verified!") {
            setOtpModal(true)
          }
          else
            setModel(true)

        });
      return resp;
    };
    return res();
  };
  Contact = (userInput, setError, errorModel) => {
    
    const res = async () => {
      const resp = await axios
        .post("/contacts", {
          firstName: userInput.firstName,
          lastName: userInput.lastName,
          phone: "0323233323",
          email: userInput.email,
          subject: userInput.subject,
          message: userInput.message
        })

        .catch(function (error) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
          errorModel(true)

        });
      return resp;
    };
    return res();
  };
  EnterEmail = (email, setError, errorModal) => {
    
    const res = async () => {
      const resp = await axios
        .post("/users/sendcode", {
          email: email

        })

        .catch(function (error) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
          errorModal(true)
        });
      return resp;
    };
    return res();
  };
  verifyOtp = (email, otp, setError) => {
    const res = async () => {
      const resp = await axios
        .post("/users/verifycode", {
          email: email,
          confirmation_code: otp
        })

        .catch(function (error) {
          console.log(error.response.data.message);
          // alert(1)
          setError(error.response.data.message);
        });
      return resp;
    };
    return res();
  };
  confirmPassword = (Password, otp, email, setError, setErrorModel) => {
    
    const res = async () => {
      const resp = await axios
        .put("/users/changepassword", {
          email: email,
          confirmation_code: otp,
          newPassword: Password
        })

        .catch(function (error) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
          errorModal(true)
        });
      return resp;
    };
    return res();
  };
  userValidation = (firstName, lastName, email, password, state, country, username, DOB, Error) => {
    
    const res = async () => {
      const resp = await axios
        .post("/users/verifysignup", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password:password,
          username: username,
          country: country,
          state: state,
          dob: DOB
        })

        .catch(function (error) {
          console.log(error.response.data.message);
          Error(error.response.data.message);
          errorModal(true)
        });
      return resp;
    };
    return res();
  };
  updateAccount = (userId, firstName, lastName, email, password, state, country) => {
    
    const res = async () => {
      const resp = await axios
        .put(`users/${userId}`, {
          email: email,
          confirmation_code: otp,
          newPassword: Password
        })

        .catch(function (error) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
          errorModal(true)
        });
      return resp;
    };
    return res();
  };




  Return() {
    return this.result;
  }
}
export default new Acount();