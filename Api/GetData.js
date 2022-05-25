import axios from "axios";
import React from "react";
import { message } from "antd";
class GetData {
constructor(){
this.result=[];
}

AllPackeges = () => {
    const res = async () => {
      const resp = await axios
        .get("/package")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  BlogComponent = () => {
    const res = async () => {
      const resp = await axios
        .get("/article")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  BlogDetail = (id) => {
    const res = async () => {
      const resp = await axios
        .get(`/article/${id}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  BlogCatagory = () => {
    const res = async () => {
      const resp = await axios
        .get('/category')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  GetMerchantId = () => {
    const res = async () => {
      const resp = await axios
        .get('/config/paypal')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  AllNotes = () => {
    const res = async () => {
      const resp = await axios
        .get('/note')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  NotesDetail = (id) => {
    const res = async () => {
      const resp = await axios
        .get(`/note/${id}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  RentalGrowth = (pageNo) => {
    const res = async () => {
      const resp = await axios
        .get(`/stats/rentalGrowth?pageNumber=${pageNo}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  Aprecation = (pageNo) => {
    const res = async () => {
      const resp = await axios
        .get(`/stats/appreciation?pageNumber=${pageNo}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };

  EditGet = () => {
    const res = async () => {
      const resp = await axios
        .get('/users/profile')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  Resource = () => {
    const res = async () => {
      const resp = await axios
        .get("/resource")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  showNotes = (id) => {
    const res = async () => {
      const resp = await axios
        .get(`/note/${id}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  CountryData = (id) => {
    const res = async () => {
      const resp = await axios
        .get('/countries')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  StatesData = (country) => {
    const res = async () => {
      const resp = await axios
        .get(`states/${country}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  Favourite = () => {
    const res = async () => {
      const resp = await axios
        .get("/favorite")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  getFavourite = () => {
    const res = async () => {
      const resp = await axios
        .get("/favorite")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  NotificationsData = (id) => {
    const res = async () => {
      const resp = await axios
        .get(`/notification/${id}`)
        .catch(function (error) {
          console.log("Error:",error);
        });
        console.log("result:",resp)
      return resp;
    };
    return res();
  };
  Region = (id) => {
    const res = async () => {
      const resp = await axios
        .get('/market/region_names')
        .catch(function (error) {
          console.log("Error:",error);
        });
        console.log("result:",resp)
      return resp;
    };
    return res();
  };
  MarketRegion = () => {
    const res = async () => {
      const resp = await axios
        .get("/stats/allStates")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  RegionId = (regions) => {
    const res = async () => {
      console.log("rtu", regions)
      const resp = await axios
        .get(`/stats/appreciation?keyword=${regions}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  AprecationId = (regions) => {
    const res = async () => {
      console.log("rtu", regions)
      const resp = await axios
        .get(`/stats/appreciation?keyword=${regions}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };

  
}
export default new GetData();