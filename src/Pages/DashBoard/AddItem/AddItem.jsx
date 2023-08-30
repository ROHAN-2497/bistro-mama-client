import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className="w-full px-10">
      <SectionTitle subTitle="add an item" heading="whats news"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full "
            {...register("name", {required: true, maxLength: 120})} 
          />
        </div>
      <div className="flex gap-4 my-4">
      <div className=" w-full ">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select {...register("category", { required: true })} className="select select-primary w-full ">
            <option disabled selected>
              Category
            </option>
            <option>Pizza</option>
            <option>Salad</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full "
            {...register("price", { required: true })}
          />
        </div>
      </div>
        <div className="form-control">
  <label className="label">
    <span className="label-text">recipe details*</span>
  </label>
  <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="recipe details"></textarea>
  <label className="label">
  </label>
</div>
<div className="form-control w-full my-4 max-w-xs ">
  <label className="label">
    <span className="label-text">Item Image*</span>
  </label>
  <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
 <input className="btn w-24 bg-black text-white mt-4" type="submit" value="Add Items" />
</div>
      </form>
    </div>
  );
};

export default AddItem;
