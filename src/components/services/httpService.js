import axios from "axios";

/*********************************Product service end points****************************************************************/
export const saveProduct = async (data) => {   
    return await axios.post("http://localhost:5000/api/v1/product", data);
  };

  export const getProduct = async () => {   
    return await axios.get("http://localhost:5000/api/v1/product");
  };

  export const updateProduct = async (data, updatedID) => {
    return await axios.put(
      `http://localhost:5000/api/v1/product/${updatedID}`,
      data
    );
  };

  export const deleteProduct = async (delID) => {
    return await axios.put(
      `http://localhost:5000/api/v1/product/${delID}/del`
    );
  };

  