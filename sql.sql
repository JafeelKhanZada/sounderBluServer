CREATE TABLE IF NOT EXISTS `users` (
    `id` INTEGER NOT NULL auto_increment,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

Executing (default): SHOW INDEX
FROM
    `users` Executing (default): CREATE TABLE IF NOT EXISTS `mines` (
        `id` INTEGER auto_increment UNIQUE,
        `name` TEXT NOT NULL,
        `record` INTEGER,
        `createdAt` DATETIME NOT NULL,
        `updatedAt` DATETIME NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

Executing (default): SHOW INDEX
FROM
    `mines` Executing (default): CREATE TABLE IF NOT EXISTS `clients` (
        `id` INTEGER NOT NULL auto_increment UNIQUE,
        `name` TEXT NOT NULL,
        `limit` INTEGER NOT NULL,
        `relation` TEXT NOT NULL,
        `noOfRecord` INTEGER,
        `mobile_number` TEXT NOT NULL,
        `location` TEXT NOT NULL,
        `createdAt` DATETIME NOT NULL,
        `updatedAt` DATETIME NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

Executing (default): SHOW INDEX
FROM
    `clients` Executing (default): CREATE TABLE IF NOT EXISTS `client_records` (
        `id` INTEGER NOT NULL auto_increment UNIQUE,
        `buying_rate` INTEGER NOT NULL,
        `selling_rate` INTEGER NOT NULL,
        `bilti_no` TEXT NOT NULL,
        `weight` FLOAT NOT NULL,
        `quality` TEXT NOT NULL,
        `status` TEXT NOT NULL,
        `truck_no` TEXT NOT NULL,
        `startDate` DATETIME,
        `createdAt` DATETIME NOT NULL,
        `updatedAt` DATETIME NOT NULL,
        `clientId` INTEGER,
        `userId` INTEGER,
        `mineId` INTEGER,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE
        SET
            NULL ON UPDATE CASCADE,
            FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE
        SET
            NULL ON UPDATE CASCADE,
            FOREIGN KEY (`mineId`) REFERENCES `mines` (`id`) ON DELETE
        SET
            NULL ON UPDATE CASCADE
    ) ENGINE = InnoDB;

Executing (default): SHOW INDEX
FROM
    `client_records` Executing (default): CREATE TABLE IF NOT EXISTS `mine_records` (
        `id` INTEGER NOT NULL auto_increment UNIQUE,
        `buying_rate` INTEGER NOT NULL,
        `status` VARCHAR(255) NOT NULL,
        `createdAt` DATETIME NOT NULL,
        `updatedAt` DATETIME NOT NULL,
        `mineId` INTEGER,
        `clientRecordId` INTEGER,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`mineId`) REFERENCES `mines` (`id`) ON DELETE
        SET
            NULL ON UPDATE CASCADE,
            FOREIGN KEY (`clientRecordId`) REFERENCES `client_records` (`id`) ON DELETE
        SET
            NULL ON UPDATE CASCADE
    ) ENGINE = InnoDB;

Executing (default): SHOW INDEX
FROM
    `mine_records` Executing (default): CREATE TABLE IF NOT EXISTS `Offices` (
        `id` INTEGER NOT NULL auto_increment UNIQUE,
        `amount` FLOAT NOT NULL,
        `expense_name` TEXT NOT NULL,
        `createdAt` DATETIME NOT NUL