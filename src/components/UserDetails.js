import React, { useState } from 'react';
import './UserDetails.css';
import data from '../JSONd_Data/Test JSON.json';

const UserDetails = (props) => {
    const [expand, setExpand] = useState(false);
    return (
        <div>
            <h3><div className="user-detail-title">User Detail</div></h3>
            {
                data.members.map((item, index) => {
                    if (item.id === props.location.state) {
                       let ind= item.activity_periods.length-1;
                        return (
                            <div key={index} className="ui cards" style={{ display: "inline-block", marginTop: "10px" }}>
                                <div className="card">
                                    <div className="content">
                                        <div className="header">
                                            {item.real_name}
                                        </div>
                                        <div className="meta">
                                            {"ID : " + item.id}
                                        </div>
                                        <div className="description" style={{ fontWeight: "bold", fontSize: "12px" }}>
                                            {"Last Login : " + item.activity_periods[ind].end_time}
                                        </div>
                                        <div className="description" style={{ fontWeight: "bold", fontSize: "12px" }}>
                                            {"Country/City : " + item.tz}
                                        </div>
                                    </div>
                                    <div className="extra content" onClick={(() => { setExpand(!expand) })}>
                                        <span className="span-style">Show Activity Details</span>
                                        {expand && item.activity_periods.map((item, index) => {
                                            return (
                                                <div key={index} className="item-style">
                                                    {item.start_time + " To " + item.end_time}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return ''
                })
            }
        </div>
    );
}

export default UserDetails;