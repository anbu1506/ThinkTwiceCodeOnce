/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `accessToken` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `accessTokenExpires` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `providerId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `providerType` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Account` table. All the data in the column will be lost.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `accessToken` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `VerificationRequest` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `provider` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_userId_fkey`;

-- DropIndex
DROP INDEX `Account_providerId_providerAccountId_key` ON `Account`;

-- DropIndex
DROP INDEX `Session_accessToken_key` ON `Session`;

-- AlterTable
ALTER TABLE `Account` DROP PRIMARY KEY,
    DROP COLUMN `accessToken`,
    DROP COLUMN `accessTokenExpires`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `id`,
    DROP COLUMN `providerId`,
    DROP COLUMN `providerType`,
    DROP COLUMN `refreshToken`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `access_token` VARCHAR(191) NULL,
    ADD COLUMN `expires_at` INTEGER NULL,
    ADD COLUMN `id_token` VARCHAR(191) NULL,
    ADD COLUMN `provider` VARCHAR(191) NOT NULL,
    ADD COLUMN `refresh_token` VARCHAR(191) NULL,
    ADD COLUMN `scope` VARCHAR(191) NULL,
    ADD COLUMN `session_state` VARCHAR(191) NULL,
    ADD COLUMN `token_type` VARCHAR(191) NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`provider`, `providerAccountId`);

-- AlterTable
ALTER TABLE `Session` DROP PRIMARY KEY,
    DROP COLUMN `accessToken`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `id`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    MODIFY `email` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `VerificationRequest`;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    PRIMARY KEY (`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
