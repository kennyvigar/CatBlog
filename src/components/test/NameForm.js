import React, { useState } from "react";
import cats from "../../data/cats.js"

const NameForm = () => {
  
  const [form, setState] = useState({
    catKey:"",
    cat: "",
    catnote: "",
    catpic:"",
  });

  const printValues = (e) => {
    e.preventDefault();
    console.log(form.catKey, form.cat, form.catnote, form.catpic);
    cats.push({key:form.catKey,name:form.cat,note:form.catnote, img:form.catpic})
    console.log(cats)

  };

  const updateField = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
        <form onSubmit={printValues}>
          <label>
            cat:
            <input value={form.cat} name="cat" onChange={updateField} />
          </label>
          <br />
          <label>
            catkey:
            <input value={form.catKey} name="catKey" onChange={updateField} />
          </label>
          <br />
          <label>
            catpic:
            <input value={form.catpic} name="catpic" onChange={updateField} />
          </label>
          <br />
          <label>
            catnote:
            <input value={form.catnote} name="catnote" onChange={updateField} />
          </label>
          <br />
          
          <br />
          <button>Submit</button>
        </form>
      );
}

export default NameForm;
//   return (
//     <form onSubmit={printValues}>
//       <label>
//         Username:
//         <input value={form.username} name="username" onChange={updateField} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           value={form.password}
//           name="password"
//           type="password"
//           onChange={updateField}
//         />
//       </label>
//       <br />
//       <button>Submit</button>
//     </form>
//   );
// }

