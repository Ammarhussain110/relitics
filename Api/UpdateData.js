import Password from "antd/lib/input/Password";
import axios from "axios";

class UpdateData {
  constructor() {
    this.result = [];
  }

  EditNotes = (id, title, details) => {
    const res = async () => {
      const resp = await axios
        .put(`/note/${id}`, {
            title: title,
            detail: details,
            city:'lahore', 
            state:"pakistan"
         
        })

        .catch(function (error) {
          console.log(error.response)
          settingErrors(error.response.data.message);
        });
      return resp;
    };
    return res();
  };

 
    Return() {
      return this.result;
    }
  }
export default new UpdateData();