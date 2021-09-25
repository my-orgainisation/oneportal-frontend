import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
// import {refresh,setRefresh} from '../FacultyDashboard';

const Student_card=({studentData,refresh,setRefresh})=>{

    const del_std=(event,value)=>{
        event.preventDefault();
		console.log(studentData.id)
		// console.log(value)
		
        Axios.get("http://oneportal.pythonanywhere.com/sub_registrar/sub_delete_student/"+studentData.id,
		{
			headers:{"Authorization" : "Token "+localStorage.getItem('Token')
		  }
	  }).then(response=>{
		  console.log(response.msg)
		  setRefresh(!refresh)
		  toast("Deleted",{type:'error'})
		//   get_student()
		//   toast("Deleted",{type:'error'})
		 
	  }).catch(error=>{
		  console.log(error)
		  toast("Some Error occured!",{type:'error'})
	  })
		
    }

    const conf_std=(event)=>{
        event.preventDefault();
		console.log(studentData.id)
		Axios.get("http://oneportal.pythonanywhere.com/sub_registrar/confirm_temp_student/"+studentData.id,
		{
			headers:{"Authorization" : "Token "+localStorage.getItem('Token')
		  }
	  }).then(response=>{
		  console.log(response.msg)
		  setRefresh(!refresh)
		  toast("Confirmed",{type:'success'})
		//   get_student()
		//   toast("Deleted",{type:'error'})
		 
	  }).catch(error=>{
		  console.log(error)
		  toast("Some Error occured!",{type:'error'})
	  })
		
    }
        
    

return (
	<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
		<div className=" m-2 jumbotron font-weight-bold">
			
			<h5 className="text-center text-dark font-weight-bold">Name: {studentData.name}</h5>
			<h6 className="text-center text-dark font-weight-bold">Mob: +91 7999697546</h6>
			<h6 className="text-center text-dark font-weight-bold">Opted for: B.Tech CSE</h6>
			<h6 className="text-center text-dark font-weight-bold">Year: {studentData.id}</h6>
			<div className="text-center">
				<button className="btn btn-outline-success " onClick={(event)=>conf_std(event)}>Confirm</button>
				<button className="btn btn-outline-danger " onClick={(event)=>del_std(event)}>Delete</button>
			</div>
		</div>
			
		{/* </div> */}
	</div>
// </div>
)
}

export default Student_card;