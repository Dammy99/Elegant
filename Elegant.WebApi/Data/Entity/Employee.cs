namespace Data.Entity
{
    internal class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public bool Odd { get; set; }
    }
}
