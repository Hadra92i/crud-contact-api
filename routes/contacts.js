import express from "express";
import { createContact, deleteContact, getContact, getContacts, updateContact }
    from '../controllers/contactsController.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/', createContact);
router.put('/:id', updateContact)
router.delete('/:id', deleteContact);

export default router;