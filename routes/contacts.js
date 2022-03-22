import express from "express";
import { createContact, deleteContact, getContact, getContacts, updateContact } from '../controllers/contactsController.js';

const router = express.Router();

router.get('/', getContacts).get('/:id', getContact);
router.post('/', createContact);
router.put('/:id', updateContact).delete('/:id', deleteContact);

export default router;