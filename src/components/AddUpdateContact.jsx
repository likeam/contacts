import React from 'react'
import Modal from './Modal'
import { Field, Form, Formik } from 'formik'
import { collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { addDoc } from 'firebase/firestore'

function AddUpdateContact({ isOpen, onClose}) {

    const addContact = async (contact) =>{

        try {
            const contactRef =  collection(db, "contacts");
            await  addDoc(contactRef, contact);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
         <Modal isOpen={isOpen} onClose={onClose} >
            <Formik initialValues={{
                    name: "",
                    mobile : "",
                }} 
                onSubmit={(values) =>{
                    console.log(values);
                    addContact(values);
                }}
            >
                <Form className='flex flex-col'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='name' >Name</label>
                        <Field name= "name" className="h-10 border" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='mobile' >Mobile #</label>
                        <Field type="number" name= "mobile" className="h-10 border" />
                    </div>
                    <button className='bg-orange px-3 py-1.5 border rounded-md my-4' >Add contact</button>
                </Form>
            </Formik>
         </Modal>
    </div>
  )
}

export default AddUpdateContact