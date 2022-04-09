-- DropIndex
DROP INDEX `LikesOnComment_commentId_fkey` ON `LikesOnComment`;

-- DropIndex
DROP INDEX `LikesOnQuestion_questionId_fkey` ON `LikesOnQuestion`;

-- DropIndex
DROP INDEX `comments_questionId_fkey` ON `comments`;

-- DropIndex
DROP INDEX `comments_userId_fkey` ON `comments`;

-- DropIndex
DROP INDEX `questions_categoryId_fkey` ON `questions`;

-- DropIndex
DROP INDEX `questions_userId_fkey` ON `questions`;
