/*
  Warnings:

  - You are about to drop the column `user` on the `Code` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Code` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Code` DROP COLUMN `user`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Liked` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NULL,
    `codeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Code` ADD CONSTRAINT `Code_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Liked` ADD CONSTRAINT `Liked_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Liked` ADD CONSTRAINT `Liked_codeId_fkey` FOREIGN KEY (`codeId`) REFERENCES `Code`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
