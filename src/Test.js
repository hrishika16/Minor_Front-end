// import axios from 'axios'
// import React,{useState} from 'react'
// import './css/test.css'

// function Test() {
//     const [role, setrole] = useState('')
//     const [industry, setindustry] = useState('')
//     const [category, setcategory] = useState('')
//     const [functional, setfunctional] = useState(initialState)
//     const [emp_type, setemp_type] = useState('emp_type')
//     const [skills, setskills] = useState('')
//     const [despcrition, setdespcrition] = useState('')

//     const handleSub = e =>{
//         e.preventDefault()
//         if(role === '' || industry=== '' || category=== '' || skills === '' || despcrition === ''){
//             console.log('some field is missing')
//         }
//         else{
//             axios({
//                 url : 'http://localhost:3001/companyhirepost',
//                 method : 'post',
//                 headers : {
//                     AuthKey : 'asdfgh'
//                 },
//                 data : {
//                     'RoleCategory' : category,
//                     'role' : role,
//                     'industryType' : industry,
//                     // 'functionalArea' : degree,
//                     // 'colleageName' : colleageName,
//                     // 'MasterDegree' : MasterDegree,
//                     // 'colleageName2 ' : colleageName2,
//                     // 'designation' : designation,
//                     // 'companyName' : companyName,
//                     // 'dateofJoining' : dateofJoining,
//                     // 'jobType' : emp_Type,
//                     // 'email' : mail
//                 }
//             })
//         }
//     }

//     return (
//         <div>
//             <input
//                 type='text'
//                 placeholder='Role'
//                 name='role'
//                 value={role}
//                 onChange={e => setrole(e.target.value)}
//             />
//             <br/>
//             <input
//                 type='text'
//                 placeholder='Industry'
//                 name='Industry'
//                 value={industry}
//                 onChange={e => setindustry(e.target.value)}
//             />
//             <br/>
//             <input
//                 type='text'
//                 placeholder='functional'
//                 name='functional'
//                 value={functional}
//                 onChange={e => setfunctional(e.target.value)}
//             />
//             <br/>
//             <select className="custom-select emp_select" value={emp_type} onChange={e => setemp_type(e.target.value)}>
//                 <option selected disabled defaultValue='emp_type' className='emp_sel_txt_1'>Employee Type</option>
//                 <option defaultValue="full_time " className='emp_sel_txt'>Full Time </option>
//                 <option defaultValue="part_time " className='emp_sel_txt'>Part Time </option>
//                 <option defaultValue="self_employed " className='emp_sel_txt'>Self Employed </option>
//                 <option defaultValue="freelance" className='emp_sel_txt'>Freelance </option>
//                 <option defaultValue="internship  " className='emp_sel_txt'>Internship </option>
//                 <option defaultValue="trainee  " className='emp_sel_txt'>Trainee </option>
//             </select>
//             <br/>
//             <input
//                 type='text'
//                 placeholder='category'
//                 name='category'
//                 value={category}
//                 onChange={e => setcategory(e.target.value)}
//             />
//             <br/>
//             {/* skills */}
//             <input
//                 type='text'
//                 placeholder='skills'
//                 name='skills'
//                 value={skills}
//                 onChange={e => setskills(e.target.value)}
//             />
//             <br/>
//             <textarea
//                 type='text'
//                 placeholder='despcrition'
//                 name='despcrition'
//                 value={despcrition}
//                 onChange={e => setdespcrition(e.target.value)}
//             />
//             <br/>
//             <button onClick={handleSub}>Submit</button>
//         </div>
//     )
// }

// export default Test
