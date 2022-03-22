import Contact from "../models/contact.js";

export const getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const createContact = async (req, res) => {
    try {
        const contact = await new Contact(req.body);
        const newContact = await contact.save();
        res.status(200).json(newContact);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteContact = async (req, res) => {
    try {
        await Contact.findOneAndDelete(req.params.id);
        res.status(200).json("Contact has been deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}