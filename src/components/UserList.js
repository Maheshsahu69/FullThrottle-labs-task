import React from 'react';
import './UserList.css';
import data from '../JSONd_Data/Test JSON.json';
import {useHistory} from 'react-router-dom';
const UserList = () => {
    const history=useHistory();
    let id='';
        const getUserDetails =(itemId) =>{
            id=itemId;
            if(id){
                history.push('/userdetail',id);
            }
            
        }
    
  
    return (
        <div className="outer-div">
            <h3><div className="user-list-title">User List</div></h3>
            {data.members.map((item, index) => {
                return (
                    <div style={{display:"inline-block", margin:"5px"}} className="ui cards" key={index}>
                        <div className="card">
                            <div className="content">
                                <div className="header">
                                    {item.real_name}
                                </div>
                                <div className="meta">
                                    {item.tz}
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui basic green button" onClick={()=>getUserDetails(item.id)}>User Details</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default UserList;