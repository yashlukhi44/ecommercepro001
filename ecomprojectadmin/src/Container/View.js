import { useEffect, useState  } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const View =  () =>{
    let [adminrecord, setAdminRecord] = useState([]);

    let [deletee, deleteData] = useState([]);

    let navigate = useNavigate();

    useEffect(()=>{
        let sessionData = sessionStorage.getItem('username');
        // console.log(sessionData);
    
        if(sessionData==null){
        navigate('/')
        }
    })


    useEffect(()=>{
        fetch("http://localhost:3001/admins")
        .then(async (ress)=>{
            let record  = await ress.json();
            if(record){
                setAdminRecord(record);
            }
            else{
                toast.error("record not found");
            }
        })
        .catch((err)=>{
            toast.error("Something wrong");
        })
    }, setAdminRecord);

    const removeData = (id) => {
        if (window.confirm("Are you sure?")) {

            fetch('http://localhost:3001/admins'+id,{
                    method: 'DELETE',
                    headers : {"Content-type" : "application/json"}
                })

                .then(async (ress)=>{
                    let record  = await ress.json();
                    if(record){
                        deleteData(deletee);
                    }
                    else{
                        toast.error("record not delete");
                    }
                })
                .catch(err => console.log(err));
        }
    }
    
    return(
            <div className="page-wrapper" style={{marginLeft : "280px"}}>
            {/* ============================================================== */}
            {/* Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            <div className="page-breadcrumb">
                <div className="row">
                <div className="col-12 d-flex no-block align-items-center">
                    <h4 className="page-title">Tables</h4>
                    <div className="ms-auto text-end">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                       
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Container fluid  */}
            {/* ============================================================== */}
            <div className="container-fluid">
                {/* ============================================================== */}
                {/* Start Page Content */}
                {/* ============================================================== */}
                <div className="row">
                <div className="col-12">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title mb-0">Static Table</h5>
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">First</th>
                            <th scope="col">email</th>
                            <th scope="col">gender</th>
                            <th scope="col">hobby</th>
                            <th scope="col">city</th>
                            <th scope="col">image</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {adminrecord && adminrecord.map((v,index)=>{
                                return(
                                    <tr>
                                        <th scope="row">{v.id}</th>
                                        <td>{v.name}</td>
                                        <td>{v.email}</td>
                                        <td>{v.gender}</td>
                                        <td>{v.hobby}</td>
                                        <td>{v.city}</td>
                                        <td>{v.simage}</td>
                                        <td><button type="submit" onClick={(e)=>removeData(e)}>Delete</button></td>
                                </tr>
                                )
                            })}
                        
                        
                        </tbody>
                    </table>
                    </div>
                
                </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
            </div>

 
    )
}

export default View;