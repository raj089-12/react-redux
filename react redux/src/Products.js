import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  // useEffect(()=>{
  //   const getProducts = async ()=>{
  //   setLoading(true);
  //     const response = await fetch('https://dummyjson.com/products')
  //     setData (await response.clone().json());
  //     setFilter(await response.json());
  //     // fetch('https://dummyjson.com/products')
  //     //    .then (response=>response.json())
  //     //     .then (data=>setData(data))
  //     setLoading(false);
  //     //console.log(data);
  //   }
  //   getProducts();
  // },[]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     const response = await fetch('(https://dummyjson.com/products)');
  //     setData(await response.clone().json());
  //     setFilter(await response.json()); // This line should be removed
  //     setLoading(false);
  //   };
  //   getProducts();
  // }, []);

  // const Loading =()=>{
  // return (
  //   <>
  //   <h1>Loading...</h1>
  //   </>
  // )};

  // // const filterProducts =(cat)=>{
  // //   const updateList = ((x)=> x.category === cat);
  // //   setFilter(updateList);
  // // }

  // const filterProducts = (cat) => {
  //   const updateList = data.filter((x) => x.category === cat);
  //   setFilter(updateList);
  // }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const jsonData = await response.json();
      setData(jsonData.products);
      setFilter(jsonData.products);
      setLoading(false);
    };
    getProducts();
  }, []);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     // console.log('Fetching products...');
  //     setLoading(true);
  //     const response = await fetch('(https://dummyjson.com/products)');
  //     // console.log('Response:', response);
  //     const jsonData = await response.json();
  //     // console.log('JSON Data:', jsonData);
  //     setData(jsonData.products);
  //     setFilter(jsonData.products);
  //     setLoading(false);
  //   };
  //   getProducts();
  // }, []);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     try {
  //       // const response = await fetch('(https://dummyjson.com/products)');

  //       // const response = await fetch('(https://dummyjson.com/products)');
  //       const response = await fetch("https://dummyjson.com/products");
  //       // console.log(response);

  //       const jsonData = await response.json();
  //       setData(jsonData.products);
  //       setFilter(jsonData.products);
  //     } catch (error) {
  //       // console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getProducts();
  // }, []);

  const Loading = () => {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  };

  const filterProducts = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="button text-center my-5">
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>

          <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProducts("beauty")}
          >
           Beauty
          </button>

          {/* <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProducts("Laptops")}
          >
            Laptops
          </button> */}

          <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProducts("fragrances")}
          >
            fragrances
          </button>

          <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProducts("furniture")}
          >
          Furniture
          </button>

          {/* <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProducts("skincare")}
          >
            skincare
          </button> */}

          <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProducts("groceries")}
          >
            groceries
          </button>

          {/* <button
            className="btn btn-outline-danger me-2"
            onClick={() => filterProducts("home-decoration")}
          >
            home-decoration
          </button> */}

          {/* <button className ='btn btn-outline-danger me-2'
        onClick={()=>filterProducts("Korean")}>Korean</button>

<button className ='btn btn-outline-danger me-2'
        onClick={()=>filterProducts("Moroccan")}>Moroccan</button>

        <button className ='btn btn-outline-danger me-2'
        onClick={()=>filterProducts("Thai")}>Thai</button>

        <button className ='btn btn-outline-danger me-2'
        onClick={()=>filterProducts("Greek")}>Greek</button>

<button className ='btn btn-outline-danger me-2'
        onClick={()=>filterProducts("Turkey")}>Turkey</button>

        <button className ='btn btn-outline-danger me-2'
        onClick={()=>filterProducts("Indian")}>Indian</button>

<button className ='btn btn-outline-danger me-2'
        onClick={()=>filterProducts("Russian")}>Russian</button>

<button className ='btn btn-outline-danger me-2'
        onClick={()=>filterProducts("Lebanese")}>Lebanese</button>

<button className ='btn btn-outline-danger me-2'
        onClick={()=>filterProducts("Brazilian")}>Brazilian</button> */}
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card h-100">
                  <Link to={`/Product/${product.id}`}>
                    {" "}
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      height="300px"
                    />
                  </Link>
                  {/* <div className='card-title'>{product.brand}</div>  */}

                  {/* <div className='card-body'>
                <div className='card-title'>{product.title}</div>
                <p className='card-text text-danger fw-bolder'>{product.price}</p>
 <Link to={`/Product/${product.id}`} className='btn btn-outline-danger'>Buy Now</Link> 
             </div> */}
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container py-3 my-3">
        <div className="row">
          <div className=" col-sm-12">
            <h2 className="display-4 text-center">Latest products</h2>
          </div>
          <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
