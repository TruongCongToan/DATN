import React ,{useState} from 'react'
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
import './ModalUser.css'


const ModalUser = (props) => {
    const toggle =() =>{
        props.toggleCloseModel();
    }


    const [state, setstate] = useState({
        username:'',
        password:'',
        email:'',
        phonenumber:'',
        address:''
    });
    const [errorValid, seterrorValid] = useState('');

    //fuction lay du lieu input
    
    const handleOnChangeInput = (e,id) =>{
        //good code
        let copyInputState = {...state};
        copyInputState[id] = e.target.value;
       setstate(copyInputState);
    } 
    //function add new user
    const handleAddNewUser =() =>{
        let isValid = checkValidateForm();
        if (isValid === true) {
            props.createNewUser(state);
        }
    }
    //check validate input form
    const checkValidateForm=() => {
        let isValid= true;
        let arrInput =['username','password','email','phonenumber','address'];
        for (let  i = 0;  i < arrInput.length;  i++) {
            const element = arrInput[ i];
            if (!state[element]) {
                isValid=false;
                alert('Bạn cần nhập dữ liệu vào ô : '+element)
                break;
            }
        }
        return isValid;
    } 
    return (
        <div>
                    <Modal 
                    isOpen={props.isOpen}
                    toggle={() => {toggle()}} 
                    className={'modal-user-container'} 
                    size='lg'
                    >

                    <ModalHeader toggle={()=>{toggle()}}>
                    Thêm mới người dùng 
                    </ModalHeader>
                    <ModalBody>
                   
                    <div className='modal-user-body '>
                   
                                <div className='input-container'>
                                    <labe>UserName</labe>
                                    <input type='text' 
                                    onChange={(e) => {handleOnChangeInput(e,"username")}}
                                    value={state.username}
                                    />
                                </div>
                                <div className='input-container'>
                                    <labe>Password</labe>
                                    <input type='text' 
                                    onChange={(e) => {handleOnChangeInput(e,"password")}}
                                    value={state.password}
                                    />
                                </div>

                                <div className='input-container'>
                                    <labe>Email</labe>
                                    <input type='text' 
                                    onChange={(e) => {handleOnChangeInput(e,"email")}}
                                    value={state.email}
                                    />
                                </div>
                                <div className='input-container'>
                                    <labe>Phone  Number </labe>
                                    <input type='text' 
                                    onChange={(e) => {handleOnChangeInput(e,"phonenumber")}}
                                    value={state.phonenumber}
                                    />
                                </div>
                                <div className='input-container max-width-input'>
                                    <labe>Address</labe>
                                    <input type='text' 
                                    onChange={(e) => {handleOnChangeInput(e,"address")}}
                                    value={state.address}
                                    />
                                </div>
                     </div>      
                        
                   
                    </ModalBody>
                    <ModalFooter>
                    <Button
                        color="primary"
                        onClick={()=>{handleAddNewUser()}}
                    >
                        Lưu
                    </Button>
                    {' '}
                    <Button onClick={()=>{toggle()}}>
                        Hủy
                    </Button>
                    </ModalFooter>
                </Modal>
        </div>
    );
}

export default ModalUser
