import React from 'react'

function EditPatient({ editForm, handlePatientUpdate, handleChange }) 
{
    let {id, name, age, address, bloodGroup, email, phone, actions} = editForm

// PATCH request; calls handlePatientUpdate to push changes to the page
    function handleEditForm(e) {
        e.preventDefault();
        fetch(`http://localhost:8080/customers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editForm),
        })
            .then(resp => resp.json())
            .then(updatedPatient => {
                handlePatientUpdate(updatedPatient)})
    }

    return (
        <div>
            <h4>Edit patient</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="name" value={name} onChange={handleChange}/>
                <input type="text" name="age" value={age} onChange={handleChange}/>
                <input type="text" name="address" value={address} onChange={handleChange}/>
                <input type="text" name="bloodGroup" value={bloodGroup} onChange={handleChange}/>
                <input type="text" name="email" value={email} onChange={handleChange}/>
                <input type="text" name="phone" value={phone} onChange={handleChange}/>
                <input type="text" name="actions" value={actions} onChange={handleChange}/>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default EditPatient