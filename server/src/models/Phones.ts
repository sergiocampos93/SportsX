import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('phone')
class Phone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customer_id: string;

  @Column()
  phone_number: string;
}

export default Phone;
