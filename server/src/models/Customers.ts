import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  isLegalEntity: boolean;

  @Column()
  name: string;

  @Column()
  cep: string;

  @Column()
  email: string;

  @Column()
  classification: 'ativo' | 'inativo' | 'preferencial';

  @Column()
  phone: string;
}

export default Customer;
