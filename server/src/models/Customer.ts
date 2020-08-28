import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  isLegalEntity: boolean;

  @Column()
  cpf_cnpj: string;

  @Column()
  cep: string;

  @Column()
  email: string;

  @Column()
  classification: 'ativo' | 'inativo' | 'preferencial';
}

export default Customer;
