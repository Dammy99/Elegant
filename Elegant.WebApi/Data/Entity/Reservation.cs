namespace Data.Entity
{
    internal class Reservation
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public int PersonId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
    }
}
