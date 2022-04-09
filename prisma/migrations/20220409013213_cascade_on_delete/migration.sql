-- DropForeignKey
ALTER TABLE `LikesOnComment` DROP FOREIGN KEY `LikesOnComment_commentId_fkey`;

-- DropForeignKey
ALTER TABLE `LikesOnComment` DROP FOREIGN KEY `LikesOnComment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `LikesOnQuestion` DROP FOREIGN KEY `LikesOnQuestion_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `LikesOnQuestion` DROP FOREIGN KEY `LikesOnQuestion_userId_fkey`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_userId_fkey`;

-- DropForeignKey
ALTER TABLE `questions` DROP FOREIGN KEY `questions_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `questions` DROP FOREIGN KEY `questions_userId_fkey`;
