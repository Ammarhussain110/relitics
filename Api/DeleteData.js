import Password from "antd/lib/input/Password";
import axios from "axios";

class DeleteData {
  constructor() {
    this.result = [];
  }

  DeleteNote = (id) => {
    const res = async () => {
      const resp = await axios
        .delete(`/note/${id}`)

        .catch(function (error) {
          console.log(error.response)
        });
      return resp;
    };
    return res();
  };
  DeleteFavourite = (id) => {
    const res = async () => {
      const resp = await axios
        .delete(`/favorite/${id}`)

        .catch(function (error) {
          console.log(error.response)
        });
      return resp;
    };
    return res();
  };
    Return() {
      return this.result;
    }
  }
export default new DeleteData(); 
