-- AlterTable
ALTER TABLE `comments` MODIFY `userId` VARCHAR(191) NULL,
    MODIFY `questionId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `questions` MODIFY `userId` VARCHAR(191) NULL,
    MODIFY `categoryId` INTEGER NULL;
