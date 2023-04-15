/*
  Warnings:

  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestaurantTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantTable" DROP CONSTRAINT "RestaurantTable_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantTable" DROP CONSTRAINT "RestaurantTable_tableId_fkey";

-- DropForeignKey
ALTER TABLE "itens" DROP CONSTRAINT "itens_menuId_fkey";

-- DropTable
DROP TABLE "Menu";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "RestaurantTable";

-- CreateTable
CREATE TABLE "menus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "restaurantId" INTEGER,

    CONSTRAINT "menus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurantTables" (
    "id" SERIAL NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    "tableId" INTEGER,

    CONSTRAINT "restaurantTables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderItens" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER,
    "itemId" INTEGER,

    CONSTRAINT "orderItens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "menus" ADD CONSTRAINT "menus_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurantTables" ADD CONSTRAINT "restaurantTables_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurantTables" ADD CONSTRAINT "restaurantTables_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItens" ADD CONSTRAINT "orderItens_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItens" ADD CONSTRAINT "orderItens_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "itens"("id") ON DELETE SET NULL ON UPDATE CASCADE;
