-- CreateTable
CREATE TABLE `Application` (
    `id` VARCHAR(191) NOT NULL,
    `external_job_id` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `resume_id` VARCHAR(191) NULL,
    `job_title` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NULL,
    `job_url` VARCHAR(191) NULL,
    `company_logo` VARCHAR(191) NULL,
    `salary_string` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `status` ENUM('INTERESTED', 'APPLIED', 'PHONE_SCREEN', 'INTERVIEW', 'TECHNICAL_ASSESSMENT', 'FINAL_INTERVIEW', 'OFFER', 'ACCEPTED', 'REJECTED', 'WITHDRAWN') NOT NULL DEFAULT 'INTERESTED',
    `notes` VARCHAR(191) NULL,
    `applied_date` DATETIME(3) NULL,
    `last_contact_date` DATETIME(3) NULL,
    `next_follow_up_date` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Application_external_job_id_user_id_key`(`external_job_id`, `user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_resume_id_fkey` FOREIGN KEY (`resume_id`) REFERENCES `Resume`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
