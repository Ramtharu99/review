/*
  Warnings:

  - You are about to drop the column `restaurantId` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `is_admin` on the `User` table. All the data in the column will be lost.
  - Added the required column `restaurant_id` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurant_id` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_restaurantId_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "restaurantId",
ADD COLUMN     "restaurant_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "restaurantId",
ADD COLUMN     "restaurant_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_admin",
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
