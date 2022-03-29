/*
  Warnings:

  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `Enum("categories_name")` to `VarChar(191)`.
  - Made the column `questionId` on table `comments` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_questionId_fkey`;

-- AlterTable
ALTER TABLE `categories` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `comments` MODIFY `questionId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
