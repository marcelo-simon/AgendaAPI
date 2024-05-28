import {
  Contact,
  ContactCreate,
  ContactRepository,
} from "../interfaces/contacts.interface";
import { UserRepository } from "../interfaces/user.interface";
import { ContactsRepositoryPrisma } from "../repositories/contacts.repository";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class ContactUseCase {
  private contactRepository: ContactRepository;
  private userRepository: UserRepository;

  constructor() {
    this.contactRepository = new ContactsRepositoryPrisma();
    this.userRepository = new UserRepositoryPrisma();
  }

  async create({
    email,
    name,
    phone,
    userEmail,
  }: ContactCreate): Promise<Contact> {
    const user = await this.userRepository.findByEmail(userEmail);

    if (!user) {
      throw new Error("User not found");
    }

    const verifyIfExistsContact =
      await this.contactRepository.findByEmailOrPhone(email, phone);

    if (verifyIfExistsContact) {
      throw new Error("Contact already exist");
    }

    const contact = await this.contactRepository.create({
      name,
      email,
      phone,
      userId: user.id,
    });
    return contact;
  }

  async listAllContacts(userEmail: string) {
    const user = await this.userRepository.findByEmail(userEmail);

    if (!user) {
      throw new Error("User not found");
    }

    const contacts = await this.contactRepository.findAllContacts(user.id);
    return contacts;
  }

  async updateContact(ContactCreateDataId: Contact) {
    const data = await this.contactRepository.updateContact(
      ContactCreateDataId
    );
    return data;
  }

  async delete(id: string) {
    const data = await this.contactRepository.delete(id);
    return data;
  }
}

export { ContactUseCase };
