import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cep: string;

  @Column()
  email: string;

  @Column()
  classification: string;

  @Column()
  phone: string;
}

export default Customer;
