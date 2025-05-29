import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, data); // запис у файл
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
