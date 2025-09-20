/*
  Warnings:

  - Added the required column `age` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "public"."Role" ADD VALUE 'student';

-- AlterTable
ALTER TABLE "public"."Student" ADD COLUMN     "age" INTEGER NOT NULL;
