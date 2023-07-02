USE ElegantDb
GO

IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Employee')
BEGIN
    INSERT INTO Employee (FirstName, LastName, Odd)
    VALUES
        ('John', 'Doe', 1),
        ('Jane', 'Smith', 0),
        ('Michael', 'Johnson', 1),
        ('Emily', 'Davis', 0),
        ('Robert', 'Wilson', 1),
        ('Sarah', 'Anderson', 0),
        ('David', 'Taylor', 1),
        ('Olivia', 'Moore', 0),
        ('Daniel', 'Clark', 1),
        ('Sophia', 'Lee', 0);
END


IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Specialization')
BEGIN
    INSERT INTO Specialization ([Name])
    VALUES
        ('Перукар'),
        ('Манікюр'),
        ('Брови');
END

IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Employee_Specialization')
BEGIN
    INSERT INTO Employee_Specialization (EmployeeId, SpecializationId)
    VALUES
        (1,1),
        (2,2),
        (2,3),
        (3,1),
        (3,3),
        (4,1),
        (5,1),
        (5,2),
        (6,1)
END

IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Service')
BEGIN
	INSERT INTO Service (Offer, SpecializationId, Price, [Time])
	VALUES
		('Процедура 1', 1, 100.00, '01:00:00'),
		('Процедура 2', 2, 150.00, '01:30:00'),
		('Процедура 3', 1, 80.00, '00:30:00'),
		('Процедура 4', 3, 120.00, '01:00:00'),
		('Процедура 5', 1, 90.00, '00:30:00'),
	    ('Процедура 6', 2, 130.00, '01:00:00'),
		('Процедура 7', 3, 150.00, '00:30:00'),
		('Процедура 8', 2, 200.00, '00:30:00'),
		('Процедура 9', 1, 1000.00, '01:30:00');
END

IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Customer')
BEGIN
    INSERT INTO Customer (Phone, [Name])
    VALUES
        ('123456789', 'John Doe'),
        ('987654321', 'Jane Smith'),
        ('555555555', 'Robert Johnson'),
		('222222222', 'John'),
        ('333333333', 'Jane'),
        ('444444444', 'Robert');
END

IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Reservation')
BEGIN
    INSERT INTO Reservation (EmployeeId, PersonId, [Start], [End])
    VALUES
        (1, 6, '2023-07-01 10:00:00', '2023-07-01 11:30:00'),
        (2, 5, '2023-07-01 14:00:00', '2023-07-01 15:30:00'),
        (3, 3, '2023-07-02 11:00:00', '2023-07-02 12:00:00'),
        (4, 2, '2023-07-02 13:00:00', '2023-07-02 14:30:00'),
        (5, 4, '2023-07-03 10:30:00', '2023-07-03 11:00:00'),
        (6, 1, '2023-07-03 15:00:00', '2023-07-03 16:30:00');
END

IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Reservation')
BEGIN
	INSERT INTO ReservationService (ReservationId, ServiceId)
	VALUES
		(1, 9),
		(2, 2),
		(3, 4),
		(4, 2),
		(5, 3),
		(6, 9);
END



