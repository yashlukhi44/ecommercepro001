import {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Add = () =>{

    let navigate = useNavigate();

    useEffect(()=>{
      let sessionData = sessionStorage.getItem('username');
    
      if(sessionData==null){
        navigate('/')
      }
    })
  
      let [hobbyRecord, sethobbyRecord] = useState([]);
      let [city, setCity] = useState(["Surat","Rajkot","vadodara","Navasari"]);
      let [state,setState] = useState({
        image : "", name : "",price: "",desc:""
      })
  
      const getInputData = (e) =>{
        let name = e.target.name;
        var value = e.target.value;
  
        setState({
          ...state, [name]: value
        })
      }
  
      const submitData  = (e) =>{
        e.preventDefault();
  
        // console.log(state);
        fetch("http://localhost:3002/product",{
          method : "post",
          headers : {"Content-type" : "application/json"},
          body : JSON.stringify(state)
        })
        .then(async (ress)=>{
           let record = await ress.json();
           if(record){
               toast.success("Record inserted successfully")
  
           }
           else{
            console.log("something wrong");
           }
        })
        .catch(err=>{
          console.log(err);
        })
      }

    return(
        <div>
            <div className="card">
            <form className="form-horizontal" method="post" onSubmit={(e)=> submitData(e)}>
              <div className="card-body">
                <h4 className="card-title">add Product</h4>

                <div className="form-group row">
                  <label htmlFor="fname" className="col-sm-3 text-end control-label col-form-label">Enter Name</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="name" name="name"  placeholder="Enter Name Here" onChange={(e)=>getInputData(e)} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Enter imaage</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="image" name="image" placeholder="Enter image" onChange={(e)=>getInputData(e)}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Price</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name="price" id="price" placeholder="Price Here" onChange={(e)=>getInputData(e)}/>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Description</label>
                  <div className="col-sm-9">
                    <textarea type="text" className="form-control" name="desc" id="desc" placeholder="desc Here" onChange={(e)=>getInputData(e)}/>
                  </div>
                </div>
               
              </div>
              <div className="border-top">
                <div className="card-body">
                  <button type="submit" name="submit" value="Add Record" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    )
}
export default Add