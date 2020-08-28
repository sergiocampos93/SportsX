import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import Customer from './Customer';

@Entity('phones')
class Phone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customer_id: string;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column()
  phone_number: string;
}

export default Phone;
