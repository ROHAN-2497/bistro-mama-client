const FoodCart = ({ item }) => {
  const { image, recipe, name, price } = item;
  const handleAddToCart = item =>{
    console.log(item);
  }

  return (
    <div>
      <div className="card w-96 bg-slate-200 rounded-none bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute px-2 bg-slate-900 text-white right-0 mt-4 mr-4 ">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-yellow-500">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
