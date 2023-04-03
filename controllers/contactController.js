const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//@desc Get All Contacts
//@route GET /api/contacts
//@access public
const getContacts =asyncHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json({length:contacts.length, contacts:contacts})
});


//@desc POST Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(req,res)=>{
    console.log(req.body)
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are Mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json({message:"Item Added Successful",contact:contact})
});

//@desc GET Contact
//@route GET /api/contacts/:id
//@access public
const getContact =asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
});

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact =asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({message:"Updated Item Successful",updateContact:updateContact})
});

//@desc DELETE Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    await Contact.findOneAndRemove()
    res.status(200).json({message:"Removed Item Successful",contact:contact})
});

module.exports ={getContacts,createContact,getContact,updateContact,deleteContact}