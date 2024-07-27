import React,{useState,useEffect} from 'react'
 import{useSelector,useDispatch}from 'react-redux';
 import{addCart,delCart}from '../Redux/action';  
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
const Product = () => {
    const{id} =useParams();
    const[product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
     const dispatch= useDispatch();
    const addProduct= (product)=>{
      dispatch (addCart (product));   
    }
     const delProduct = (product)=>{
    dispatch(delCart(product));   
    }
    useEffect(()=>{
        const getProduct = async()=>{
            setLoading(true);
        const response= await fetch(`https://dummyjson.com/products/${id}`)
        setProduct (await response.json());
        setLoading(false);
        } 
        getProduct(); 
    },[]);
    const Loading =()=>{
        return(
            <>
            <div className='col-md-6'>
                <Skeleton height={400}/>
                </div>
            <div className='col-md-6'>
                <Skeleton/>
            </div>
            </>
        )
    }
    const ShowProducts=()=>{
        return(
            <>
            <div className='col-md-6'>
                <img src={product.thumbnail}alt={product.id}
                height="400px" width="400px"/>
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-success'>{product.name}
                </h4>
            {/* <h1 className='display-5'>{product.title}</h1> */}
            <p className='lead'>
                Rating{product.rating && product.rating.rate}&nbsp;
            </p>
            <h4 className='display-6 fw-bolder text-danger'>Rs:{product.price}</h4>
        <p className='lead'>{product.decription}</p>
        {/* <p className='lead'>{product.instructions}</p> */}

        <button className='btn btn-outline-primary py-2 px-2 me-2'
         onClick={() =>addProduct(product)}>
            Add to cart
            </button>
            <button className='btn btn-outline-primary py-2 px-2 me-2'
            onClick={() =>delProduct(product)}>
                Delete
            </button>
           <Link to="/cart" className='btn btn-primary py-2 px-2 me-2'>
            Go to cart
           </Link>
           </div>
            </>
        )
    }
    return(
        <div>
        <div className='container py-5'>
            <div className='row py-5'>
            {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
        </div>
        
    )     
  
}

export default Product