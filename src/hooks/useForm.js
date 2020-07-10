import { useState } from "react";

// Fungsi untuk mengecek apakah sebuah object kosong
const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

// Untuk mengvalidate apakah ada errors
// Kalo ada maka pake fungsi setErrors untuk mengupdate state error
const validateError = (obj, errorsObj, setErrors) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === "") {
      errorsObj[key] = { type: "required" };
    }
  });
  setErrors(errorsObj);
};

// useForm hook adalah hook reusable yanag digunakan untuk membuat suatu form tanpa harus
// mengsetup semua fungsi yang diperlukan
// Terdapat juga error validation untuk input kosong
export default (initialValue) => {
  const [data, setData] = useState(initialValue);
  const [errors, setErrors] = useState(null);
  const errorsObj = {};

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  // Fungsi wrapper yang untuk onSubmit
  // Developer harus pass in fungsi sendiri untuk menjalankannya
  const handleSubmit = (func) => {
    return async function (e) {
      e.preventDefault();
      // Validasi error
      validateError(data, errorsObj, setErrors);
      // Cek apakah object kosong, kalau iya
      // Maka fungsi yang di pass in tidak dijalankan
      if (!isEmpty(errorsObj)) {
        return;
      }
      return func();
    };
  };

  return { data, setData, errors, onChange, handleSubmit };
};
