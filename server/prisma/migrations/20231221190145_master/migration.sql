/*
  Warnings:

  - Added the required column `description` to the `OrderStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Pay` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Poshta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderStatus" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pay" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Poshta" ADD COLUMN     "description" TEXT NOT NULL;
