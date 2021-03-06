import React from "react";
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios';
import variables from './variables'

const Notes = (props) => {
    console.log("the props notes", props.info);
    console.log("the props refs", props.refs)

    const onDelete = (e, item) => {
        console.log("e", e);
        e.preventDefault();
        console.log("the item:", item);
        console.log("the item _id:", item._id);
        let temp = { ...props.info }
        temp.tasks = temp.tasks.filter(el => el._id !== item._id)
        axios.put(`${variables.prod_heroku_address}/api/v1/updateOne/${props.info._id}`, temp, { withCredentials: true })
            .then(() => props.refs.setRefreshState(!props.refs.refreshState))
            .catch(err => console.log(err))
    }


    return (
        <div>
            {props.info.tasks !== undefined && props.info.tasks.map((item, index) => (

                <div className="note" key={index}>

                    <div className="innNote">
                        <button onClick={(e) => onDelete(e, item)}><DeleteIcon /></button>
                        <h1>{item.title}</h1>
                        <p>{item.date.substring(0, 10)}</p>
                    </div>
                    <hr />
                    <div className="p">
                        <p>{item.description}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Notes
