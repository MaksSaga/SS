-- AlterTable
CREATE SEQUENCE admin_id_seq;
ALTER TABLE "Admin" ALTER COLUMN "id" SET DEFAULT nextval('admin_id_seq');
ALTER SEQUENCE admin_id_seq OWNED BY "Admin"."id";

-- AlterTable
CREATE SEQUENCE category_id_seq;
ALTER TABLE "Category" ALTER COLUMN "id" SET DEFAULT nextval('category_id_seq');
ALTER SEQUENCE category_id_seq OWNED BY "Category"."id";

-- AlterTable
CREATE SEQUENCE order_id_seq;
ALTER TABLE "Order" ALTER COLUMN "id" SET DEFAULT nextval('order_id_seq');
ALTER SEQUENCE order_id_seq OWNED BY "Order"."id";

-- AlterTable
CREATE SEQUENCE orderstatus_id_seq;
ALTER TABLE "OrderStatus" ALTER COLUMN "id" SET DEFAULT nextval('orderstatus_id_seq');
ALTER SEQUENCE orderstatus_id_seq OWNED BY "OrderStatus"."id";

-- AlterTable
CREATE SEQUENCE pay_id_seq;
ALTER TABLE "Pay" ALTER COLUMN "id" SET DEFAULT nextval('pay_id_seq');
ALTER SEQUENCE pay_id_seq OWNED BY "Pay"."id";

-- AlterTable
CREATE SEQUENCE poshta_id_seq;
ALTER TABLE "Poshta" ALTER COLUMN "id" SET DEFAULT nextval('poshta_id_seq');
ALTER SEQUENCE poshta_id_seq OWNED BY "Poshta"."id";

-- AlterTable
CREATE SEQUENCE product_id_seq;
ALTER TABLE "Product" ALTER COLUMN "id" SET DEFAULT nextval('product_id_seq');
ALTER SEQUENCE product_id_seq OWNED BY "Product"."id";

-- AlterTable
CREATE SEQUENCE subset_id_seq;
ALTER TABLE "Subset" ALTER COLUMN "id" SET DEFAULT nextval('subset_id_seq');
ALTER SEQUENCE subset_id_seq OWNED BY "Subset"."id";
