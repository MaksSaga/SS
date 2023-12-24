-- AlterTable
CREATE SEQUENCE pay_id_seq;
ALTER TABLE "Pay" ADD COLUMN     "id2" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('pay_id_seq');
ALTER SEQUENCE pay_id_seq OWNED BY "Pay"."id";
