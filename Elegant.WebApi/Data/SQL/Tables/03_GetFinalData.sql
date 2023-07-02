SELECT
    E.FirstName AS EmployeeFirstName,
    E.LastName AS EmployeeLastName,
    E.Odd AS EmployeeOdd,
    R.Start AS ReservationStart,
    R.[End] AS ReservationEnd,
    DATEDIFF(MINUTE, R.Start, R.[End]) AS DurationInMinutes,
    C.Name AS CustomerName,
    S.Offer AS ServiceOffer,
    S.Price AS ServicePrice
FROM
    Employee AS E
JOIN
    Reservation AS R ON E.Id = R.EmployeeId
JOIN
    Customer AS C ON R.PersonId = C.Id
JOIN
    ReservationService AS RS ON R.Id = RS.ReservationId
JOIN
    [Service] AS S ON RS.ServiceId = S.Id;
