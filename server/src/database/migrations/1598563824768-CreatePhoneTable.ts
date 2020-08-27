import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class CreatePhoneTable1598563824768 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'phones',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'customer_id',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'phone_number',
          type: 'varchar',
          isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey('phones', new TableForeignKey({
      name: 'CustomerPhones',
      columnNames: ['customer_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'customers',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('phones', 'CustomerPhones');
    await queryRunner.dropTable('phones');
  }
}
