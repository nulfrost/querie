/*
  Warnings:

  - Added the required column `connection` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `connection` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_url` VARCHAR(191) NOT NULL;
