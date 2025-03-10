export interface User {
  id: string;
  email: string;
  name: string;
}

export interface UserCreate {
  email: string;
  name: string;
}

export interface UserRepository {
  create(data: UserCreate): Promise<User>;
}

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
}