const asyncHandler = require("express-async-handler");

//@desc Get All Contacts
//@route GET /api/contacts
//@access public
const getContacts =asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get All Contacts"})
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
    res.status(201).json({message:"New Contact Created"})
});

//@desc GET Contact
//@route GET /api/contacts/:id
//@access public
const getContact =asyncHandler(async(req,res)=>{
    res.status(200).json({message:`GET Contact for ${req.params.id}`})
});

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact =asyncHandler(async(req,res)=>{
    res.status(200).json({message:`PUT Contact for ${req.params.id}`})
});

//@desc DELETE Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`DELETE Contact for ${req.params.id}`})
});

module.exports ={getContacts,createContact,getContact,updateContact,deleteContact}