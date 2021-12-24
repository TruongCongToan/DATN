import React ,{useState} from 'react'
import './UserManage.css'
import {useFetch,handleLoginAPI} from '../CustomHooks/useFetch'
import ModalUser from './ModalUser'


const UserManage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [dataOut, setdataOut] = useState(null)

    var url='https://api-truongcongtoan.herokuapp.com/api/users' ;
    //fetch data 
  
    const {data:data} = useFetch(url);

    

    //function add new user
   const handleAddUser = () =>{
       setIsOpenModal(!isOpenModal);

    }
    //dong modal
    const toggleUserModal = () =>{
        setIsOpenModal(!isOpenModal);
    }  
    //create new user
    const createNewUser =async (data) =>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        try {
            let response = await handleLoginAPI(data);
            console.log("response" , response)
          

            
        } catch (error) {
            alert("username bạn vừa nhập đã có trong danh sách. Bạn vui lòng thực hiện lại !")
        }
    }
    return (
        <div className='users-container'>
            
            <ModalUser 
            isOpen = {isOpenModal}
            toggleCloseModel = {toggleUserModal}
            createNewUser ={createNewUser}

            />
            <div className='user-manager-title text-center'>
                Manage user
            </div>
            <div className='user-manager-body'>
                    <div className='mx-1'>
                        <button 
                        className='btn btn-primary px-3' 
                        onClick={() => handleAddUser()}
                        >
                        <i className="fas fa-plus"></i>Thêm người dùng</button>

                       
                    </div>

                <div className='user-table'>
                <table id="customers">
                    <thead>
                    <tr>
                        <th >Số thứ tự</th>
                        <th>Tên đăng nhập</th>
                        <th>email</th>
                        <th>Mật khẩu</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Giới tính</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                       {
                           data&&data.map((item,index) =>{
                               return(
                                   <> 
                                    <tr key={index}>
                                        <td >{item.id}</td>
                                        <td >{item.username}</td>
                                        <td >{item.email}</td>
                                        <td >{item.password}</td>
                                        <td >{item.address}</td>
                                        <td >{item.phonenumber}</td>
                                        <td >{item.gender}</td>
                                        <td>
                                            <button className='btn-edit'>
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className='btn-delete'>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                   </>
                               );
                              
                           })
                       }
                       
               </tbody>
                  
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserManage
