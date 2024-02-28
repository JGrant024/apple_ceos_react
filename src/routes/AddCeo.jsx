import { Form, redirect } from "react-router-dom";
import slugify from "slugify";

export async function action({ request }) {
  const formData = await request.formData();
  // only use the variable name in the action function
  const name = formData.get("ceoName");
  const slug = slugify(name, {
    replacement: "_",
    lower: true,
    strict: true,
  });
  const year = formData.get("ceoYear");
  //   Format data as JSON
  const data = { name, slug, year: Number(year) };
  //   API POST route
  const url = "http://localhost:8000/create";
  // Setup Fetch() to POST Data
  const addCeo = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

  console.log("ADD CEO RESPONSE:", addCeo);

  return redirect("/ceos");
}

const AddCeo = () => {
  return (
    <Form method="POST">
      <label>
        CEO Name
        <input type="text" name="ceoName" />
      </label>
      <label>
        Year Served
        <input type="number" name="ceoYear" min="1976" max="2100" />
      </label>
      <button type="submit">Add new Ceo</button>
    </Form>
  );
};

export default AddCeo;
